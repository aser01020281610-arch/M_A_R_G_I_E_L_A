import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* ---------------- router ---------------- */
export const ROUTES = [
  "home",
  "lines",
  "shop",
  "fragrance",
  "collections",
  "history",
  "house",
] as const;
export type Route = (typeof ROUTES)[number];

export function useRoute(): [Route, (r: Route) => void] {
  const read = (): Route => {
    const h = window.location.hash.replace("#/", "").replace("#", "");
    return (ROUTES as readonly string[]).includes(h) ? (h as Route) : "home";
  };
  const [route, setRoute] = useState<Route>(read);

  useEffect(() => {
    const onHash = () => {
      setRoute(read());
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (r: Route) => {
    if (r === route) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = "/" + r;
  };

  return [route, go];
}

/* ---------------- cart ---------------- */
export type CartItem = {
  id: string;
  name: string;
  line: string;
  price: number;
  img: string;
  size?: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  add: (i: Omit<CartItem, "qty">) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  total: number;
  count: number;
  lastAdded: string | null;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  const add: CartCtx["add"] = (i) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === i.id && p.size === i.size);
      if (found)
        return prev.map((p) =>
          p.id === i.id && p.size === i.size ? { ...p, qty: p.qty + 1 } : p
        );
      return [...prev, { ...i, qty: 1 }];
    });
    setLastAdded(i.id);
    setTimeout(() => setLastAdded(null), 1600);
    setOpen(true);
  };

  const remove = (id: string) => setItems((p) => p.filter((x) => x.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) =>
      p.map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x))
    );

  const total = useMemo(
    () => items.reduce((s, x) => s + x.price * x.qty, 0),
    [items]
  );
  const count = useMemo(() => items.reduce((s, x) => s + x.qty, 0), [items]);

  return (
    <Ctx.Provider
      value={{ items, add, remove, setQty, open, setOpen, total, count, lastAdded }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
