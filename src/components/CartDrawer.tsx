import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../lib/store";
import { fmt } from "../data/products";
import { Stitch } from "./ui";

export default function CartDrawer() {
  const { items, open, setOpen, remove, setQty, total } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9600] bg-ink/60 backdrop-blur-[2px]"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 right-0 z-[9700] flex h-[100svh] w-full max-w-md flex-col bg-bone"
          >
            <div className="flex items-center justify-between border-b border-ink/15 px-6 py-5">
              <span className="font-expanded text-sm font-extrabold tracking-[0.2em] uppercase">
                Selection
              </span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 hover:text-ink"
              >
                Close ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 && (
                <div className="py-24 text-center">
                  <p className="font-serif text-2xl italic">Nothing selected yet.</p>
                  <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-ash uppercase">
                    The bag is quiet
                  </p>
                </div>
              )}

              {items.map((i) => (
                <div key={i.id + (i.size ?? "")} className="border-b border-ink/10 py-5">
                  <div className="flex gap-4">
                    <div className="h-28 w-22 shrink-0 overflow-hidden bg-bone-dark">
                      <img src={i.img} alt={i.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <span className="font-mono text-[9px] tracking-[0.25em] text-ash uppercase">
                        Line {i.line} {i.size && `· Size ${i.size}`}
                      </span>
                      <span className="font-expanded mt-1 text-sm leading-tight font-extrabold tracking-[-0.01em] uppercase">
                        {i.name}
                      </span>
                      <span className="mt-1 font-mono text-[10px] tracking-[0.15em]">
                        {fmt(i.price)}
                      </span>

                      <div className="mt-3 flex items-center gap-4">
                        <div className="flex items-center border border-ink/20">
                          <button
                            onClick={() => setQty(i.id, i.qty - 1)}
                            className="px-2 font-mono text-xs hover:bg-ink hover:text-bone"
                          >
                            −
                          </button>
                          <span className="w-7 text-center font-mono text-[10px]">{i.qty}</span>
                          <button
                            onClick={() => setQty(i.id, i.qty + 1)}
                            className="px-2 font-mono text-xs hover:bg-ink hover:text-bone"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => remove(i.id)}
                          className="font-mono text-[9px] tracking-[0.2em] text-ink/40 uppercase hover:text-oxblood"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/15 px-6 py-5">
              <Stitch />
              <div className="flex items-baseline justify-between py-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-ash uppercase">
                  Subtotal
                </span>
                <span className="font-expanded text-2xl font-extrabold">{fmt(total)}</span>
              </div>
              <button className="group relative w-full overflow-hidden border border-ink py-4">
                <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-bone">
                  Proceed to checkout
                </span>
                <span className="absolute inset-0 -translate-y-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
              </button>
              <p className="mt-3 text-center font-mono text-[8px] tracking-[0.2em] text-ash uppercase">
                Concept tribute build — no real transaction
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
