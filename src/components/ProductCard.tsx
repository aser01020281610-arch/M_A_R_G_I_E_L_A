import { useState } from "react";
import { motion } from "framer-motion";
import { fmt, type Product } from "../data/products";
import { useCart } from "../lib/store";
import { cn } from "../utils/cn";

export default function ProductCard({
  p,
  i = 0,
  onOpen,
}: {
  p: Product;
  i?: number;
  onOpen?: (p: Product) => void;
}) {
  const { add, lastAdded } = useCart();
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative"
    >
      <div
        onClick={() => onOpen?.(p)}
        data-cursor="View"
        className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden bg-bone-dark"
      >
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-all duration-[900ms] ease-out",
            hover ? "scale-[1.06] grayscale-0" : "grayscale-[0.5]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 border border-ink/10" />

        {p.tag && (
          <span className="absolute top-3 left-3 bg-ink px-2 py-1 font-mono text-[8px] tracking-[0.2em] text-bone uppercase">
            {p.tag}
          </span>
        )}
        <span className="absolute top-3 right-3 font-mono text-[8px] tracking-[0.2em] text-ink/40 uppercase">
          L{p.line}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            add({ id: p.id, name: p.name, line: p.line, price: p.price, img: p.img });
          }}
          className={cn(
            "absolute inset-x-0 bottom-0 translate-y-full bg-ink py-3.5 font-mono text-[9px] tracking-[0.3em] text-bone uppercase transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            hover && "translate-y-0"
          )}
        >
          {lastAdded === p.id ? "Added ✓" : "Add to selection"}
        </button>
      </div>

      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <h3 className="font-expanded text-[13px] leading-tight font-extrabold tracking-[-0.01em] uppercase md:text-sm">
            {p.name}
          </h3>
          <p className="mt-1.5 font-mono text-[9px] tracking-[0.18em] text-ash uppercase">
            {p.color}
          </p>
          <p className="mt-2 max-w-[26ch] font-mono text-[9px] leading-[1.8] text-ink/45">
            {p.note}
          </p>
        </div>
        <span className="font-mono text-[11px] tracking-[0.1em] whitespace-nowrap">
          {fmt(p.price)}
        </span>
      </div>
    </motion.article>
  );
}
