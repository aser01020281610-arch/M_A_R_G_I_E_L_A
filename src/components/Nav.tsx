import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart, type Route } from "../lib/store";

const NAV: { label: string; meta: string; r: Route }[] = [
  { label: "Home", meta: "The Maison", r: "home" },
  { label: "Lines", meta: "0 — 22 · the system", r: "lines" },
  { label: "Shop", meta: "Full catalogue", r: "shop" },
  { label: "Fragrance", meta: "Line 3 · Replica", r: "fragrance" },
  { label: "Collections", meta: "1988 — 2026", r: "collections" },
  { label: "History", meta: "Paris, since 1988", r: "history" },
  { label: "The House", meta: "Atelier & boutiques", r: "house" },
];

export default function Nav({
  route,
  go,
  onSearch,
}: {
  route: Route;
  go: (r: Route) => void;
  onSearch: () => void;
}) {
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCart } = useCart();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[9000] mix-blend-difference">
        <div className="flex items-center justify-between px-5 py-5 text-white md:px-10">
          <button
            onClick={() => {
              setOpen(true);
            }}
            data-cursor="Menu"
            className="flex items-center gap-3"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[1.5px] w-7 bg-white" />
              <span className="block h-[1.5px] w-7 bg-white" />
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-60">
              Menu
            </span>
          </button>

          <button
            onClick={() => go("home")}
            data-cursor="Home"
            className="font-expanded text-[12px] leading-none font-extrabold tracking-[0.2em] uppercase md:text-[14px]"
          >
            Maison&nbsp;Margiela
            <span className="ml-2 hidden font-mono text-[8px] tracking-[0.3em] opacity-50 sm:inline">
              PARIS
            </span>
          </button>

          <div className="flex items-center gap-5">
            <button
              onClick={onSearch}
              data-cursor="Find"
              className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-60 hover:opacity-100"
            >
              Search
            </button>
            <button
              onClick={() => setCart(true)}
              data-cursor="Bag"
              className="relative font-mono text-[9px] tracking-[0.25em] uppercase opacity-60 hover:opacity-100"
            >
              Bag ({String(count).padStart(2, "0")})
            </button>
          </div>
        </div>
      </header>



      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9500] overflow-y-auto bg-ink text-bone"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-5 md:px-10">
              <span className="font-expanded text-[12px] font-extrabold tracking-[0.2em] uppercase">
                Maison&nbsp;Margiela
              </span>
              <button
                onClick={() => setOpen(false)}
                data-cursor="Close"
                className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-70"
              >
                Close ✕
              </button>
            </div>

            <div className="grid min-h-[calc(100svh-72px)] grid-cols-1 items-center gap-10 px-5 pb-10 md:grid-cols-12 md:px-10">
              <ul className="md:col-span-8">
                {NAV.map((l, i) => (
                  <motion.li
                    key={l.r}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-white/10"
                  >
                    <button
                      onClick={() => {
                        setOpen(false);
                        go(l.r);
                      }}
                      data-cursor="Go"
                      className="group flex w-full items-baseline justify-between gap-4 py-3 text-left md:py-4"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[10px] text-white/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={
                            "font-expanded text-[8.4vw] leading-[0.95] font-extrabold tracking-[-0.03em] uppercase transition-transform duration-500 group-hover:translate-x-4 md:text-[3.6vw] " +
                            (route === l.r ? "text-oxblood" : "")
                          }
                        >
                          {l.label}
                        </span>
                      </span>
                      <span className="hidden font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase md:block">
                        {l.meta}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="hidden md:col-span-4 md:block">
                <div className="aspect-[4/5] w-full overflow-hidden bg-white/5">
                  <img
                    src="/margiela/atelier.jpg"
                    alt="Atelier"
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-[0.15em] text-white/40 uppercase">
                  41 Rue Saint-Maur
                  <br />
                  75011 Paris, France
                </p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {["Line 0", "Line 11", "Line 22"].map((t) => (
                    <span
                      key={t}
                      className="border border-white/20 px-2 py-2 text-center font-mono text-[8px] tracking-[0.2em] text-white/50 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
