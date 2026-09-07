import { IMG } from "../lib/images";

export type Line = {
  n: string;
  name: string;
  since: string;
  short: string;
  long: string;
  categories: string[];
  img: string;
  accent?: boolean;
};

export const LINES: Line[] = [
  {
    n: "0",
    name: "Artisanal",
    since: "1988",
    short: "The laboratory of the House.",
    long: "The haute couture atelier. Garments made from things that already existed — antique leather, vintage silk, discarded haberdashery — taken apart, studied and rebuilt by hand in Paris. Each piece is unique and numbered by hand.",
    categories: ["Haute Couture", "One-of-a-kind", "Made in Paris"],
    img: IMG.artisanal,
    accent: true,
  },
  {
    n: "1",
    name: "Women's Collection",
    since: "1988",
    short: "The principal womenswear line.",
    long: "The most complete expression of the House's wardrobe for women. Volume and flatness, the seam turned outward, the shoulder re-cut, the familiar garment made quietly unfamiliar.",
    categories: ["Ready-to-wear", "Couture techniques", "Paris shows"],
    img: IMG.runway1,
  },
  {
    n: "3",
    name: "Fragrance",
    since: "1994",
    short: "Olfactory memory.",
    long: "Replica — scents that reproduce a memory of a place, a moment, a temperature. Alongside Untitled, the first fragrance of the House, and Mutiny, its most recent declaration.",
    categories: ["Replica", "Mutiny", "Untitled", "Candles"],
    img: IMG.replica,
  },
  {
    n: "4",
    name: "Women's Wardrobe",
    since: "1998",
    short: "Essentials for living in.",
    long: "The everyday wardrobe for women, introduced with the concept of the flat garment — clothing delivered flat and folded, intended to be worn without ceremony. Four white stitches, on the inside, hold the identity.",
    categories: ["Jersey", "Tailoring", "Denim", "Shirting"],
    img: IMG.runway3,
  },
  {
    n: "6",
    name: "MM6",
    since: "1997",
    short: "A parallel voice.",
    long: "Founded as a practical, graphic, quietly subversive counterpart to the main line. MM6 speaks in slogans, archive numbers and utility — a wardrobe built for movement rather than display.",
    categories: ["Ready-to-wear", "Bags", "Sneakers", "Collaborations"],
    img: IMG.runway5,
  },
  {
    n: "8",
    name: "Eyewear",
    since: "2008",
    short: "Frames drawn from the archive.",
    long: "Optical and sunglasses, re-cut from the House's visual vocabulary: the anonymous silhouette, the utilitarian hinge, the four stitches rendered in metal.",
    categories: ["Optical", "Sunglasses", "Titanium"],
    img: IMG.acc6,
  },
  {
    n: "10",
    name: "Men's Collection",
    since: "1998",
    short: "The principal menswear line.",
    long: "Tailoring loosened at the seams. The menswear line takes the language of the men's wardrobe — the coat, the blazer, the trouser — and rebuilds its proportions.",
    categories: ["Tailoring", "Outerwear", "Leather"],
    img: IMG.runway2,
  },
  {
    n: "11",
    name: "Accessories",
    since: "1999",
    short: "Objects of leather and intention.",
    long: "The bag as architecture: Glam Slam, 5AC, Snatched, Filtered. Alongside small leather goods stamped only with the numbers of the House.",
    categories: ["Bags", "Small leather goods", "Jewellery"],
    img: IMG.bag,
  },
  {
    n: "12",
    name: "Objects",
    since: "2008",
    short: "Things that are not clothes.",
    long: "Mirrors, incense, playing cards, umbrellas, key rings. The House extends beyond the garment into the domestic and the absurd.",
    categories: ["Home", "Miscellaneous", "Gifts"],
    img: IMG.acc3,
  },
  {
    n: "13",
    name: "Publications",
    since: "2008",
    short: "Printed matter from the studio.",
    long: "Books, monographs, posters and ephemera — the paper memory of a House that never wrote its own name on a label.",
    categories: ["Books", "Posters", "Archives"],
    img: IMG.atelier,
  },
  {
    n: "14",
    name: "Men's Wardrobe",
    since: "1999",
    short: "Built to be worn out.",
    long: "The everyday men's line. Jersey, shirting, denim and outerwear cut for use rather than occasion.",
    categories: ["Jersey", "Denim", "Shirting", "Outerwear"],
    img: IMG.runway6,
  },
  {
    n: "22",
    name: "Shoes",
    since: "1989",
    short: "The Tabi and the future footprint.",
    long: "Home of the split toe. The Tabi boot first walked in 1989 and has never left. Alongside it: the Replica sneaker, the New Future, the German Army Trainer re-issue.",
    categories: ["Tabi", "Sneakers", "Boots", "Flats"],
    img: IMG.tabi,
    accent: true,
  },
];

export const NUMBERS_CIRCLE = [
  "0", "1", "3", "4", "6", "8", "10", "11", "12", "13", "14", "22",
];
