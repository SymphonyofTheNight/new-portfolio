import { useEffect, useRef, useState } from "react";

const CURSOR_SIZE = 44;

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    const cursor = cursorRef.current;
    if (!cursor) return;

    const speed = 0.15;

    const interactiveSelector =
      "button, a, input, textarea, select, [data-cursor-hover]";

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onPointerOver = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest(interactiveSelector)) {
        setIsHovering(true);
      }
    };

    const onPointerOut = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest(interactiveSelector)) {
        setIsHovering(false);
      }
    };

    let rafId: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      cursor.style.transform = `
        translate(${pos.current.x - CURSOR_SIZE / 2}px,
                  ${pos.current.y - CURSOR_SIZE / 2}px)
        scale(${isHovering ? 1.8 : 1})
      `;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);

    animate();

    return () => {
      document.body.classList.remove("custom-cursor-enabled");

      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);

      cancelAnimationFrame(rafId);
    };
  }, [isHovering]);

  return <div ref={cursorRef} className="custom-cursor" />;
}
