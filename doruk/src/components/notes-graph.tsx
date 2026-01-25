import { mockNotes } from "@/lib/notes";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

interface Node {
  id: string;
  title: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: string[];
}

interface NotesGraphProps {
  className?: string;
  onNodeClick?: (slug: string) => void;
}

export function NotesGraph({ className, onNodeClick }: NotesGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const navigate = useNavigate();

  // Initialize nodes
  const nodes = useMemo(() => {
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const radius = Math.min(dimensions.width, dimensions.height) * 0.35;

    return mockNotes.map((note, index) => {
      const angle = (index / mockNotes.length) * Math.PI * 2;
      const jitter = Math.random() * 40 - 20;

      return {
        id: note.slug,
        title: note.title,
        x: centerX + Math.cos(angle) * (radius + jitter),
        y: centerY + Math.sin(angle) * (radius + jitter),
        vx: 0,
        vy: 0,
        connections: note.links,
      };
    });
  }, [dimensions]);

  // Update dimensions on resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      setDimensions({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Force-directed layout simulation
  useEffect(() => {
    nodesRef.current = nodes.map((n) => ({ ...n }));
    const nodesCopy = nodesRef.current;

    const simulate = () => {
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;

      // Apply forces
      for (let i = 0; i < nodesCopy.length; i++) {
        const node = nodesCopy[i];
        if (!node) continue;

        // Center gravity
        node.vx += (centerX - node.x) * 0.001;
        node.vy += (centerY - node.y) * 0.001;

        // Repulsion from other nodes
        for (let j = 0; j < nodesCopy.length; j++) {
          if (i === j) continue;
          const other = nodesCopy[j];
          if (!other) continue;
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = 800 / (dist * dist);
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Attraction to connected nodes
        for (const connId of node.connections) {
          const conn = nodesCopy.find((n) => n.id === connId);
          if (!conn) continue;
          const dx = conn.x - node.x;
          const dy = conn.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = dist * 0.005;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Apply velocity with damping
        node.x += node.vx * 0.1;
        node.y += node.vy * 0.1;
        node.vx *= 0.9;
        node.vy *= 0.9;

        // Bounds
        node.x = Math.max(30, Math.min(dimensions.width - 30, node.x));
        node.y = Math.max(30, Math.min(dimensions.height - 30, node.y));
      }
    };

    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      // Clear
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Get colors
      const isDark = document.documentElement.classList.contains("dark");

      const nodeColor = isDark ? "rgba(250, 250, 250, 0.9)" : "rgba(10, 10, 10, 0.9)";
      const nodeHoverColor = isDark ? "rgba(14, 165, 233, 1)" : "rgba(2, 132, 199, 1)";
      const lineColor = isDark ? "rgba(250, 250, 250, 0.15)" : "rgba(10, 10, 10, 0.12)";
      const lineHoverColor = isDark ? "rgba(14, 165, 233, 0.5)" : "rgba(2, 132, 199, 0.5)";

      // Draw connections
      for (const node of nodesCopy) {
        if (!node) continue;
        for (const connId of node.connections) {
          const conn = nodesCopy.find((n) => n.id === connId);
          if (!conn) continue;

          const isHighlighted = hoveredNode === node.id || hoveredNode === conn.id;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(conn.x, conn.y);
          ctx.strokeStyle = isHighlighted ? lineHoverColor : lineColor;
          ctx.lineWidth = isHighlighted ? 2 : 1;
          ctx.stroke();
        }
      }

      // Draw nodes
      for (const node of nodesCopy) {
        if (!node) continue;
        const isHovered = hoveredNode === node.id;
        const isConnected = hoveredNode && (
          node.id === hoveredNode ||
          node.connections.includes(hoveredNode) ||
          nodesCopy.find((n) => n?.id === hoveredNode)?.connections.includes(node.id)
        );

        const radius = isHovered ? 8 : 6;
        const color = isHovered ? nodeHoverColor : (isConnected ? nodeHoverColor : nodeColor);
        const alpha = hoveredNode && !isConnected ? 0.3 : 1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Draw glow for hovered node
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 16, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? "rgba(14, 165, 233, 0.15)" : "rgba(2, 132, 199, 0.1)";
          ctx.fill();
        }
      }

      simulate();
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes, dimensions, hoveredNode]);

  // Handle mouse events
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let found = false;
    for (const node of nodesRef.current) {
      if (!node) continue;
      const dx = node.x - x;
      const dy = node.y - y;
      if (dx * dx + dy * dy < 400) { // 20px radius
        setHoveredNode(node.id);
        found = true;
        break;
      }
    }
    if (!found) setHoveredNode(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (const node of nodesRef.current) {
      if (!node) continue;
      const dx = node.x - x;
      const dy = node.y - y;
      if (dx * dx + dy * dy < 400) {
        if (onNodeClick) {
          onNodeClick(node.id);
        } else {
          navigate({ to: "/notes/$slug", params: { slug: node.id } });
        }
        break;
      }
    }
  };

  // Find hovered node for tooltip
  const hoveredNodeData = hoveredNode ? nodesRef.current.find((n) => n?.id === hoveredNode) : null;

  return (
    <div
      ref={containerRef}
      className={cn("relative rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden", className)}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredNode(null)}
        onClick={handleClick}
        className="cursor-pointer"
      />

      {/* Tooltip */}
      {hoveredNodeData && (
        <div
          className="absolute pointer-events-none bg-card border border-border rounded-lg px-3 py-2 shadow-lg text-sm font-medium z-10 transition-opacity"
          style={{
            left: hoveredNodeData.x + 16,
            top: hoveredNodeData.y - 8,
            transform: "translateY(-100%)",
          }}
        >
          {hoveredNodeData.title}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-foreground" />
          <span>Note</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-px bg-border" />
          <span>Connection</span>
        </div>
      </div>
    </div>
  );
}
