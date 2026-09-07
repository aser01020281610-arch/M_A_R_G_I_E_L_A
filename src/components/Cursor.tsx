import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      if (t) {
        setActive(true);
        setLabel(t.dataset.cursor || null);
      } else {
        setActive(false);
        setLabel(null);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{
          width: active ? 92 : 12,
          height: active ? 92 : 12,
          opacity: active ? 1 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
      >
        {label && active && (
          <span className="font-mono text-[9px] tracking-[0.18em] whitespace-nowrap text-black uppercase">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
