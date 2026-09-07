import { IMG, POOL, pick } from "../lib/images";

export type Product = {
  id: string;
  name: string;
  line: string;
  cat: string;
  price: number;
  img: string;
  color: string;
  note: string;
  tag?: "New" | "Icon" | "Archive" | "Last pieces";
};

const S = POOL.shoes, A = POOL.acc, R = POOL.runway, H = POOL.house;

export const PRODUCTS: Product[] = [
  // ---------- LINE 22 · SHOES ----------
  { id: "tabi-ankle-60", name: "Tabi Ankle Boots 60mm", line: "22", cat: "Tabi", price: 1190, img: IMG.tabi, color: "Black calf", note: "The original split toe, first shown in 1989.", tag: "Icon" },
  { id: "tabi-ballet", name: "Tabi Ballet Flats", line: "22", cat: "Tabi", price: 890, img: S[0], color: "Nappa black", note: "The viral silhouette. Soft leather, split toe, no heel.", tag: "New" },
  { id: "tabi-loafer", name: "Tabi Loafers", line: "22", cat: "Tabi", price: 1050, img: S[1], color: "Polished leather", note: "The divide, formalised." },
  { id: "tabi-chelsea", name: "Tabi Chelsea Boots", line: "22", cat: "Tabi", price: 1150, img: S[2], color: "Waxed leather", note: "Elastic gusset, stitched toe split." },
  { id: "tabi-knee", name: "Tabi Knee-High Boots", line: "22", cat: "Tabi", price: 1590, img: S[3], color: "Black nappa", note: "Runway proportion, 40mm heel." },
  { id: "tabi-slingback", name: "Tabi Slingbacks 70mm", line: "22", cat: "Tabi", price: 1090, img: S[4], color: "Patent black", note: "Couture line, strap-back." },
  { id: "tabi-sandal", name: "Tabi Platform Sandals", line: "22", cat: "Tabi", price: 950, img: S[5], color: "Calf, bone", note: "Summer split toe on a 45mm base." },
  { id: "future-high", name: "New Future High-Top", line: "22", cat: "Sneakers", price: 795, img: S[6], color: "Off-white leather", note: "Seams exposed, invisible stitching outside.", tag: "Icon" },
  { id: "replica-sneaker", name: "Replica Low Sneakers", line: "22", cat: "Sneakers", price: 595, img: S[7], color: "Vintage white", note: "Reproduced from an archive trainer." },
  { id: "gat", name: "German Army Trainer", line: "22", cat: "Sneakers", price: 690, img: S[8], color: "Suede & mesh", note: "The House's long-held reproduction." },
  { id: "tabi-derby", name: "Tabi Derbies", line: "22", cat: "Tabi", price: 1090, img: S[1], color: "Grained calf", note: "Five-eyelet, split toe." },
  { id: "tabi-mule", name: "Tabi Mules", line: "22", cat: "Tabi", price: 850, img: S[3], color: "Shearling", note: "Backless, winter-lined." },

  // ---------- LINE 11 · ACCESSORIES ----------
  { id: "glam-slam-classic", name: "Glam Slam Classic Flap Bag", line: "11", cat: "Bags", price: 2450, img: IMG.bag, color: "Quilted cream", note: "Quilted leather, soft construction, 2018.", tag: "Icon" },
  { id: "glam-slam-tote", name: "Glam Slam Shopper", line: "11", cat: "Bags", price: 2790, img: A[0], color: "Black quilt", note: "Oversized, unstructured." },
  { id: "glam-slam-clutch", name: "Glam Slam Clutch", line: "11", cat: "Bags", price: 1450, img: A[1], color: "Ivory", note: "Evening scale, chain strap." },
  { id: "5ac-medium", name: "5AC Medium", line: "11", cat: "Bags", price: 2150, img: A[2], color: "Black leather", note: "Named after a poem by Henri Michaux, 2014.", tag: "Icon" },
  { id: "5ac-mini", name: "5AC Mini", line: "11", cat: "Bags", price: 1390, img: A[3], color: "Bone", note: "Small scale, same architecture." },
  { id: "snatched", name: "Snatched Bag", line: "11", cat: "Bags", price: 1290, img: A[4], color: "Distressed leather", note: "Soft, crushable, held in the hand." },
  { id: "filtered-tote", name: "Filtered Canvas Tote", line: "11", cat: "Bags", price: 690, img: A[5], color: "Natural canvas", note: "Printed archive numbers." },
  { id: "belt-number", name: "Numbers Belt Bag", line: "11", cat: "Bags", price: 890, img: A[6], color: "Nylon black", note: "Utility, monogrammed in white." },
  { id: "wallet-four", name: "Four Stitches Wallet", line: "11", cat: "Small leather goods", price: 450, img: A[7], color: "Smooth calf", note: "Unlined, stitched on the outside." },
  { id: "cardholder", name: "Number Cardholder", line: "11", cat: "Small leather goods", price: 290, img: A[0], color: "Black", note: "Six slots, blind-embossed numbers." },
  { id: "pin-set", name: "Number Pins — Set of 12", line: "11", cat: "Jewellery", price: 210, img: A[3], color: "Silver plated", note: "The complete numbering system, worn.", tag: "New" },
  { id: "bracelet-leather", name: "Leather Number Bracelet", line: "11", cat: "Jewellery", price: 320, img: A[5], color: "Black calf", note: "Hand-cut, snap closure." },

  // ---------- LINE 1 · WOMEN'S COLLECTION ----------
  { id: "w-blazer-shoulder", name: "Rebuilt Shoulder Blazer", line: "1", cat: "Tailoring", price: 2450, img: R[0], color: "Charcoal wool", note: "Seams turned outward, padded by hand." },
  { id: "w-trench-decon", name: "Deconstructed Trench", line: "1", cat: "Outerwear", price: 3200, img: R[1], color: "Waxed cotton", note: "Lining exposed, darts reversed." },
  { id: "w-dress-tulle", name: "Layered Tulle Dress", line: "1", cat: "Dresses", price: 2900, img: R[2], color: "Bone", note: "Three densities of tulle, raw hem." },
  { id: "w-skirt-flat", name: "Flat-Construction Skirt", line: "1", cat: "Skirts", price: 1150, img: R[3], color: "Wool twill", note: "Delivered folded flat." },
  { id: "w-knit-numbers", name: "Numbers Intarsia Knit", line: "1", cat: "Knitwear", price: 980, img: R[4], color: "Ecru wool", note: "Full numbering system across the front." },
  { id: "w-shirt-tabi", name: "Tabi-Collar Shirt", line: "1", cat: "Shirting", price: 790, img: R[5], color: "Poplin white", note: "Split collar, split cuff." },

  // ---------- LINE 10 · MEN'S COLLECTION ----------
  { id: "m-coat-lab", name: "The White Coat", line: "10", cat: "Outerwear", price: 2600, img: IMG.atelier, color: "Cotton twill", note: "The atelier coat, cut for the street.", tag: "Icon" },
  { id: "m-blazer-suiting", name: "Unfinished Lapel Blazer", line: "10", cat: "Tailoring", price: 2250, img: R[6], color: "Ink wool", note: "Lapel left open at the seam." },
  { id: "m-trouser-cuff", name: "Turn-Over Trouser", line: "10", cat: "Trousers", price: 890, img: R[7], color: "Grey flannel", note: "Cuff released, hem unfinished." },
  { id: "m-denim-raw", name: "Raw-Edge Denim", line: "10", cat: "Denim", price: 720, img: H[0], color: "Indigo", note: "Selvedge left unhemmed." },
  { id: "m-knit-argyle", name: "Distorted Argyle Sweater", line: "10", cat: "Knitwear", price: 850, img: H[3], color: "Multi wool", note: "Pattern stretched off-grid." },

  // ---------- LINE 4 / 14 · WARDROBE ----------
  { id: "w4-tee-stitch", name: "Four Stitches T-Shirt", line: "4", cat: "Jersey", price: 220, img: H[1], color: "White", note: "Stitches on the outside, for once.", tag: "New" },
  { id: "w4-hoodie", name: "Wardrobe Hoodie", line: "4", cat: "Jersey", price: 480, img: H[2], color: "Faded black", note: "Heavy loopback cotton." },
  { id: "m14-shirt-oxford", name: "Oxford Shirt — Flat", line: "14", cat: "Shirting", price: 340, img: H[4], color: "Optic white", note: "Folded flat, sewn without lining." },
  { id: "m14-jersey-crew", name: "Wardrobe Crewneck", line: "14", cat: "Jersey", price: 290, img: H[5], color: "Heather grey", note: "Everyday weight." },

  // ---------- LINE 8 · EYEWEAR ----------
  { id: "eye-01", name: "Eyewear 01 — Titanium", line: "8", cat: "Eyewear", price: 520, img: A[1], color: "Brushed steel", note: "Square, screwless hinge." },
  { id: "eye-02", name: "Eyewear 02 — Acetate", line: "8", cat: "Eyewear", price: 460, img: A[4], color: "Havana", note: "Hand-polished acetate." },
  { id: "eye-03", name: "Eyewear 03 — Optical", line: "8", cat: "Eyewear", price: 420, img: A[6], color: "Crystal", note: "Rx-ready, four-stitch temple." },

  // ---------- LINE 12 · OBJECTS ----------
  { id: "obj-mirror", name: "The Mirror — Medium", line: "12", cat: "Home", price: 780, img: A[2], color: "Glass, brass", note: "Spherical, the House's oldest object.", tag: "Icon" },
  { id: "obj-candle", name: "Replica Candle — By the Fireplace", line: "12", cat: "Home", price: 145, img: IMG.replica, color: "Burning woods", note: "165g, reproduces a memory." },
  { id: "obj-incense", name: "Incense & Holder", line: "12", cat: "Home", price: 95, img: A[0], color: "Cedar", note: "Forty sticks, brass holder." },
  { id: "obj-cards", name: "Playing Cards", line: "12", cat: "Miscellaneous", price: 60, img: A[3], color: "Numbered deck", note: "Numbers instead of suits." },
  { id: "obj-keyring", name: "Leather Keyring", line: "12", cat: "Miscellaneous", price: 190, img: A[5], color: "Black calf", note: "Cut from bag offcuts." },
  { id: "obj-umbrella", name: "Number Umbrella", line: "12", cat: "Miscellaneous", price: 380, img: A[7], color: "Printed canopy", note: "The numbers, seen from below." },

  // ---------- LINE 13 · PUBLICATIONS ----------
  { id: "pub-housebook", name: "House Book — Revised", line: "13", cat: "Books", price: 110, img: IMG.atelier, color: "Paperback", note: "The House explained by itself." },
  { id: "pub-hermes", name: "Margiela — The Hermès Years", line: "13", cat: "Books", price: 95, img: IMG.artisanal, color: "Hardback", note: "MoMu Antwerp exhibition catalogue." },
  { id: "pub-poster", name: "Archive Poster Set", line: "13", cat: "Posters", price: 70, img: H[2], color: "Offset print", note: "Six reproductions, 50 × 70 cm." },
];

export const CATS = [
  "All",
  "Tabi",
  "Sneakers",
  "Bags",
  "Small leather goods",
  "Jewellery",
  "Tailoring",
  "Outerwear",
  "Shirting",
  "Knitwear",
  "Dresses",
  "Skirts",
  "Trousers",
  "Denim",
  "Jersey",
  "Eyewear",
  "Home",
  "Books",
  "Miscellaneous",
  "Posters",
];

export const LINE_FILTERS = ["All", "0", "1", "3", "4", "6", "8", "10", "11", "12", "13", "14", "22"];

export const fmt = (n: number) => "€" + n.toLocaleString("en-US");

export const byLine = (l: string) => PRODUCTS.filter((p) => p.line === l);
export const count = pick;
