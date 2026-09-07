import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Head, Btn, Kicker, Reveal } from "../components/ui";
import { COUTURE, RTW, ARCHIVE_CODES } from "../data/collections";
import { Stitch } from "../components/ui";

export default function CollectionsPage() {
  const [tab, setTab] = useState<"couture" | "rtw">("couture");
  const [open, setOpen] = useState<number | null>(0);
  const list = tab === "couture" ? COUTURE : RTW;

  return (
    <>
      <section className="bg-ink px-5 pt-32 pb-16 text-bone md:px-10 md:pt-40 md:pb-20">
        <Head
          dark
          kicker="Runway archive"
          title="Collections"
          italic="1988 — 2026"
          lead="Artisanal shows each January in Paris. Ready-to-wear twice a year. MM6 alongside. Below: the couture presentations of line 0, and selected ready-to-wear seasons from the archive."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {(["couture", "rtw"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={
                "border px-5 py-3 font-mono text-[9px] tracking-[0.3em] uppercase transition-colors " +
                (tab === t
                  ? "border-bone bg-bone text-ink"
                  : "border-bone/30 text-bone/60 hover:border-bone hover:text-bone")
              }
            >
              {t === "couture" ? "Artisanal — Line 0" : "Ready-to-wear"}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-bone px-5 py-16 md:px-10 md:py-24">
        <ul>
          {list.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.season} className="border-b border-ink/15 first:border-t">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor={isOpen ? "Close" : "Look"}
                  className="group flex w-full items-center gap-4 py-5 text-left md:gap-8 md:py-7"
                >
                  <span className="font-mono text-[9px] tracking-[0.2em] text-ash">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-expanded flex-1 text-xl leading-none font-extrabold tracking-[-0.02em] uppercase transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {s.title ?? s.season}
                  </span>
                  <span className="hidden font-mono text-[9px] tracking-[0.22em] text-ash uppercase md:block">
                    {s.season}
                  </span>
                  <span className="border border-ink/20 px-2 py-1 font-mono text-[8px] tracking-[0.2em] uppercase">
                    L{s.line}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-12">
                        <div className="md:col-span-7">
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-bone-dark">
                            <img src={s.img} alt={s.season} className="h-full w-full object-cover" />
                            <span className="absolute bottom-3 left-3 bg-bone px-2 py-1 font-mono text-[8px] tracking-[0.25em] uppercase">
                              {s.venue}
                            </span>
                          </div>
                        </div>
                        <div className="md:col-span-5">
                          <Kicker>{s.season}</Kicker>
                          <h3 className="font-expanded mt-3 text-2xl leading-none font-extrabold uppercase md:text-3xl">
                            {s.title ?? "Défilé"}
                          </h3>
                          <p className="mt-5 font-mono text-[10px] leading-[2.1] tracking-[0.1em] text-ink/60 uppercase">
                            {s.note}
                          </p>
                          <div className="mt-6">
                            <Stitch />
                            <div className="grid grid-cols-2 gap-4 pt-5">
                              <div>
                                <p className="font-mono text-[8px] tracking-[0.25em] text-ash uppercase">Venue</p>
                                <p className="mt-1 font-mono text-[9px] uppercase">{s.venue}</p>
                              </div>
                              <div>
                                <p className="font-mono text-[8px] tracking-[0.25em] text-ash uppercase">Line</p>
                                <p className="mt-1 font-mono text-[9px] uppercase">{s.line}</p>
                              </div>
                            </div>
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

      {/* archive codes */}
      <section className="bg-bone-dark px-5 py-20 md:px-10 md:py-28">
        <Head kicker="Archive codes" title="Seasons that" italic="changed the house" />
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-0 md:grid-cols-5">
          {ARCHIVE_CODES.map((a, i) => (
            <Reveal key={a.code} delay={(i % 5) * 0.05}>
              <div className="border-b border-ink/15 py-5">
                <p className="font-expanded text-2xl leading-none font-extrabold">{a.code}</p>
                <p className="font-expanded mt-2 text-[11px] leading-tight font-extrabold uppercase">
                  {a.label}
                </p>
                <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-ash uppercase">
                  {a.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <Btn variant="fill">Request archive access</Btn>
        </div>
      </section>
    </>
  );
}
