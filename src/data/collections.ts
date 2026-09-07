import { POOL } from "../lib/images";

export type Show = {
  season: string;
  line: string;
  title?: string;
  venue: string;
  note: string;
  img: string;
};

const R = POOL.runway, H = POOL.house;

export const COUTURE: Show[] = [
  { season: "Artisanal SS 2026", line: "0", title: "Défilé", venue: "Paris — January", note: "A collection assembled from salvage: chandelier glass, a 1920s slip, army canvas. Ends with a bride.", img: R[0] },
  { season: "Artisanal SS 2025", line: "0", title: "The Wedding", venue: "Paris — January", note: "Galliano's swing slang for the finale look; jewellery cast from found hardware.", img: R[1] },
  { season: "Artisanal SS 2024", line: "0", title: "Sportlets", venue: "Paris — January", note: "Couture drawn through the lens of workwear and sport, cut for an imaginary team.", img: R[2] },
  { season: "Artisanal SS 2023", line: "0", title: "Cinema State", venue: "Paris — January", note: "Costume as couture: the wardrobe of a film that does not exist.", img: R[3] },
  { season: "Artisanal SS 2022", line: "0", title: "Défilé", venue: "Paris — January", note: "Presented as film and stills, shot across empty Paris locations.", img: R[4] },
  { season: "Artisanal SS 2021", line: "0", title: "L'Été duhors", venue: "Paris — July (digital)", note: "Made during lockdown by a reduced atelier; every look documented as a single frame.", img: R[5] },
  { season: "Artisanal SS 2020", line: "0", title: "Paranormal", venue: "Paris — January", note: "Silhouettes that appear to have been worn by someone else first.", img: R[6] },
  { season: "Artisanal SS 2019", line: "0", title: "Recycling", venue: "Paris — January", note: "The atelier's founding method, applied to couture volume.", img: R[7] },
  { season: "Artisanal SS 2017", line: "0", title: "The Swing", venue: "Paris — January", note: "Galliano's first full Artisanal vocabulary: deconstructed glamour, rebuilt.", img: H[0] },
  { season: "Artisanal SS 2016", line: "0", title: "Avant-Première", venue: "London/Paris", note: "A preview presentation held before the official couture calendar.", img: H[1] },
  { season: "Artisanal SS 2015", line: "0", title: "Défilé", venue: "Paris — January", note: "John Galliano's first collection for the House.", img: H[2] },
];

export const RTW: Show[] = [
  { season: "SS 2026", line: "1", venue: "Paris — Palais de Tokyo", note: "Flat construction revisited at scale; the numbers printed as a watermark.", img: R[1] },
  { season: "FW 2025", line: "10", venue: "Paris — Rue Saint-Maur", note: "Menswear staged inside the atelier, among the dress forms.", img: R[2] },
  { season: "SS 2025", line: "6", venue: "Paris — MM6", note: "Utility slogans, hybrid technical outerwear.", img: R[3] },
  { season: "FW 2024", line: "1", venue: "Paris", note: "The coat as architecture; shoulders drawn outward.", img: R[4] },
  { season: "SS 2024", line: "1", venue: "Paris", note: "Tulle in three densities; shoes re-cut as Tabi variations.", img: R[5] },
  { season: "FW 2023", line: "10", venue: "Paris", note: "Tailoring with the lapel left open at the seam.", img: R[6] },
  { season: "SS 2023", line: "4", venue: "Paris", note: "The wardrobe line shown alongside the collection for the first time.", img: R[7] },
  { season: "FW 2022", line: "1", venue: "Paris", note: "A white room, white garments, four white stitches.", img: R[0] },
  { season: "SS 1990", line: "1", venue: "Paris — schoolyard, 20e", note: "Children seated in the front row. The first myth.", img: H[3] },
  { season: "SS 1989", line: "22", venue: "Paris — Café de la Gare", note: "Debut collection. The Tabi boot appears for the first time.", img: H[4] },
];

export const ARCHIVE_CODES = [
  { code: "SS 89", label: "Debut", detail: "23 October 1988" },
  { code: "SS 90", label: "Schoolyard", detail: "Paris 20e" },
  { code: "FW 94", label: "Replica", detail: "Archive re-issue" },
  { code: "SS 98", label: "Flat", detail: "Lines 4 & 10" },
  { code: "SS 99", label: "Covered faces", detail: "A show without clothes" },
  { code: "FW 08", label: "20 years", detail: "Lines 8 · 12 · 13" },
  { code: "AW 14", label: "Appointment", detail: "John Galliano" },
  { code: "SS 15", label: "Artisanal", detail: "Couture returns" },
  { code: "SS 18", label: "Glam Slam", detail: "Line 11" },
  { code: "SS 22", label: "Mutiny", detail: "Line 3" },
];
