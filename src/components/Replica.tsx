import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REPLICA_MEMORIES } from "../data/margiela";

export default function Replica() {
  const [i, setI] = useState(0);
  const m = REPLICA_MEMORIES[i];

  return (
    <section id="replica" className="relative overflow-hidden bg-bone py-20 md:py-28">
      <div className="grid grid-cols-1 gap-10 px-5 md:grid-cols-12 md:gap-8 md:px-10">
        {/* visual */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone-dark">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={m.place}
                src="/margiela/replica.jpg"
                alt={m.place}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-3 border border-ink/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                key={m.place + "-label"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-2/3 bg-bone/95 px-4 py-5 text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
              >
                <div className="font-mono text-[7px] tracking-[0.3em] text-ash uppercase">
                  Replica
                </div>
                <div className="font-serif mt-2 text-xl leading-tight italic">{m.place}</div>
                <div className="mt-1 font-mono text-[8px] tracking-[0.25em] text-ash uppercase">
                  {m.when}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col justify-center md:col-span-7 md:pl-6">
          <span className="font-mono text-[10px] tracking-[0.35em] text-ash uppercase">
            05 — Line 3 Fragrance
          </span>
          <h2 className="font-expanded mt-4 text-[12vw] leading-[0.82] font-extrabold tracking-[-0.05em] uppercase md:text-[5.6vw]">
            Replica
          </h2>
          <p className="font-serif mt-2 text-[6vw] leading-[0.95] italic md:text-[2.4vw]">
            memory, bottled
          </p>

          <ul className="mt-10 border-t border-ink/15">
            {REPLICA_MEMORIES.map((mem, idx) => (
              <li key={mem.place} onMouseEnter={() => setI(idx)}>
                <button
                  onClick={() => setI(idx)}
                  data-cursor="Smell"
                  className={
                    "group flex w-full items-baseline justify-between gap-4 border-b border-ink/15 py-4 text-left transition-colors duration-300 " +
                    (idx === i ? "bg-ink text-bone" : "hover:bg-ink/5")
                  }
                >
                  <span className="flex items-baseline gap-4 pl-3">
                    <span className="font-mono text-[9px] tracking-[0.2em] opacity-50">
                      0{idx + 1}
                    </span>
                    <span className="font-expanded text-lg leading-none font-extrabold tracking-[-0.02em] uppercase md:text-2xl">
                      {mem.place}
                    </span>
                  </span>
                  <span className="pr-3 font-mono text-[9px] tracking-[0.2em] uppercase opacity-60">
                    {mem.when}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <span className="font-mono text-[9px] tracking-[0.25em] text-ash uppercase">Notes</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {m.note.split(" · ").map((n, idx) => (
                <motion.span
                  key={n + idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="border border-ink/20 px-3 py-2 font-mono text-[9px] tracking-[0.2em] uppercase"
                >
                  {n}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
