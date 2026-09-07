import { useState } from "react";
import Marquee from "./Marquee";
import type { Route } from "../lib/store";
import { LINES } from "../data/lines";

const COLS: { t: string; l: { n: string; r?: Route }[] }[] = [
  {
    t: "The Maison",
    l: [
      { n: "The House", r: "house" },
      { n: "History 1988—2026", r: "history" },
      { n: "Collections", r: "collections" },
      { n: "The Lines", r: "lines" },
      { n: "Exhibitions" },
    ],
  },
  {
    t: "Shop",
    l: [
      { n: "Full catalogue", r: "shop" },
      { n: "Tabi — Line 22", r: "shop" },
      { n: "Bags — Line 11", r: "shop" },
      { n: "Fragrance — Line 3", r: "fragrance" },
      { n: "Objects — Line 12", r: "shop" },
    ],
  },
  {
    t: "Client Services",
    l: [
      { n: "Contact" },
      { n: "Shipping & Returns" },
      { n: "Care Guide" },
      { n: "Repairs & Restoration" },
      { n: "Book an Appointment" },
    ],
  },
  {
    t: "Boutiques",
    l: [
      { n: "Paris" },
      { n: "London" },
      { n: "Milan" },
      { n: "Tokyo" },
      { n: "New York" },
    ],
  },
];

export default function Footer({ go }: { go: (r: Route) => void }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-ink text-bone">
      <Marquee
        dark
        speed="slow"
        items={["Maison Margiela", "Paris", "Est. 1988", "Anonymity", "Deconstruction"]}
        outline
      />

      <div className="px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <h3 className="font-expanded text-[10vw] leading-[0.85] font-extrabold tracking-[-0.04em] uppercase md:text-[3.4vw]">
              Join the
              <br />
              <span className="font-serif font-normal italic">inner circle</span>
            </h3>
            <p className="mt-6 max-w-sm font-mono text-[10px] leading-[2.1] tracking-[0.14em] text-bone/50 uppercase">
              Private previews, atelier notes and collection invitations.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setSent(true);
                setEmail("");
                setTimeout(() => setSent(false), 2600);
              }}
              className="mt-8 flex max-w-md items-center border-b border-white/25 focus-within:border-bone"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 bg-transparent py-3 font-mono text-[10px] tracking-[0.25em] uppercase outline-none placeholder:text-bone/30"
              />
              <button
                type="submit"
                data-cursor="Send"
                className="font-mono text-[10px] tracking-[0.25em] uppercase"
              >
                {sent ? "Merci ✓" : "Submit →"}
              </button>
            </form>

            <div className="mt-10 flex flex-wrap gap-2">
              {["IG", "TT", "YT", "PIN", "SPOT"].map((x) => (
                <a
                  key={x}
                  href="#"
                  data-cursor="Open"
                  className="border border-white/20 px-3 py-2 font-mono text-[9px] tracking-[0.2em] text-bone/60 uppercase hover:bg-bone hover:text-ink"
                >
                  {x}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.t} className="md:col-span-2">
              <h4 className="font-mono text-[9px] tracking-[0.3em] text-bone/40 uppercase">{c.t}</h4>
              <ul className="mt-5 flex flex-col gap-3">
                {c.l.map((x) => (
                  <li key={x.n}>
                    <button
                      onClick={() => x.r && go(x.r)}
                      className="font-mono text-left text-[10px] tracking-[0.18em] text-bone/70 uppercase transition-colors hover:text-bone"
                    >
                      {x.n}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-2">
            <h4 className="font-mono text-[9px] tracking-[0.3em] text-bone/40 uppercase">
              The numbering
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
              {LINES.map((l) => (
                <li key={l.n}>
                  <button
                    onClick={() => go("lines")}
                    className="font-mono text-[9px] tracking-[0.15em] text-bone/55 uppercase hover:text-bone"
                  >
                    {l.n} · {l.name.split(" ")[0]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-hidden px-2">
        <div className="font-expanded flex items-end justify-between text-[13.4vw] leading-[0.75] font-extrabold tracking-[-0.05em] uppercase">
          <span>Margiela</span>
          <span className="text-oxblood">⁂</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10">
        <span className="font-mono text-[9px] tracking-[0.25em] text-bone/35 uppercase">
          © 2026 Maison Margiela — Concept tribute build · Not affiliated with OTB
        </span>
        <div className="flex gap-6">
          {["Legal", "Privacy", "Cookies", "Accessibility"].map((x) => (
            <a
              key={x}
              href="#"
              className="font-mono text-[9px] tracking-[0.25em] text-bone/35 uppercase hover:text-bone/70"
            >
              {x}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
