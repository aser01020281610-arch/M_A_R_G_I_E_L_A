type Props = {
  items: string[];
  speed?: "fast" | "slow";
  dark?: boolean;
  outline?: boolean;
};

export default function Marquee({ items, speed = "fast", dark, outline }: Props) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span
            className={
              "font-expanded px-6 text-[7vw] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap uppercase md:text-[3.4vw] " +
              (outline ? "text-outline" : "")
            }
          >
            {t}
          </span>
          <span className="text-[2vw] opacity-40 md:text-[1vw]">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={
        "relative flex overflow-hidden border-y py-3 select-none " +
        (dark ? "border-white/10 bg-ink text-bone" : "border-ink/10 bg-bone text-ink")
      }
    >
      <div className={"flex " + (speed === "fast" ? "animate-marquee" : "animate-marquee-slow")}>
        {row}
        {row}
      </div>
    </div>
  );
}
