import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Gallery from "../components/Gallery";
import Tabi from "../components/Tabi";
import Artisanal from "../components/Artisanal";
import Manifesto from "../components/Manifesto";
import ProductCard from "../components/ProductCard";
import { Reveal, Head, Btn, Kicker, Stitch } from "../components/ui";
import { LINES, NUMBERS_CIRCLE } from "../data/lines";
import { PRODUCTS } from "../data/products";
import { REPLICA } from "../data/fragrances";
import { COUTURE, RTW } from "../data/collections";
import { NUMBERS_MEANING, STORES, QUOTES } from "../data/house";
import { IMG } from "../lib/images";
import type { Route } from "../lib/store";

export default function Home({ go }: { go: (r: Route) => void }) {
  const [line, setLine] = useState<string>("0");

  const featured = PRODUCTS.filter((p) => p.tag).slice(0, 8);
  const activeLine = LINES.find((l) => l.n === line)!;

  return (
    <>
      <Hero />

      <Marquee
        items={["Artisanal", "Tabi", "Replica", "Glam Slam", "MM6", "5AC", "Mutiny", "Since 1988"]}
      />

      {/* ---------- numbering system ---------- */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-28">
        <Head
          kicker="01 — The system"
          title="Twelve numbers"
          italic="one house"
          lead="The House signs nothing. Instead, every garment carries a circled number on its tab — the line it belongs to. The white label stays blank. Four stitches hold it, on the inside."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* circle */}
          <Reveal className="lg:col-span-3">
            <div className="relative mx-auto w-full max-w-[280px]">
              <div className="aspect-square w-full rounded-full border border-ink/20" />
              <div className="absolute inset-[8%] grid grid-cols-3 place-items-center rounded-full border border-ink/15">
                {NUMBERS_CIRCLE.map((n) => (
                  <button
                    key={n}
                    onClick={() => setLine(n)}
                    data-cursor={n}
                    className={
                      "font-expanded flex h-full w-full items-center justify-center text-lg font-extrabold transition-colors duration-300 md:text-2xl " +
                      (line === n ? "bg-ink text-bone" : "text-ink/70 hover:bg-ink/5")
                    }
                  >
                    {n}
                  </button>
                ))}
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.3em] text-ash uppercase">
                Tap a number
              </span>
            </div>
          </Reveal>

          {/* line detail */}
          <div className="lg:col-span-9">
            <motion.div
              key={activeLine.n}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-12"
            >
              <div className="md:col-span-6">
                <div className="flex items-baseline gap-5">
                  <span className="font-expanded text-6xl leading-none font-extrabold md:text-8xl">
                    {activeLine.n}
                  </span>
                  <div>
                    <h3 className="font-expanded text-xl leading-none font-extrabold uppercase md:text-3xl">
                      {activeLine.name}
                    </h3>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-ash uppercase">
                      Since {activeLine.since}
                    </span>
                  </div>
                </div>
                <p className="font-serif mt-5 text-2xl leading-[1.3] italic md:text-3xl">
                  {activeLine.short}
                </p>
                <p className="mt-5 max-w-lg font-mono text-[10px] leading-[2.1] tracking-[0.1em] text-ink/60 uppercase">
                  {activeLine.long}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeLine.categories.map((c) => (
                    <span
                      key={c}
                      className="border border-ink/20 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] uppercase"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Btn variant="fill" onClick={() => go("lines")}>
                    All the lines
                  </Btn>
                  <Btn onClick={() => go("shop")}>Shop line {activeLine.n}</Btn>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone-dark">
                  <motion.img
                    key={activeLine.img}
                    src={activeLine.img}
                    alt={activeLine.name}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-bone px-2 py-1 font-mono text-[8px] tracking-[0.25em] uppercase">
                    Line {activeLine.n}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- icons ---------- */}
      <section className="border-t border-ink/10 bg-bone px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Head kicker="02 — Icons" title="The house" italic="essentials" />
          <Btn onClick={() => go("shop")}>Full catalogue — {PRODUCTS.length} pieces</Btn>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </section>

      {/* ---------- artisanal ---------- */}
      <Artisanal />

      {/* ---------- lines overview ---------- */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-28">
        <Head kicker="03 — Catalogue" title="Every line" italic="1988 — 2026" />
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
          {LINES.map((l, i) => (
            <Reveal key={l.n} delay={(i % 4) * 0.05}>
              <button
                onClick={() => go("lines")}
                data-cursor={"Line " + l.n}
                className="group block w-full text-left"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone-dark">
                  <img
                    src={l.img}
                    alt={l.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.6] transition-all duration-[900ms] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 flex items-end p-3">
                    <span className="font-expanded bg-ink px-2 py-1 text-2xl leading-none font-extrabold text-bone">
                      {l.n}
                    </span>
                  </div>
                </div>
                <h3 className="font-expanded mt-3 text-[12px] leading-tight font-extrabold uppercase">
                  {l.name}
                </h3>
                <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-ash uppercase">
                  {l.since} · {l.categories[0]}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- tabi ---------- */}
      <Tabi />

      {/* ---------- couture + rtw ---------- */}
      <section className="bg-ink px-5 py-20 text-bone md:px-10 md:py-28">
        <Head
          dark
          kicker="04 — Runway"
          title="Collections"
          italic="couture & ready to wear"
          lead="Artisanal shows in January in Paris. Ready-to-wear twice a year. MM6 alongside. The archive holds every season since 1988."
        />
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {COUTURE.slice(0, 4).map((s, i) => (
            <Reveal key={s.season} delay={i * 0.06}>
              <button onClick={() => go("collections")} data-cursor="Look" className="group block w-full text-left">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.season}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.4] transition-all duration-[1100ms] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className="font-mono text-[9px] tracking-[0.3em] text-bone/60 uppercase">
                      {s.venue}
                    </span>
                    <h3 className="font-expanded mt-2 text-2xl leading-none font-extrabold uppercase md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-bone/60 uppercase">
                      {s.season}
                    </p>
                  </div>
                  <span className="absolute top-4 right-4 border border-bone/40 px-2 py-1 font-mono text-[8px] tracking-[0.2em] uppercase">
                    Line {s.line}
                  </span>
                </div>
                <p className="mt-4 max-w-xl font-mono text-[9px] leading-[1.9] text-bone/50 uppercase">
                  {s.note}
                </p>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Kicker>Ready-to-wear — selected seasons</Kicker>
          <ul className="mt-6 border-t border-white/15">
            {RTW.slice(0, 6).map((s) => (
              <li key={s.season + s.line} className="border-b border-white/15">
                <button
                  onClick={() => go("collections")}
                  className="group flex w-full items-baseline gap-5 py-4 text-left"
                >
                  <span className="font-mono text-[9px] tracking-[0.2em] text-bone/40 uppercase">
                    L{s.line}
                  </span>
                  <span className="font-expanded flex-1 text-lg leading-none font-extrabold uppercase transition-transform duration-500 group-hover:translate-x-3 md:text-2xl">
                    {s.season}
                  </span>
                  <span className="hidden font-mono text-[9px] tracking-[0.2em] text-bone/50 uppercase md:block">
                    {s.venue}
                  </span>
                  <span className="font-mono text-ash group-hover:text-bone">→</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Btn dark onClick={() => go("collections")}>
            Every collection
          </Btn>
        </div>
      </section>

      {/* ---------- gallery horizontal ---------- */}
      <Gallery />

      {/* ---------- tabi note + manifesto ---------- */}
      <Manifesto />

      {/* ---------- fragrance teaser ---------- */}
      <section className="bg-bone px-5 py-20 md:px-10 md:py-28">
        <Head
          kicker="05 — Line 3"
          title="Replica"
          italic="memory, bottled"
          lead="Twenty-two scents, each reproducing a place and a year. Plus the House's first fragrance, and Mutiny."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {REPLICA.slice(0, 8).map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 0.05}>
              <button
                onClick={() => go("fragrance")}
                data-cursor="Smell"
                className="group block w-full text-left"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone-dark">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.35] transition-all duration-[900ms] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-2 border border-white/40" />
                  <div className="absolute inset-x-3 bottom-3 bg-bone/95 px-3 py-3 text-center">
                    <p className="font-mono text-[7px] tracking-[0.3em] text-ash uppercase">Replica</p>
                    <p className="font-serif mt-1 text-lg leading-tight italic">{s.name}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Btn variant="fill" onClick={() => go("fragrance")}>
            Find your memory
          </Btn>
        </div>
      </section>

      {/* ---------- numbers meaning + stores ---------- */}
      <section className="border-t border-ink/10 bg-bone-dark px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Head kicker="06 — Reference" title="What the" italic="numbers mean" />
            <ul className="mt-8">
              {NUMBERS_MEANING.map((n) => (
                <li
                  key={n.n}
                  className="flex items-baseline justify-between border-b border-ink/15 py-3"
                >
                  <span className="font-expanded text-2xl leading-none font-extrabold">{n.n}</span>
                  <span className="font-mono text-[9px] tracking-[0.22em] text-ink/60 uppercase">
                    {n.m}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Kicker>07 — Boutiques</Kicker>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-0 md:grid-cols-3">
              {STORES.map((s) => (
                <div key={s.city + s.address} className="border-b border-ink/15 py-4">
                  <p className="font-expanded text-sm font-extrabold uppercase">{s.city}</p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.15em] text-ash uppercase">
                    {s.address}
                  </p>
                  <p className="mt-1 font-mono text-[8px] tracking-[0.25em] text-ink/40 uppercase">
                    {s.type}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {QUOTES.slice(2).map((q) => (
                <div key={q.t} className="border border-ink/15 p-6">
                  <p className="font-serif text-xl leading-snug italic">“{q.t}”</p>
                  <p className="mt-3 font-mono text-[8px] tracking-[0.3em] text-ash uppercase">
                    — {q.by}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden">
              <img
                src={IMG.atelier}
                alt="Atelier"
                className="h-64 w-full object-cover grayscale md:h-80"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Btn onClick={() => go("house")}>The House</Btn>
              <Btn onClick={() => go("history")}>History 1988—2026</Btn>
            </div>
          </div>
        </div>
      </section>

      <Stitch />
    </>
  );
}
