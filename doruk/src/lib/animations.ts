import { useCallback, useEffect, useRef, useState } from "react";

// ============================================
// SCROLL ANIMATION HOOK
// ============================================
interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
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
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// ============================================
// TILT EFFECT HOOK
// ============================================
interface TiltOptions {
  max?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
  glareMaxOpacity?: number;
}

export function useTilt(options: TiltOptions = {}) {
  const { max = 10, scale = 1.02, speed = 400, glare = true, glareMaxOpacity = 0.2 } = options;
  const ref = useRef<HTMLElement>(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -max;
      const rotateY = ((x - centerX) / centerX) * max;

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      });

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        setGlareStyle({
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareMaxOpacity}), transparent 60%)`,
          opacity: 1,
        });
      }
    },
    [max, scale, speed, glare, glareMaxOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
    });
    setGlareStyle({ opacity: 0 });
  }, [speed]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { ref, style, glareStyle };
}

// ============================================
// MAGNETIC BUTTON HOOK
// ============================================
interface MagneticOptions {
  strength?: number;
  radius?: number;
}

export function useMagnetic(options: MagneticOptions = {}) {
  const { strength = 0.3, radius = 100 } = options;
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < radius) {
        const factor = 1 - distance / radius;
        setPosition({
          x: distanceX * strength * factor,
          y: distanceY * strength * factor,
        });
      }
    },
    [strength, radius]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 && position.y === 0 ? "transform 0.3s ease-out" : "none",
  };

  return { ref, style };
}

// ============================================
// SPOTLIGHT EFFECT HOOK
// ============================================
export function useSpotlight() {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const spotlightStyle = {
    background: isHovered
      ? `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--spotlight-color, 14, 165, 233) / 0.06), transparent 40%)`
      : "",
  };

  return { ref, spotlightStyle, isHovered };
}

// ============================================
// ANIMATED COUNTER HOOK
// ============================================
interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
}

export function useCounter({ start = 0, end, duration = 2000, delay = 0 }: UseCounterOptions) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  const startCounting = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = performance.now() + delay;
    const diff = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + diff * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, delay, hasStarted]);

  return { count, startCounting };
}

// ============================================
// TYPING ANIMATION HOOK
// ============================================
interface UseTypingOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export function useTyping({ text, speed = 50, delay = 0 }: UseTypingOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    let index = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete, startTyping };
}
