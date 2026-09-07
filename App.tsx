import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { CartProvider, useRoute, type Route } from "./lib/store";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchOverlay from "./components/SearchOverlay";
import Home from "./pages/Home";
import LinesPage from "./pages/LinesPage";
import ShopPage from "./pages/ShopPage";
import FragrancePage from "./pages/FragrancePage";
import CollectionsPage from "./pages/CollectionsPage";
import HistoryPage from "./pages/HistoryPage";
import HousePage from "./pages/HousePage";

function Progress() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX: w }}
      className="fixed top-0 left-0 z-[9800] h-[2px] w-full origin-left bg-oxblood mix-blend-difference"
    />
  );
}

function SideRail({ route }: { route: string }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.round((window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed right-4 bottom-5 z-[9000] hidden flex-col items-end gap-2 mix-blend-difference md:flex">
      <span className="font-mono text-[8px] tracking-[0.3em] text-white/45 uppercase">
        {route}
      </span>
      <span className="font-mono text-[9px] tracking-[0.3em] text-white tabular-nums">
        {String(pct).padStart(3, "0")}%
      </span>
    </div>
  );
}

function Pages({ route, go }: { route: Route; go: (r: Route) => void }) {
  switch (route) {
    case "lines":
      return <LinesPage go={go} />;
    case "shop":
      return <ShopPage go={go} />;
    case "fragrance":
      return <FragrancePage />;
    case "collections":
      return <CollectionsPage />;
    case "history":
      return <HistoryPage />;
    case "house":
      return <HousePage />;
    default:
      return <Home go={go} />;
  }
}

function Shell() {
  const [ready, setReady] = useState(false);
  const [route, go] = useRoute();
  const [search, setSearch] = useState(false);

  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
  }, [ready]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearch(true);
      }
      if (e.key === "Escape") setSearch(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="grain relative min-h-screen bg-bone">
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <Cursor />
      <Progress />
      <SideRail route={route} />
      <Nav route={route} go={go} onSearch={() => setSearch(true)} />

      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Pages route={route} go={go} />
          <Footer go={go} />
        </motion.div>
      </AnimatePresence>

      <CartDrawer />
      <SearchOverlay open={search} onClose={() => setSearch(false)} go={go} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Shell />
    </CartProvider>
  );
}
