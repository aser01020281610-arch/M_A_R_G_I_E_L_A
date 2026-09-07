import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PRODUCTS, fmt } from "../data/products";
import { REPLICA, OTHER_SCENTS } from "../data/fragrances";
import { LINES } from "../data/lines";
import { ERAS } from "../data/timeline";
import { IMG } from "../lib/images";
import { type Route } from "../lib/store";

type Hit = { title: string; sub: string; img: string; route: Route; price?: string };

export default function SearchOverlay({
  open,
  onClose,
  go,
}: {
  open: boolean;
  onClose: () => void;
  go: (r: Route) => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
    else setQ("");
  }, [open]);

  const index = useMemo<Hit[]>(() => {
    const h: Hit[] = [];
    PRODUCTS.forEach((p) =>
      h.push({
        title: p.name,
        sub: `Line ${p.line} · ${p.cat} · ${p.color}`,
        img: p.img,
        route: "shop",
        price: fmt(p.price),
      })
    );
    REPLICA.forEach((s) =>
      h.push({ title: s.name, sub: `Replica · ${s.family} · ${s.year}`, img: s.img, route: "fragrance" })
    );
    OTHER_SCENTS.forEach((s) =>
      h.push({ title: s.name, sub: `Fragrance · ${s.year}`, img: s.img, route: "fragrance" })
    );
    LINES.forEach((l) =>
      h.push({ title: l.name, sub: `Line ${l.n} · since ${l.since}`, img: l.img, route: "lines" })
    );
    ERAS.forEach((e) =>
      h.push({ title: e.year + " — " + e.title, sub: e.designer ?? "House history", img: IMG.atelier, route: "history" })
    );
    return h;
  }, []);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return index.slice(0, 8);
    return index
      .filter((x) => (x.title + x.sub).toLowerCase().includes(t))
      .slice(0, 24);
  }, [q, index]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9650] overflow-y-auto bg-ink text-bone"
        >
          <div className="flex items-center justify-between px-5 py-5 md:px-10">
            <span className="font-mono text-[10px] tracking-[0.3em] text-bone/50 uppercase">
              Search the House
            </span>
            <button
              onClick={onClose}
              className="font-mono text-[10px] tracking-[0.25em] text-bone/60 uppercase hover:text-bone"
            >
              Close ✕
            </button>
          </div>

          <div className="px-5 md:px-10">
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="TABI, GLAM SLAM, JAZZ CLUB, 1989…"
              className="font-expanded w-full border-b border-bone/25 bg-transparent pb-5 text-[8vw] leading-none font-extrabold tracking-[-0.04em] uppercase outline-none placeholder:text-bone/15 focus:border-bone/60 md:text-[4.4vw]"
            />
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-1 px-5 py-10 md:grid-cols-2 md:px-10">
            {results.map((r, i) => (
              <motion.button
                key={r.title + i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.4) }}
                onClick={() => {
                  onClose();
                  go(r.route);
                }}
                className="group flex items-center gap-4 border-b border-white/10 py-3 text-left"
              >
                <span className="h-16 w-14 shrink-0 overflow-hidden bg-white/5">
                  <img
                    src={r.img}
                    alt=""
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </span>
                <span className="flex-1">
                  <span className="font-expanded block text-base leading-tight font-extrabold uppercase md:text-lg">
                    {r.title}
                  </span>
                  <span className="mt-1 block font-mono text-[9px] tracking-[0.2em] text-bone/45 uppercase">
                    {r.sub}
                  </span>
                </span>
                {r.price && (
                  <span className="font-mono text-[10px] tracking-[0.15em] text-bone/70">
                    {r.price}
                  </span>
                )}
              </motion.button>
            ))}
            {results.length === 0 && (
              <p className="font-mono text-[10px] tracking-[0.2em] text-bone/40 uppercase">
                No result. The archive is large but not infinite.
              </p>
            )}
          </div>

          <div className="px-5 pb-16 md:px-10">
            <span className="font-mono text-[9px] tracking-[0.3em] text-bone/35 uppercase">
              Quick suggestions
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Tabi", "Glam Slam", "5AC", "Jazz Club", "Artisanal", "1989", "MM6", "Mirror"].map(
                (s) => (
                  <button
                    key={s}
                    onClick={() => setQ(s)}
                    className="border border-bone/20 px-3 py-2 font-mono text-[9px] tracking-[0.2em] uppercase hover:bg-bone hover:text-ink"
                  >
                    {s}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => {
                onClose();
                go("shop");
              }}
              className="mt-10 font-mono text-[10px] tracking-[0.25em] text-bone/60 uppercase underline decoration-1 underline-offset-8 hover:text-bone"
            >
              Browse the full catalogue →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
