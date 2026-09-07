import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const TEXT =
  "We do not sign our clothes. We leave four white stitches on the inside, where only the wearer knows. The garment belongs to the person who wears it, not to the name that made it.";

const TOKENS = TEXT.split(" ");

function Word({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });

  return (
    <section className="relative bg-bone-dark py-24 md:py-40">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <span className="font-mono text-[10px] tracking-[0.35em] text-ash uppercase">
          Manifesto
        </span>
        <p
          ref={ref}
          className="font-expanded mt-8 text-[7.4vw] leading-[0.95] font-extrabold tracking-[-0.04em] uppercase md:text-[3.4vw]"
        >
          {TOKENS.map((t, i) => {
            const start = i / TOKENS.length;
            const end = start + 1 / TOKENS.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {t}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
