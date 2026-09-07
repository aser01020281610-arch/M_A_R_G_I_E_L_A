import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Head, Btn, Reveal, Kicker } from "../components/ui";
import { REPLICA, OTHER_SCENTS, FAMILIES, QUIZ } from "../data/fragrances";
import { IMG } from "../lib/images";
import { cn } from "../utils/cn";

export default function FragrancePage() {
  const [fam, setFam] = useState("All");
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<string[]>([]);

  const list = useMemo(
    () =>
      REPLICA.filter((s) => {
        if (fam === "All") return true;
        const parts = s.family.split(" ").map((p) => p.toLowerCase());
        return parts.some((p) => p.includes(fam.toLowerCase().slice(0, 5)));
      }),
    [fam]
  );

  const scent = REPLICA[active];

  /* ---------- memory finder ---------- */
  if (step >= 0) {
    const q = QUIZ[step];
    const done = step >= QUIZ.length;
    const result = useMemo(() => {
      const counts: Record<string, number> = {};
      answers.forEach((a) => (counts[a] = (counts[a] ?? 0) + 1));
      const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
      return REPLICA.find((s) => s.name === best) ?? REPLICA[0];
    }, [answers]);

    return (
      <section className="flex min-h-[100svh] flex-col justify-center bg-ink px-5 py-24 text-bone md:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.3em] text-bone/50 uppercase">
              Memory finder
            </span>
            <button
              onClick={() => {
                setStep(-1);
                setAnswers([]);
              }}
              className="font-mono text-[9px] tracking-[0.25em] text-bone/50 uppercase hover:text-bone"
            >
              Exit ✕
            </button>
          </div>

          {done ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="mt-10 font-mono text-[10px] tracking-[0.3em] text-bone/50 uppercase">
                Your memory
              </p>
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="relative aspect-[3/4] overflow-hidden md:col-span-5">
                  <img src={result.img} alt={result.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center md:col-span-7">
                  <h2 className="font-expanded text-[10vw] leading-[0.85] font-extrabold tracking-[-0.04em] uppercase md:text-[4vw]">
                    {result.name}
                  </h2>
                  <p className="font-serif mt-3 text-2xl italic">
                    {result.place}
                  </p>
                  <p className="mt-6 font-mono text-[10px] leading-[2] tracking-[0.12em] text-bone/55 uppercase">
                    {result.family} — launched {result.year}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {result.notes.split(" · ").map((n) => (
                      <span key={n} className="border border-bone/25 px-3 py-2 font-mono text-[9px] tracking-[0.2em] uppercase">
                        {n}
                      </span>
                    ))}
                  </div>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Btn dark variant="fill" onClick={() => { setStep(-1); setAnswers([]); }}>
                      Start again
                    </Btn>
                    <Btn dark onClick={() => { setStep(-1); }}>
                      Browse all scents
                    </Btn>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div>
              <div className="mt-10 flex gap-1.5">
                {QUIZ.map((_, i) => (
                  <span
                    key={i}
                    className={cn("h-[2px] flex-1", i <= step ? "bg-bone" : "bg-bone/20")}
                  />
                ))}
              </div>
              <p className="font-mono mt-4 text-[9px] tracking-[0.3em] text-bone/40 uppercase">
                Question {step + 1} / {QUIZ.length}
              </p>
              <h2 className="font-expanded mt-6 text-[8vw] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase md:text-[3.2vw]">
                {q.q}
              </h2>
              <ul className="mt-10 border-t border-white/15">
                {q.a.map((a, i) => (
                  <li key={a.t} className="border-b border-white/15">
                    <button
                      onClick={() => {
                        setAnswers((p) => [...p, a.m]);
                        setStep((s) => s + 1);
                      }}
                      className="group flex w-full items-baseline justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-expanded text-xl leading-tight font-extrabold uppercase transition-transform duration-500 group-hover:translate-x-3 md:text-3xl">
                        {a.t}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.2em] text-bone/35 uppercase">
                        0{i + 1}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-bone px-5 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20">
        <Head
          kicker="Line 3 — Fragrance"
          title="Replica"
          italic="memory, bottled"
          lead="Each scent reproduces a memory: a place, a year, a temperature. The label states it plainly. Alongside them, the House's first fragrance — left untitled — and Mutiny."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Btn variant="fill" onClick={() => setStep(0)}>
            Take the memory finder
          </Btn>
          <Btn onClick={() => setFam("All")}>Browse all {REPLICA.length} scents</Btn>
        </div>
      </section>

      {/* featured scent */}
      <section className="border-y border-ink/15 bg-bone-dark px-5 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={scent.name}
                  src={scent.img}
                  alt={scent.name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-3 border border-ink/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 bg-bone/95 px-4 py-6 text-center shadow-[0_2px_24px_rgba(0,0,0,0.07)]">
                  <p className="font-mono text-[7px] tracking-[0.3em] text-ash uppercase">Replica</p>
                  <p className="font-serif mt-2 text-2xl leading-tight italic">{scent.name}</p>
                  <p className="mt-1 font-mono text-[8px] tracking-[0.25em] text-ash uppercase">
                    {scent.place}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center md:col-span-7 md:pl-6">
            <Kicker>{scent.family} · {scent.year}</Kicker>
            <h2 className="font-expanded mt-4 text-[11vw] leading-[0.84] font-extrabold tracking-[-0.045em] uppercase md:text-[5vw]">
              {scent.name}
            </h2>
            <p className="font-serif mt-2 text-[5vw] leading-[0.95] italic md:text-[2.2vw]">
              {scent.place}
            </p>
            <div className="mt-8">
              <Kicker>Notes</Kicker>
              <div className="mt-3 flex flex-wrap gap-2">
                {scent.notes.split(" · ").map((n, i) => (
                  <motion.span
                    key={n}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="border border-ink/20 px-3 py-2 font-mono text-[9px] tracking-[0.2em] uppercase"
                  >
                    {n}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="mt-10 grid grid-cols-3 border border-ink/15">
              {[["30ml", "€135"], ["100ml", "€195"], ["Candle", "€145"]].map(([a, b]) => (
                <div key={a} className="border-r border-ink/15 px-3 py-5 text-center last:border-0">
                  <p className="font-expanded text-xl leading-none font-extrabold">{b}</p>
                  <p className="mt-2 font-mono text-[8px] tracking-[0.2em] text-ash uppercase">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* all scents list */}
      <section className="bg-bone px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono mr-3 text-[9px] tracking-[0.25em] text-ash uppercase">Family</span>
          {FAMILIES.map((f) => (
            <button
              key={f}
              onClick={() => setFam(f)}
              className={cn(
                "border px-3 py-1.5 font-mono text-[8px] tracking-[0.2em] uppercase transition-colors",
                fam === f ? "border-ink bg-ink text-bone" : "border-ink/15 text-ink/50 hover:border-ink hover:text-ink"
              )}
            >
              {f}
            </button>
          ))}
          <span className="font-mono ml-auto text-[9px] tracking-[0.2em] text-ash uppercase">
            {list.length} scents
          </span>
        </div>

        <ul className="mt-10 border-t border-ink/15">
          {list.map((s, i) => (
            <li key={s.name} className="border-b border-ink/15">
              <button
                onMouseEnter={() => setActive(REPLICA.indexOf(s))}
                onClick={() => setActive(REPLICA.indexOf(s))}
                data-cursor="Smell"
                className="group flex w-full items-baseline gap-4 py-4 text-left md:gap-8 md:py-5"
              >
                <span className="font-mono text-[9px] text-ash">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-expanded flex-1 text-base leading-none font-extrabold uppercase transition-transform duration-500 group-hover:translate-x-2 md:text-2xl">
                  {s.name}
                </span>
                <span className="hidden font-mono text-[9px] tracking-[0.2em] text-ash uppercase md:block">
                  {s.family}
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-ink/50 uppercase">{s.year}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* untitled + mutiny */}
      <section className="bg-ink px-5 py-20 text-bone md:px-10 md:py-28">
        <Head dark kicker="Also — Line 3" title="Untitled &" italic="mutiny" />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {OTHER_SCENTS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <div className="group border border-white/15">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.5] transition-all duration-[900ms] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute top-3 left-3 border border-bone/40 px-2 py-1 font-mono text-[8px] tracking-[0.2em] uppercase">
                    {s.year}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-expanded text-xl leading-none font-extrabold uppercase">{s.name}</h3>
                  <p className="mt-4 font-mono text-[9px] leading-[2] tracking-[0.12em] text-bone/50 uppercase">
                    {s.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.notes.split(" · ").map((n) => (
                      <span key={n} className="border border-bone/20 px-2 py-1 font-mono text-[8px] tracking-[0.15em] uppercase">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 overflow-hidden">
          <img src={IMG.replica} alt="Replica" className="h-72 w-full object-cover grayscale md:h-[420px]" />
        </div>
      </section>
    </>
  );
}
