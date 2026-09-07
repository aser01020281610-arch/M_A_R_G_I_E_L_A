import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SIZES = ["36", "37", "38", "39", "40", "41", "42"];

export default function Tabi() {
  const wrap = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 160, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 160, damping: 18 });
  const [size, setSize] = useState("39");
  const [added, setAdded] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="tabi" className="relative overflow-hidden bg-bone-dark py-20 md:py-28">
      <div className="grid grid-cols-1 gap-10 px-5 md:grid-cols-12 md:gap-6 md:px-10">
        {/* image */}
        <div className="md:col-span-7">
          <div
            ref={wrap}
            onMouseMove={onMove}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
            style={{ perspective: 1200 }}
            data-cursor="Rotate"
            className="relative aspect-[4/5] w-full overflow-hidden bg-bone"
          >
            <motion.img
              src="/margiela/tabi.jpg"
              alt="Tabi boot in calf leather"
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-ink/10" />
            <span className="absolute top-4 left-4 bg-ink px-2 py-1 font-mono text-[9px] tracking-[0.25em] text-bone uppercase">
              Line 22
            </span>
            <span className="absolute right-4 bottom-4 font-mono text-[9px] tracking-[0.25em] text-ink/50 uppercase">
              Move cursor
            </span>
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col justify-center md:col-span-5 md:pl-6">
          <span className="font-mono text-[10px] tracking-[0.35em] text-ash uppercase">
            02 — Icon
          </span>
          <h2 className="font-expanded mt-4 text-[13vw] leading-[0.82] font-extrabold tracking-[-0.05em] uppercase md:text-[5.4vw]">
            Tabi
          </h2>
          <p className="font-serif mt-1 text-[6vw] leading-[0.9] italic md:text-[2.6vw]">
            the boot that split the room
          </p>

          <p className="mt-7 max-w-md font-mono text-[10px] leading-[2.1] tracking-[0.12em] text-ink/70 uppercase">
            Drawn from 15th-century Japanese tabi socks and first shown in Paris in
            1989, the split toe remains the clearest statement of the House: a
            familiar object, quietly made unfamiliar.
          </p>

          <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {[
              ["Material", "Polished calf leather"],
              ["Heel", "60 mm, stacked"],
              ["Origin", "Made in Italy"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-3">
                <dt className="font-mono text-[9px] tracking-[0.25em] text-ash uppercase">{k}</dt>
                <dd className="font-mono text-[9px] tracking-[0.25em] uppercase">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <span className="font-mono text-[9px] tracking-[0.25em] text-ash uppercase">Size</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={
                    "h-10 w-12 border font-mono text-[10px] tracking-[0.1em] transition-colors duration-300 " +
                    (size === s
                      ? "border-ink bg-ink text-bone"
                      : "border-ink/20 text-ink/60 hover:border-ink hover:text-ink")
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <button
              onClick={() => {
                setAdded(true);
                setTimeout(() => setAdded(false), 1800);
              }}
              data-cursor={added ? "Added" : "Add"}
              className="group relative flex-1 overflow-hidden border border-ink py-4"
            >
              <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-bone">
                {added ? "Added to bag ✓" : "Add to bag — €1,190"}
              </span>
              <span
                className={
                  "absolute inset-0 bg-oxblood transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] " +
                  (added ? "translate-y-0" : "-translate-y-full group-hover:translate-y-0")
                }
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
