import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 2100;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setHide(true), 350);
        setTimeout(onDone, 1500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-bone px-6 py-8 md:px-12"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-start justify-between font-mono text-[10px] tracking-[0.25em] uppercase">
            <span>Maison Margiela</span>
            <span>Paris — 41 Rue Saint-Maur</span>
          </div>

          <div className="flex flex-col items-center">
            <svg width="120" height="34" viewBox="0 0 120 34" className="mb-6">
              {[0, 1, 2, 3].map((i) => (
                <motion.line
                  key={i}
                  x1={6 + i * 14}
                  y1="4"
                  x2={6 + i * 14}
                  y2="30"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 * i, ease: "easeInOut" }}
                />
              ))}
            </svg>
            <h1 className="font-expanded text-[9vw] leading-[0.85] font-extrabold tracking-[-0.04em] uppercase md:text-[5.5vw]">
              Margiela
            </h1>
          </div>

          <div className="flex items-end justify-between">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ash">
              <div>Mode · Objet · Parfum</div>
              <div className="mt-1">Est. 1988</div>
            </div>
            <div className="font-expanded text-[14vw] leading-none font-extrabold tracking-tighter tabular-nums md:text-[7vw]">
              {String(count).padStart(3, "0")}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-ink/10">
            <div
              className="h-full bg-ink transition-[width] duration-100"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
