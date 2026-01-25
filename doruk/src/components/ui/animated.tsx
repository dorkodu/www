import { cn } from "@/lib/utils";
import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

// ============================================
// SCROLL REVEAL COMPONENT
// ============================================
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
  distance = 24,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  const transforms = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transforms[direction],
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ============================================
// TILT CARD COMPONENT
// ============================================
interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
  scale?: number;
  glare?: boolean;
  glareColor?: string;
}

export function TiltCard({
  children,
  className,
  tiltMax = 8,
  scale = 1.02,
  glare = true,
  glareColor = "255, 255, 255",
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -tiltMax;
      const rotateY = ((x - centerX) / centerX) * tiltMax;

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);
      setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    },
    [tiltMax, scale]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("");
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{
        transform: transform || "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: isHovered ? "none" : "transform 0.4s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(${glareColor}, 0.15), transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
    </div>
  );
}

// ============================================
// ANIMATED TEXT COMPONENT
// ============================================
interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  animation?: "fadeUp" | "fadeIn" | "blur" | "slide";
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  staggerDelay = 30,
  animation = "fadeUp",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const animations = {
    fadeUp: {
      initial: { opacity: 0, transform: "translateY(10px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    blur: {
      initial: { opacity: 0, filter: "blur(8px)", transform: "translateY(5px)" },
      animate: { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
    },
    slide: {
      initial: { opacity: 0, transform: "translateX(-10px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
  };

  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block animate-text-reveal"
          style={{
            animationDelay: `${delay + i * staggerDelay}ms`,
            ...animations[animation].initial,
            animation: `textReveal 0.5s ease-out ${delay + i * staggerDelay}ms forwards`,
          }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

// ============================================
// SPOTLIGHT CARD COMPONENT
// ============================================
interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "14, 165, 233",
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${spotlightColor}, 0.08), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ============================================
// MAGNETIC BUTTON COMPONENT
// ============================================
interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className, strength = 0.4, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={ref}
      className={className}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? "transform 0.3s ease-out" : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}

// ============================================
// SHINE BORDER COMPONENT
// ============================================
interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  color?: string;
}

export function ShineBorder({
  children,
  className,
  borderWidth = 1,
  duration = 3,
  color = "hsl(var(--link))",
  ...props
}: ShineBorderProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl", className)}
      style={{ padding: borderWidth }}
      {...props}
    >
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          backgroundSize: "200% 100%",
          animation: `shimmer ${duration}s infinite linear`,
        }}
      />
      <div className="relative rounded-2xl bg-card">{children}</div>
    </div>
  );
}

// ============================================
// PARALLAX SECTION COMPONENT
// ============================================
interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({ children, className, speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewCenter = viewHeight / 2;

      setOffset((elementCenter - viewCenter) * speed * -1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div style={{ transform: `translateY(${offset}px)` }}>{children}</div>
    </div>
  );
}
