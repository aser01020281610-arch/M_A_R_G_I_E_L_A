import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Head, Btn, Reveal, Kicker } from "../components/ui";
import { ERAS } from "../data/timeline";
import { QUOTES, EXHIBITIONS, COLLABS } from "../data/house";
import { POOL } from "../lib/images";

export default function HistoryPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <section className="bg-ink px-5 pt-32 pb-16 text-bone md:px-10 md:pt-40 md:pb-20">
        <Head
          dark
          kicker="The history"
          title="Paris"
          italic="since 1988"
          lead="Founded by Martin Margiela and Jenny Meirens. Led anonymously by the collective after 2009. Under John Galliano since 2014. Twelve numbered lines, one couture atelier, and a label that has never carried a name."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Btn dark onClick={() => (window.location.hash = "/lines")}>
            The lines
          </Btn>
          <Btn dark onClick={() => (window.location.hash = "/collections")}>
            The collections
          </Btn>
        </div>
      </section>

      {/* timeline */}
      <section ref={ref} className="relative bg-bone px-5 py-16 md:px-10 md:py-24">
        <div className="relative">
          {/* spine */}
          <div className="absolute top-0 left-[7px] h-full w-[1px] bg-ink/15 md:left-[9px]">
            <motion.div style={{ height }} className="w-full bg-oxblood" />
          </div>

          <ul>
            {ERAS.map((e, i) => (
              <Reveal key={e.year + e.title} delay={Math.min(i * 0.03, 0.3)} y={24}>
                <li className="relative grid grid-cols-1 gap-4 pb-12 pl-8 md:grid-cols-12 md:gap-8 md:pb-16 md:pl-14">
                  <span className="absolute top-2 left-0 h-[15px] w-[15px] rounded-full border border-ink/40 bg-bone md:top-3 md:h-[19px] md:w-[19px]" />
                  <div className="md:col-span-3">
                    <p className="font-expanded text-4xl leading-none font-extrabold tracking-[-0.04em] md:text-6xl">
                      {e.year}
                    </p>
                    {e.designer && (
                      <p className="mt-2 font-mono text-[8px] tracking-[0.25em] text-oxblood uppercase">
                        {e.designer}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-expanded text-lg leading-tight font-extrabold uppercase md:text-2xl">
                      {e.title}
                    </h3>
                    <p className="mt-3 max-w-2xl font-mono text-[10px] leading-[2.1] tracking-[0.1em] text-ink/60 uppercase">
                      {e.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* the three directors */}
      <section className="bg-ink px-5 py-20 text-bone md:px-10 md:py-28">
        <Head dark kicker="Direction" title="Three" italic="chapters" />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              t: "Martin Margiela",
              y: "1988 — 2009",
              img: POOL.house[0],
              d: "The founder. Deconstruction, repurposing, the blank label, the covered face. Twenty-one years in which the House's entire vocabulary was invented.",
            },
            {
              t: "The collective",
              y: "2009 — 2014",
              img: POOL.house[1],
              d: "Five years without a named director. The design team continued anonymously, showing the collections without a signature.",
            },
            {
              t: "John Galliano",
              y: "2014 — present",
              img: POOL.runway[2],
              d: "Creative Director of all lines. Couture returns as Artisanal, the typography is redrawn, and the House re-enters the public conversation.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.t}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-[1100ms] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-[0.3em] text-bone/70 uppercase">
                    {c.y}
                  </span>
                </div>
                <h3 className="font-expanded mt-5 text-xl leading-none font-extrabold uppercase md:text-2xl">
                  {c.t}
                </h3>
                <p className="mt-4 font-mono text-[9px] leading-[2] tracking-[0.12em] text-bone/50 uppercase">
                  {c.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {QUOTES.map((q) => (
            <div key={q.t} className="border border-white/15 p-8">
              <p className="font-serif text-2xl leading-snug italic md:text-3xl">“{q.t}”</p>
              <p className="mt-5 font-mono text-[8px] tracking-[0.3em] text-bone/40 uppercase">
                — {q.by}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* collaborations */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-28">
        <Head kicker="Collaborations" title="With" italic="others" lead="Occasional, unscheduled, and always a re-reading of the archive rather than a decoration of it." />
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2">
          {COLLABS.map((c, i) => (
            <Reveal key={c.t} delay={(i % 2) * 0.06}>
              <div className="flex gap-5 border-b border-ink/15 py-6">
                <span className="font-expanded w-20 text-lg leading-none font-extrabold text-oxblood">
                  {c.y}
                </span>
                <div>
                  <h3 className="font-expanded text-base leading-tight font-extrabold uppercase md:text-lg">
                    {c.t}
                  </h3>
                  <p className="mt-2 max-w-md font-mono text-[9px] leading-[2] tracking-[0.1em] text-ink/55 uppercase">
                    {c.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* exhibitions */}
      <section className="bg-bone-dark px-5 py-20 md:px-10 md:py-28">
        <Head kicker="Museums & film" title="Exhibitions" italic="and the archive" />
        <ul className="mt-14 border-t border-ink/15">
          {EXHIBITIONS.map((e) => (
            <li key={e.t} className="border-b border-ink/15">
              <div className="group flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:gap-8">
                <span className="font-expanded w-20 text-xl leading-none font-extrabold">{e.y}</span>
                <span className="font-expanded flex-1 text-lg leading-none font-extrabold uppercase md:text-2xl">
                  {e.t}
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-ash uppercase">
                  {e.place}
                </span>
              </div>
              <p className="max-w-2xl pb-5 font-mono text-[9px] leading-[2] tracking-[0.1em] text-ink/55 uppercase md:pb-6 md:pl-28">
                {e.d}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-14">
          <Kicker>Visits</Kicker>
          <p className="mt-4 max-w-2xl font-mono text-[10px] leading-[2.1] tracking-[0.12em] text-ink/60 uppercase">
            The archive at 41 Rue Saint-Maur is open to researchers and students by
            appointment. Restoration of pieces made by the House is reviewed case
            by case.
          </p>
        </div>
      </section>
    </>
  );
}
