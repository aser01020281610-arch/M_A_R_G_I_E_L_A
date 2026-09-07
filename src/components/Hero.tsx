import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORD = "MARGIELA".split("");

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-ink">
      {/* image */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src="/margiela/hero.jpg"
          alt="Maison Margiela Artisanal"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/85" />
      </motion.div>

      {/* frame lines */}
      <div className="pointer-events-none absolute inset-5 border border-white/10 md:inset-10" />

      {/* vertical meta */}
      <div className="pointer-events-none absolute top-1/2 left-6 hidden -translate-y-1/2 md:block md:left-11">
        <span className="writing-vertical font-mono text-[9px] tracking-[0.45em] text-white/45 uppercase">
          Anonymity of the designer — Est. 1988
        </span>
      </div>
      <div className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 md:block md:right-11">
        <span className="writing-vertical font-mono text-[9px] tracking-[0.45em] text-white/45 uppercase">
          41 Rue Saint-Maur · Paris 11e
        </span>
      </div>

      {/* title */}
      <motion.div
        style={{ y: titleY, opacity }}
        className="absolute inset-x-0 bottom-0 z-10 px-5 pb-14 md:px-10 md:pb-16"
      >
        <div className="mb-4 flex items-center gap-4 md:mb-6">
          <span className="font-mono text-[9px] tracking-[0.35em] text-white/60 uppercase">
            Maison de mode
          </span>
          <span className="h-[1px] flex-1 bg-white/20" />
          <span className="font-mono text-[9px] tracking-[0.35em] text-white/60 uppercase">
            Paris
          </span>
        </div>

        <h1 className="flex flex-wrap justify-start overflow-hidden text-white">
          {WORD.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%", rotate: 6 }}
              animate={{ y: "0%", rotate: 0 }}
              transition={{
                delay: 0.05 * i,
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-expanded inline-block text-[17.5vw] leading-[0.78] font-extrabold tracking-[-0.05em] uppercase"
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="max-w-md font-mono text-[11px] leading-[2] tracking-[0.12em] text-white/70 uppercase md:col-span-5"
          >
            A house built on deconstruction — the garment taken apart, understood,
            and reassembled with its seams turned outward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="flex flex-wrap items-center gap-3 md:col-span-7 md:justify-end"
          >
            <a
              href="#lines"
              data-cursor="Explore"
              className="group relative overflow-hidden border border-white/40 px-8 py-4"
            >
              <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] text-white uppercase transition-colors duration-500 group-hover:text-ink">
                Discover the lines
              </span>
              <span className="absolute inset-0 -translate-y-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
            </a>
            <a
              href="#artisanal"
              data-cursor="Watch"
              className="group relative overflow-hidden px-8 py-4"
            >
              <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] text-white/80 uppercase transition-colors duration-500 group-hover:text-bone">
                Enter the atelier
              </span>
              <span className="absolute inset-0 -translate-y-full bg-oxblood transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-white/50 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
