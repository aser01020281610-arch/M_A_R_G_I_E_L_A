import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORDS = ["Repurpose", "Dissect", "Rebuild"];

export default function Artisanal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-12%", "14%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["16%", "-14%"]);
  const lineDraw = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section id="artisanal" ref={ref} className="relative overflow-hidden bg-ink py-24 text-bone md:py-36">
      {/* animated stitch */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M -50 120 H 25 V 62 H 78 V 28 H 108"
          fill="none"
          stroke="rgba(242,240,236,0.22)"
          strokeWidth="1"
          className="stitch-line"
          style={{ pathLength: lineDraw }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative px-5 md:px-10">
        <span className="font-mono text-[10px] tracking-[0.35em] text-bone/45 uppercase">
          04 — Line 0 Artisanal
        </span>

        <h2 className="font-expanded mt-6 text-[15vw] leading-[0.78] font-extrabold tracking-[-0.055em] uppercase md:text-[9.5vw]">
          {WORDS.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {w}
                {i < WORDS.length - 1 && <span className="text-oxblood">.</span>}
              </motion.span>
            </span>
          ))}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-12 md:gap-10">
          <motion.div style={{ y: y1, rotate }} className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/margiela/artisanal.jpg"
                alt="Artisanal reconstruction detail"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-bone px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-ink uppercase">
                Fig. 01 — reclaimed tulle
              </span>
            </div>
          </motion.div>

          <div className="md:col-span-3 md:pt-24">
            <p className="font-serif text-2xl leading-[1.35] italic md:text-[1.7vw]">
              “A garment is never finished. It is only interrupted.”
            </p>
            <p className="mt-8 font-mono text-[10px] leading-[2.2] tracking-[0.14em] text-bone/55 uppercase">
              Each Artisanal piece begins as something that already existed —
              vintage leather, antique silk, discarded haberdashery. The atelier
              takes it apart, studies its logic, and rebuilds it as couture.
            </p>
            <p className="mt-6 font-mono text-[10px] leading-[2.2] tracking-[0.14em] text-bone/55 uppercase">
              Nothing is discarded. Everything is absorbed.
            </p>
          </div>

          <motion.div style={{ y: y2 }} className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/margiela/atelier.jpg"
                alt="The atelier"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-oxblood/25 mix-blend-multiply" />
              <span className="absolute bottom-3 left-3 bg-bone px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-ink uppercase">
                Fig. 02 — the white coat
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 border border-white/15">
              {[
                ["41", "Rue Saint-Maur"],
                ["1988", "Founded"],
                ["0", "Logos"],
              ].map(([a, b]) => (
                <div key={b} className="border-r border-white/15 px-3 py-5 text-center last:border-0">
                  <div className="font-expanded text-2xl leading-none font-extrabold">{a}</div>
                  <div className="mt-2 font-mono text-[8px] tracking-[0.2em] text-bone/45 uppercase">
                    {b}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
