import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Head, Btn, Reveal, Kicker, Stitch } from "../components/ui";
import Marquee from "../components/Marquee";
import { LINES } from "../data/lines";
import { byLine } from "../data/products";
import type { Route } from "../lib/store";

export default function LinesPage({ go }: { go: (r: Route) => void }) {
  const [open, setOpen] = useState<string | null>("0");

  return (
    <>
      <section className="bg-ink px-5 pt-32 pb-20 text-bone md:px-10 md:pt-40 md:pb-28">
        <Head
          dark
          kicker="The numbering system"
          title="Every line"
          italic="0 — 22"
          lead="Twelve numbered lines, introduced at the founding of the House and never changed. Whichever line a garment belongs to, that number is circled on the tab. Nothing else is printed."
        />
        <div className="mt-12 flex flex-wrap gap-3">
          <Btn dark onClick={() => go("shop")}>
            Shop the catalogue
          </Btn>
          <Btn dark onClick={() => go("history")}>
            Why the label is blank
          </Btn>
        </div>
      </section>

      <Marquee dark={false} items={["0 Artisanal", "1 Women's", "3 Fragrance", "6 MM6", "10 Men's", "11 Accessories", "22 Shoes"]} />

      {/* accordion of all lines */}
      <section className="bg-bone px-5 py-16 md:px-10 md:py-24">
        <ul>
          {LINES.map((l, i) => {
            const isOpen = open === l.n;
            return (
              <li key={l.n} className="border-b border-ink/15 first:border-t">
                <button
                  onClick={() => setOpen(isOpen ? null : l.n)}
                  data-cursor={isOpen ? "Close" : "Open"}
                  className="group flex w-full items-baseline gap-5 py-5 text-left md:gap-8 md:py-7"
                >
                  <span className="font-mono text-[9px] tracking-[0.2em] text-ash">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      "font-expanded w-16 text-3xl leading-none font-extrabold transition-colors md:w-24 md:text-5xl " +
                      (isOpen ? "text-oxblood" : "text-ink group-hover:text-ink/60")
                    }
                  >
                    {l.n}
                  </span>
                  <span className="font-expanded flex-1 text-lg leading-none font-extrabold tracking-[-0.02em] uppercase transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {l.name}
                  </span>
                  <span className="hidden font-mono text-[9px] tracking-[0.22em] text-ash uppercase lg:block">
                    {l.since}
                  </span>
                  <span
                    className={
                      "font-mono text-lg text-ash transition-transform duration-500 " +
                      (isOpen ? "rotate-45" : "")
                    }
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-12">
                        <div className="md:col-span-4">
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone-dark">
                            <img src={l.img} alt={l.name} className="h-full w-full object-cover" />
                            <span className="absolute bottom-2 left-2 bg-ink px-2 py-1 font-mono text-[8px] tracking-[0.25em] text-bone uppercase">
                              Line {l.n}
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-5">
                          <p className="font-serif text-xl leading-[1.4] italic md:text-2xl">
                            {l.short}
                          </p>
                          <p className="mt-5 font-mono text-[10px] leading-[2.1] tracking-[0.1em] text-ink/60 uppercase">
                            {l.long}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {l.categories.map((c) => (
                              <span
                                key={c}
                                className="border border-ink/20 px-3 py-1.5 font-mono text-[8px] tracking-[0.2em] uppercase"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="md:col-span-3">
                          <Kicker>Shop this line</Kicker>
                          <ul className="mt-4">
                            {byLine(l.n)
                              .slice(0, 5)
                              .map((p) => (
                                <li key={p.id} className="border-b border-ink/10 py-2.5">
                                  <button
                                    onClick={() => go("shop")}
                                    className="group flex w-full items-baseline justify-between gap-3 text-left"
                                  >
                                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase group-hover:text-oxblood">
                                      {p.name}
                                    </span>
                                    <span className="font-mono text-[9px] whitespace-nowrap text-ash">
                                      €{p.price}
                                    </span>
                                  </button>
                                </li>
                              ))}
                            {byLine(l.n).length === 0 && (
                              <li className="py-3 font-mono text-[9px] tracking-[0.15em] text-ash uppercase">
                                Sold in boutiques only
                              </li>
                            )}
                          </ul>
                          <div className="mt-5">
                            <Btn onClick={() => go("shop")}>View all</Btn>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </section>

      {/* the blank label */}
      <section className="bg-ink px-5 py-20 text-bone md:px-10 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Kicker>The label</Kicker>
            <div className="mt-8 flex items-center justify-center border border-bone/20 p-10">
              <div className="w-40 border border-bone/30 bg-bone/5 p-4">
                <div className="flex justify-end gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="block h-[1.5px] w-3 bg-bone/80" />
                  ))}
                </div>
                <div className="flex items-center justify-center py-8">
                  <span className="font-expanded text-lg font-extrabold tracking-[0.1em] text-bone/25">
                    MAISON
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  {LINES.slice(0, 4).map((l) => (
                    <span
                      key={l.n}
                      className="border border-bone/40 px-2 py-0.5 font-mono text-[9px] text-bone/70"
                    >
                      {l.n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 text-center font-mono text-[9px] tracking-[0.25em] text-bone/40 uppercase">
              White label — name intentionally absent
            </p>
          </Reveal>

          <div>
            <Head dark title="Four white" italic="stitches" />
            <p className="mt-8 max-w-xl font-mono text-[10px] leading-[2.2] tracking-[0.12em] text-bone/55 uppercase">
              On the inside of every garment, four white stitches hold the label in
              place. They are the only signature the House allows itself. From the
              outside, the garment appears unsigned.
            </p>
            <p className="mt-6 max-w-xl font-mono text-[10px] leading-[2.2] tracking-[0.12em] text-bone/55 uppercase">
              The intention is stated plainly: the work should stand without an
              author, and the garment should belong to whoever wears it.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Btn dark onClick={() => go("house")}>
                The manifesto
              </Btn>
              <Btn dark onClick={() => go("collections")}>
                The collections
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <Stitch />
    </>
  );
}
