import { IMG } from "../lib/images";
export type Line = {
  n: string;
  name: string;
  desc: string;
  year: string;
  img?: string;
};

export const LINES: Line[] = [
  {
    n: "0",
    name: "Artisanal",
    desc: "Repurposed, deconstructed and rebuilt by hand in the Paris atelier. The laboratory of the House.",
    year: "1988",
    img: IMG.artisanal,
  },
  {
    n: "1",
    name: "Women's Collection",
    desc: "The principal womenswear line. Volume, anonymity and the silhouette reconsidered.",
    year: "1988",
  },
  {
    n: "3",
    name: "Fragrance",
    desc: "Olfactory memory. Scents that recall a moment, a place, a temperature.",
    year: "1994",
    img: IMG.replica,
  },
  {
    n: "4",
    name: "Women's Wardrobe",
    desc: "Essentials for living in. The four white stitches — always on the inside, never on the outside.",
    year: "1998",
  },
  {
    n: "6",
    name: "MM6",
    desc: "A parallel voice. Practical, graphic, quietly subversive.",
    year: "1997",
  },
  {
    n: "8",
    name: "Eyewear",
    desc: "Frames drawn from the archive and re-cut for the present.",
    year: "2008",
  },
  {
    n: "10",
    name: "Men's Collection",
    desc: "The principal menswear line. Tailoring loosened at the seams.",
    year: "1998",
  },
  {
    n: "11",
    name: "Accessories",
    desc: "Objects of leather, hardware and intention. The bag as architecture.",
    year: "1999",
    img: IMG.bag,
  },
  {
    n: "12",
    name: "Objects",
    desc: "Things that are not clothes. The House extends beyond the garment.",
    year: "2008",
  },
  {
    n: "13",
    name: "Publications",
    desc: "Books, ephemera and printed matter from the studio.",
    year: "2008",
  },
  {
    n: "14",
    name: "Men's Wardrobe",
    desc: "The everyday line for men. Built to be worn out, not worn up.",
    year: "1999",
  },
  {
    n: "22",
    name: "Shoes",
    desc: "The Tabi, the Replica sneaker, the future footprint.",
    year: "1989",
    img: IMG.tabi,
  },
];

export const GALLERY = [
  { img: IMG.hero, label: "Artisanal — Look 04", meta: "Paris, FW" },
  { img: IMG.tabi, label: "Tabi — Calf leather", meta: "Line 22" },
  { img: IMG.artisanal, label: "Reconstructed tulle", meta: "Line 0" },
  { img: IMG.bag, label: "Glam Slam — Quilted", meta: "Line 11" },
  { img: IMG.replica, label: "Replica — Eau de toilette", meta: "Line 3" },
  { img: IMG.atelier, label: "The Atelier — Rue Saint-Maur", meta: "Paris 11e" },
];

export const REPLICA_MEMORIES = [
  { place: "Jazz Club", when: "Paris, 1994", note: "Tobacco leaf · Rum · Vanilla" },
  { place: "Beach Walk", when: "Biarritz, 2003", note: "Bergamot · Coconut · Musk" },
  { place: "By the Fireplace", when: "Chamonix, 2010", note: "Burning woods · Chestnut" },
  { place: "Autumn Vibes", when: "Kyoto, 2016", note: "Cardamom · Maple · Moss" },
];
