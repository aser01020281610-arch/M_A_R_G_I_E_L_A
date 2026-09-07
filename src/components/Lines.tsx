import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LINES } from "../data/margiela";

export default function Lines() {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <section id="lines" ref={ref} onMouseMove={onMove} className="relative bg-bone py-20 md:py-28">
      <div className="px-5 md:px-10">
        <div className="mb-10 flex flex-col gap-6 border-b border-ink/15 pb-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.35em] text-ash uppercase">
              01 — The Numbering System
            </span>
            <h2 className="font-expanded mt-4 text-[11vw] leading-[0.85] font-extrabold tracking-[-0.045em] uppercase md:text-[6.2vw]">
              Every number
              <br />
              <span className="font-serif text-[12vw] leading-[0.8] italic font-normal md:text-[6.6vw]">
                is a language
              </span>
            </h2>
          </div>
          <p className="max-w-sm font-mono text-[10px] leading-[2.1] tracking-[0.12em] text-ash uppercase">
            The House never signs its name. Instead, a circle of numbers — each one
            a universe of its own. The label is blank. Four white stitches, on the
            inside, hold the identity.
          </p>
        </div>

        <ul onMouseLeave={() => setHover(null)}>
          {LINES.map((l, i) => (
            <li key={l.n}>
              <div
                onMouseEnter={() => setHover(i)}
                data-cursor={l.img ? "Look" : "Open"}
                className="group relative flex items-baseline gap-5 border-t border-ink/15 py-4 transition-colors duration-300 last:border-b hover:bg-ink md:py-6"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-ash transition-colors group-hover:text-bone/50 md:w-16">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="font-expanded w-14 text-3xl leading-none font-extrabold transition-colors duration-300 group-hover:text-bone md:w-24 md:text-5xl">
                  {l.n}
                </span>

                <span className="font-expanded flex-1 text-xl leading-none font-extrabold tracking-[-0.02em] uppercase transition-all duration-500 group-hover:translate-x-3 group-hover:text-bone md:text-4xl">
                  {l.name}
                </span>

                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-ash transition-colors group-hover:text-bone/60 lg:block">
                  {l.year}
                </span>

                <span className="font-mono text-lg text-ash transition-all duration-500 group-hover:translate-x-2 group-hover:text-bone">
                  →
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* floating preview */}
      <AnimatePresence>
        {hover !== null && LINES[hover].img && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -3, x: pos.x, y: pos.y }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="pointer-events-none absolute top-0 left-0 z-20 hidden h-[320px] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden md:block"
          >
            <img
              src={LINES[hover].img!}
              alt={LINES[hover].name}
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-bone px-2 py-1 font-mono text-[9px] tracking-[0.2em] uppercase">
              Line {LINES[hover].n}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* mobile note */}
      <div className="px-5 pt-8 md:hidden">
        <p className="font-mono text-[9px] tracking-[0.2em] text-ash uppercase">
          Tap a line to explore
        </p>
      </div>
    </section>
  );
}
