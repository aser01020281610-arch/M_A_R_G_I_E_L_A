import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Head, Btn, Reveal, Kicker, Stitch, Numbers } from "../components/ui";
import { PROCESS, FAQ, STORES, NUMBERS_MEANING, QUOTES } from "../data/house";
import { IMG } from "../lib/images";
import { cn } from "../utils/cn";

export default function HousePage() {
  const [faq, setFaq] = useState<number | null>(0);

  return (
    <>
      {/* manifesto hero */}
      <section className="relative min-h-[92svh] overflow-hidden bg-ink">
        <img
          src={IMG.artisanal}
          alt="Artisanal"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="relative flex min-h-[92svh] flex-col justify-end px-5 pt-32 pb-16 text-bone md:px-10 md:pb-24">
          <Kicker>The House</Kicker>
          <h1 className="font-expanded mt-6 text-[14vw] leading-[0.8] font-extrabold tracking-[-0.05em] uppercase md:text-[8vw]">
            Anonymity
            <br />
            <span className="font-serif text-[15vw] leading-[0.78] font-normal italic md:text-[8.6vw]">
              as a method
            </span>
          </h1>
          <p className="mt-8 max-w-2xl font-mono text-[10px] leading-[2.2] tracking-[0.12em] text-bone/60 uppercase">
            The House does not publish photographs of its designer. Interviews are
            answered in writing, in the third person plural. The label carries no
            name — only the space where one would be, held by four white stitches on
            the inside of the garment.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Btn dark onClick={() => (window.location.hash = "/history")}>
              The history
            </Btn>
            <Btn dark onClick={() => (window.location.hash = "/lines")}>
              The lines
            </Btn>
          </div>
        </div>
      </section>

      {/* numbers */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Head kicker="The signature" title="A circle of" italic="numbers" />
            <div className="mt-10 max-w-[240px]">
              <Numbers />
            </div>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 gap-x-8 md:grid-cols-3">
              {NUMBERS_MEANING.map((n) => (
                <li key={n.n} className="border-b border-ink/15 py-4">
                  <p className="font-expanded text-3xl leading-none font-extrabold">{n.n}</p>
                  <p className="mt-2 font-mono text-[8px] tracking-[0.22em] text-ink/55 uppercase">
                    {n.m}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-2xl font-mono text-[10px] leading-[2.2] tracking-[0.12em] text-ink/60 uppercase">
              Every piece belongs to one line and one number only. The number is
              circled on the tab, so it can be found without reading a name. The
              system has not changed since the House was founded.
            </p>
          </div>
        </div>
      </section>

      {/* process */}
      <section className="bg-ink px-5 py-20 text-bone md:px-10 md:py-28">
        <Head dark kicker="Line 0 — the atelier" title="How a piece" italic="is rebuilt" />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07}>
              <div className="border-t border-white/20 pt-5">
                <span className="font-mono text-[9px] tracking-[0.3em] text-oxblood">{p.n}</span>
                <h3 className="font-expanded mt-3 text-2xl leading-none font-extrabold uppercase">
                  {p.t}
                </h3>
                <p className="mt-4 font-mono text-[9px] leading-[2.1] tracking-[0.1em] text-bone/50 uppercase">
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={IMG.atelier} alt="Atelier" className="h-full w-full object-cover grayscale" />
            <span className="absolute bottom-3 left-3 bg-bone px-2 py-1 font-mono text-[8px] tracking-[0.25em] text-ink uppercase">
              Fig. 01 — 41 Rue Saint-Maur
            </span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={IMG.artisanal} alt="Reconstruction" className="h-full w-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-bone px-2 py-1 font-mono text-[8px] tracking-[0.25em] text-ink uppercase">
              Fig. 02 — reclaimed materials
            </span>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Head kicker="Client services" title="Frequently" italic="asked" />
            <div className="mt-8">
              <Btn variant="fill">Contact the House</Btn>
            </div>
          </div>
          <ul className="lg:col-span-8">
            {FAQ.map((f, i) => {
              const isOpen = faq === i;
              return (
                <li key={f.q} className="border-b border-ink/15 first:border-t">
                  <button
                    onClick={() => setFaq(isOpen ? null : i)}
                    className="group flex w-full items-baseline justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-expanded text-base leading-tight font-extrabold uppercase md:text-xl">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-lg text-ash transition-transform duration-500",
                        isOpen && "rotate-45"
                      )}
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
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 font-mono text-[10px] leading-[2.1] tracking-[0.1em] text-ink/60 uppercase">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* stores */}
      <section className="bg-bone-dark px-5 py-20 md:px-10 md:py-28">
        <Head
          kicker="Boutiques"
          title="Find the"
          italic="house"
          lead="Flagships, boutiques and the couture atelier. Appointment requests are handled by the boutique of your choice."
        />
        <div className="mt-14 grid grid-cols-2 gap-x-8 md:grid-cols-4">
          {STORES.map((s, i) => (
            <Reveal key={s.city + s.address} delay={(i % 4) * 0.05}>
              <div className="border-b border-ink/15 py-5">
                <p className="font-expanded text-base leading-none font-extrabold uppercase">{s.city}</p>
                <p className="mt-2 font-mono text-[9px] tracking-[0.15em] text-ink/55 uppercase">
                  {s.address}
                </p>
                <p className="mt-1 font-mono text-[8px] tracking-[0.25em] text-oxblood uppercase">
                  {s.type}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Stitch />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {QUOTES.slice(0, 2).map((q) => (
            <div key={q.t} className="border border-ink/15 p-8">
              <p className="font-serif text-2xl leading-snug italic">“{q.t}”</p>
              <p className="mt-4 font-mono text-[8px] tracking-[0.3em] text-ash uppercase">— {q.by}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
