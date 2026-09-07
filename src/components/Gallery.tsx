import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GALLERY } from "../data/margiela";

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      setDist(Math.max(0, el.scrollWidth - window.innerWidth + 32));
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 800);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0.02, 0.98], [0, -dist]);

  return (
    <section id="gallery" ref={ref} className="relative h-[420vh] bg-ink">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="flex items-baseline justify-between px-5 pb-6 md:px-10">
          <span className="font-mono text-[10px] tracking-[0.35em] text-bone/50 uppercase">
            03 — Archive
          </span>
          <span className="font-mono text-[10px] tracking-[0.35em] text-bone/50 uppercase">
            1988 — Present
          </span>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max gap-4 px-5 md:gap-8 md:px-10"
        >
          {/* intro card */}
          <div className="flex h-[62vh] w-[78vw] shrink-0 flex-col justify-end border border-white/15 p-6 md:w-[34vw] md:p-10">
            <h2 className="font-expanded text-[10vw] leading-[0.82] font-extrabold tracking-[-0.045em] text-bone uppercase md:text-[4.6vw]">
              The
              <br />
              Archive
            </h2>
            <p className="mt-6 max-w-xs font-mono text-[10px] leading-[2] tracking-[0.14em] text-bone/50 uppercase">
              Selected objects and looks from the House. Photographed without
              embellishment, presented without explanation.
            </p>
            <span className="mt-8 inline-flex h-10 w-40 items-center justify-center border border-white/25 font-mono text-[9px] tracking-[0.3em] text-bone/70 uppercase">
              Drag / Scroll →
            </span>
          </div>

          {GALLERY.map((g, i) => (
            <figure
              key={i}
              data-cursor="View"
              className="group relative h-[62vh] w-[80vw] shrink-0 overflow-hidden bg-white/5 md:w-[38vw]"
            >
              <img
                src={g.img}
                alt={g.label}
                className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.07] group-hover:grayscale-0 grayscale-[0.35]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.25em] text-white/70 uppercase">
                {String(i + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
              </span>
              <figcaption className="absolute bottom-0 left-0 w-full p-5 md:p-7">
                <div className="font-expanded text-xl leading-none font-extrabold tracking-[-0.02em] text-white uppercase md:text-2xl">
                  {g.label}
                </div>
                <div className="mt-2 font-mono text-[9px] tracking-[0.28em] text-white/55 uppercase">
                  {g.meta}
                </div>
              </figcaption>
            </figure>
          ))}

          <div className="flex h-[62vh] w-[60vw] shrink-0 items-end border border-white/15 p-6 md:w-[26vw] md:p-10">
            <p className="font-mono text-[10px] leading-[2] tracking-[0.14em] text-bone/50 uppercase">
              Everything that has been made remains part of the conversation.
              <br />
              <br />
              — The House
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
