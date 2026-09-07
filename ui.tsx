import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../utils/cn";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Kicker({ n, children }: { n?: string; children: ReactNode }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.35em] text-ash uppercase">
      {n && <span className="mr-3 opacity-60">{n}</span>}
      {children}
    </span>
  );
}

export function Head({
  kicker,
  title,
  italic,
  lead,
  dark,
}: {
  kicker?: string;
  title: string;
  italic?: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn("border-b pb-8", dark ? "border-white/20" : "border-ink/15")}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2
        className={cn(
          "font-expanded mt-4 text-[11vw] leading-[0.84] font-extrabold tracking-[-0.045em] uppercase md:text-[5.4vw]",
          dark ? "text-bone" : "text-ink"
        )}
      >
        {title}
        {italic && (
          <>
            <br />
            <span className="font-serif text-[12vw] leading-[0.8] font-normal italic md:text-[5.8vw]">
              {italic}
            </span>
          </>
        )}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-6 max-w-xl font-mono text-[10px] leading-[2.1] tracking-[0.12em] uppercase",
            dark ? "text-bone/50" : "text-ink/55"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

export function Stitch({ dark }: { dark?: boolean }) {
  return (
    <svg height="2" width="100%" className="my-1 block">
      <line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        stroke={dark ? "rgba(242,240,236,0.3)" : "rgba(10,10,10,0.25)"}
        strokeWidth="1.5"
        className="stitch-line"
      />
    </svg>
  );
}

export function Btn({
  children,
  onClick,
  variant = "outline",
  dark,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "outline" | "fill";
  dark?: boolean;
  className?: string;
}) {
  const skin =
    variant === "fill"
      ? dark
        ? "bg-bone text-ink"
        : "bg-ink text-bone"
      : dark
        ? "border border-bone/40 text-bone hover:text-ink"
        : "border border-ink text-ink hover:text-bone";
  const hoverBg =
    variant === "fill" ? "" : dark ? "bg-bone" : "bg-ink";

  return (
    <button
      onClick={onClick}
      data-cursor="Go"
      className={cn(
        "group relative overflow-hidden px-7 py-4 transition-colors duration-500",
        skin,
        className
      )}
    >
      <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] uppercase">
        {children}
      </span>
      {variant !== "fill" && (
        <span
          className={cn(
            "absolute inset-0 -translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0",
            hoverBg
          )}
        />
      )}
    </button>
  );
}

export function Numbers({ dark }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "flex aspect-square w-full flex-col items-center justify-center rounded-full border text-center",
        dark ? "border-bone/25 text-bone" : "border-ink/20 text-ink"
      )}
    >
      <div className="grid grid-cols-3 gap-x-4 gap-y-1 px-4">
        {["0", "6", "22", "1", "11", "8", "10", "3", "14"].map((n) => (
          <span key={n} className="font-expanded text-[11px] leading-none font-extrabold opacity-70 md:text-sm">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}
