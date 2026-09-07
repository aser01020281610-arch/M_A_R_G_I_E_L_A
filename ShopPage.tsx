import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Head, Btn, Kicker } from "../components/ui";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATS, LINE_FILTERS, fmt, type Product } from "../data/products";
import type { Route } from "../lib/store";
import { useCart } from "../lib/store";
import { cn } from "../utils/cn";

export default function ShopPage({ go }: { go: (r: Route) => void }) {
  const [cat, setCat] = useState("All");
  const [line, setLine] = useState("All");
  const [sort, setSort] = useState<"default" | "low" | "high">("default");
  const [detail, setDetail] = useState<Product | null>(null);

  const list = useMemo(() => {
    let l = PRODUCTS.filter(
      (p) => (cat === "All" || p.cat === cat) && (line === "All" || p.line === line)
    );
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [cat, line, sort]);

  return (
    <>
      <section className="bg-bone px-5 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20">
        <Head
          kicker="The catalogue"
          title="Everything"
          italic="the house makes"
          lead={`${PRODUCTS.length} pieces across twelve numbered lines. Footwear, leather goods, ready-to-wear, eyewear, objects and printed matter.`}
        />
      </section>

      {/* filters */}
      <section className="sticky top-[52px] z-[500] border-y border-ink/15 bg-bone/95 px-5 py-3 backdrop-blur md:top-[58px] md:px-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-mono text-[9px] tracking-[0.25em] text-ash uppercase">Line</span>
          {LINE_FILTERS.map((l) => (
            <button
              key={l}
              onClick={() => setLine(l)}
              className={cn(
                "font-mono text-[9px] tracking-[0.2em] uppercase transition-colors",
                line === l ? "text-ink underline decoration-2 underline-offset-4" : "text-ink/40 hover:text-ink"
              )}
            >
              {l}
            </button>
          ))}
          <span className="ml-auto flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.25em] text-ash uppercase">
              {list.length} results
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="border border-ink/20 bg-transparent px-2 py-1 font-mono text-[9px] tracking-[0.15em] uppercase outline-none"
            >
              <option value="default">Sort: Default</option>
              <option value="low">Price ↑</option>
              <option value="high">Price ↓</option>
            </select>
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 border-t border-ink/10 pt-3">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "border px-3 py-1.5 font-mono text-[8px] tracking-[0.2em] uppercase transition-colors",
                cat === c ? "border-ink bg-ink text-bone" : "border-ink/15 text-ink/50 hover:border-ink hover:text-ink"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* grid */}
      <section className="bg-bone px-5 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 md:gap-y-16 lg:grid-cols-4">
          {list.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} onOpen={setDetail} />
          ))}
        </div>
        {list.length === 0 && (
          <p className="py-24 text-center font-mono text-[10px] tracking-[0.2em] text-ash uppercase">
            Nothing in this combination
          </p>
        )}
      </section>

      {/* product detail drawer */}
      <AnimatePresence>
        {detail && <Detail p={detail} onClose={() => setDetail(null)} go={go} />}
      </AnimatePresence>
    </>
  );
}

function Detail({
  p,
  onClose,
  go,
}: {
  p: Product;
  onClose: () => void;
  go: (r: Route) => void;
}) {
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(
    p.cat === "Tabi" ? "39" : null
  );
  const related = PRODUCTS.filter((x) => x.line === p.line && x.id !== p.id).slice(0, 4);

  return (
    <motion.div className="fixed inset-0 z-[9600]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]" onClick={onClose} />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-x-0 bottom-0 flex max-h-[92svh] flex-col overflow-y-auto bg-bone md:inset-0 md:max-h-none"
      >
        <div className="flex items-center justify-between border-b border-ink/15 px-5 py-4 md:px-10">
          <span className="font-mono text-[9px] tracking-[0.3em] text-ash uppercase">
            Line {p.line} · {p.cat}
          </span>
          <button onClick={onClose} className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 hover:text-ink">
            Close ✕
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 px-5 py-8 md:grid-cols-12 md:px-10 md:py-12">
          <div className="md:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone-dark">
              <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 border border-ink/10" />
            </div>
          </div>

          <div className="md:col-span-5">
            <Kicker>Line {p.line}</Kicker>
            <h2 className="font-expanded mt-4 text-3xl leading-[0.9] font-extrabold tracking-[-0.03em] uppercase md:text-5xl">
              {p.name}
            </h2>
            <p className="font-serif mt-3 text-2xl italic">{p.color}</p>
            <p className="mt-6 font-mono text-[10px] leading-[2.1] tracking-[0.1em] text-ink/60 uppercase">
              {p.note}
            </p>

            <div className="mt-8 flex items-baseline justify-between border-y border-ink/15 py-4">
              <span className="font-mono text-[9px] tracking-[0.25em] text-ash uppercase">Price</span>
              <span className="font-expanded text-2xl font-extrabold">{fmt(p.price)}</span>
            </div>

            {(p.cat === "Tabi" || p.cat === "Sneakers" || p.cat === "Shirting" || p.cat === "Jersey") && (
              <div className="mt-6">
                <Kicker>Size</Kicker>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(p.cat === "Tabi" || p.cat === "Sneakers"
                    ? ["36", "37", "38", "39", "40", "41", "42"]
                    : ["XS", "S", "M", "L", "XL"]
                  ).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={cn(
                        "h-10 w-12 border font-mono text-[10px] transition-colors",
                        size === s ? "border-ink bg-ink text-bone" : "border-ink/20 text-ink/60 hover:border-ink"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => add({ id: p.id, name: p.name, line: p.line, price: p.price, img: p.img, size: size ?? undefined })}
              className="group relative mt-8 w-full overflow-hidden border border-ink py-4"
            >
              <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-bone">
                Add to selection — {fmt(p.price)}
              </span>
              <span className="absolute inset-0 -translate-y-full bg-oxblood transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
            </button>

            <ul className="mt-8 space-y-2">
              {[
                ["Line", p.line],
                ["Category", p.cat],
                ["Colour", p.color],
                ["Made in", "Italy / France"],
                ["Label", "White, unsigned"],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between border-b border-ink/10 py-2.5">
                  <span className="font-mono text-[8px] tracking-[0.25em] text-ash uppercase">{k}</span>
                  <span className="font-mono text-[9px] tracking-[0.15em] uppercase">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <div className="border-t border-ink/15 px-5 py-10 md:px-10 md:py-14">
            <Kicker>More from line {p.line}</Kicker>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
              {related.map((r, i) => (
                <ProductCard key={r.id} p={r} i={i} />
              ))}
            </div>
            <div className="mt-10">
              <Btn onClick={() => { onClose(); go("shop"); }}>Back to catalogue</Btn>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
