import { POOL } from "../lib/images";

export type Scent = {
  name: string;
  place: string;
  year: string;
  family: string;
  notes: string;
  img: string;
};

const S = POOL.scents;

export const REPLICA: Scent[] = [
  { name: "Jazz Club", place: "Paris, 1994", year: "2013", family: "Amber Woody", notes: "Rum · Tobacco leaf · Vanilla · Vetiver", img: S[0] },
  { name: "Beach Walk", place: "Biarritz, 2003", year: "2012", family: "Floral Woody", notes: "Bergamot · Coconut milk · Ylang-ylang · Musk", img: S[1] },
  { name: "By the Fireplace", place: "Chamonix, 2010", year: "2015", family: "Woody Amber", notes: "Burning woods · Chestnut · Clove · Guaiac wood", img: S[2] },
  { name: "Lazy Sunday Morning", place: "Florence, 2007", year: "2013", family: "Musky Floral", notes: "White iris · Bed linens · White musk · Almond", img: S[3] },
  { name: "Whispers in the Library", place: "An old library, 1999", year: "2019", family: "Spicy Woody", notes: "Vanilla · Pepper · Orange blossom · Woods", img: S[4] },
  { name: "Sailing Day", place: "On the ocean, 2006", year: "2017", family: "Aquatic Aromatic", notes: "Sea salt · Red algae · Ambergris · Coriander", img: S[5] },
  { name: "Coffee Break", place: "Milan, 2008", year: "2019", family: "Amber Gourmand", notes: "Coffee · Tonka bean · Cocoa · Lavender", img: S[6] },
  { name: "Flower Market", place: "Bangkok, 1998", year: "2012", family: "Floral", notes: "Tuberose · Rose · Jasmine · Green leaves", img: S[7] },
  { name: "Springtime in a Park", place: "Shanghai, 2009", year: "2018", family: "Floral Woody", notes: "Lily of the valley · Blackcurrant · Musk · Pear", img: S[0] },
  { name: "On a Date", place: "London, 2013", year: "2019", family: "Floral Fruity", notes: "Blackcurrant · Rose · Honey · Patchouli", img: S[1] },
  { name: "Under the Stars", place: "Cusco, 2011", year: "2019", family: "Woody Amber", notes: "Saffron · Leather · Cedar · Amber", img: S[2] },
  { name: "Lipstick On", place: "Milan, 2012", year: "2020", family: "Floral Leather", notes: "Iris · Lipstick accord · Suede · Heliotrope", img: S[3] },
  { name: "Bubble Bath", place: "Amsterdam, 2004", year: "2020", family: "Fresh Aquatic", notes: "Soap bubbles · Coconut · White rose · Iris", img: S[4] },
  { name: "Music Festival", place: "Los Angeles, 2015", year: "2020", family: "Aromatic Fougère", notes: "Lavender · Cannabis accord · Basil · Bergamot", img: S[5] },
  { name: "Autumn Vibes", place: "Kyoto, 2016", year: "2021", family: "Spicy Woody", notes: "Cardamom · Maple syrup · Moss · Angelica", img: S[6] },
  { name: "Matcha Meditation", place: "Kyoto, 2018", year: "2021", family: "Green Aromatic", notes: "Matcha tea · White chocolate · Bergamot · Moss", img: S[7] },
  { name: "Under the Lemon Trees", place: "Corfu, 1972", year: "2021", family: "Citrus Woody", notes: "Lemon · Coriander · Black tea · Cedarwood", img: S[0] },
  { name: "Soul of the Forest", place: "Vancouver, 1996", year: "2021", family: "Woody Aromatic", notes: "Pine needles · Cypress · Patchouli · Vetiver", img: S[1] },
  { name: "Across Sands", place: "Marrakech, 1987", year: "2021", family: "Amber Spicy", notes: "Saffron · Sandalwood · Frankincense · Cedar", img: S[2] },
  { name: "Wicked Love", place: "Paris, 1997", year: "2022", family: "Amber Floral", notes: "Rose · Incense · Jasmine · Vanilla", img: S[3] },
  { name: "When the Rain Stops", place: "Kyoto, 2005", year: "2022", family: "Musky Floral", notes: "Watery notes · Rose · Vetiver · Musk", img: S[4] },
  { name: "Sunset Hour", place: "Los Angeles, 2009", year: "2023", family: "Amber Woody", notes: "Date fruit · Mandarin · Benzoin · Tonka", img: S[5] },
];

export const OTHER_SCENTS = [
  { name: "(Untitled)", year: "2010", desc: "The first fragrance of the House. Green, smoky, deliberately unclassified — a name left blank.", notes: "Incense · Boxwood · Galbanum · Thuja", img: S[6] },
  { name: "(Untitled) Blue", year: "2011", desc: "A colder variation of the untitled proposition. Mineral, saline, architectural.", notes: "Blue cedar · Mineral notes · Mint · Amber", img: S[7] },
  { name: "Mutiny", year: "2022", desc: "The House's declaration. A defiance of convention, built on an overdose of jasmine with a salty twist.", notes: "Jasmine absolute · Salt accord · Bergamot · Vanilla", img: S[1] },
];

export const FAMILIES = ["All", "Floral", "Woody", "Amber", "Fresh", "Aromatic", "Spicy", "Gourmand"];

export const QUIZ = [
  {
    q: "Where would you rather be right now?",
    a: [
      { t: "A dim bar with leather seats", m: "Jazz Club" },
      { t: "Sand between my toes", m: "Beach Walk" },
      { t: "In front of a fire", m: "By the Fireplace" },
      { t: "Bed until noon", m: "Lazy Sunday Morning" },
    ],
  },
  {
    q: "What should a scent never be?",
    a: [
      { t: "Loud", m: "Lazy Sunday Morning" },
      { t: "Sweet", m: "Soul of the Forest" },
      { t: "Ordinary", m: "Mutiny" },
      { t: "Shy", m: "Jazz Club" },
    ],
  },
  {
    q: "Choose a material.",
    a: [
      { t: "Polished leather", m: "By the Fireplace" },
      { t: "Washed linen", m: "When the Rain Stops" },
      { t: "Raw silk", m: "Lipstick On" },
      { t: "Wet stone", m: "Sailing Day" },
    ],
  },
  {
    q: "Pick a decade.",
    a: [
      { t: "1970s", m: "Under the Lemon Trees" },
      { t: "1990s", m: "Jazz Club" },
      { t: "2000s", m: "Whispers in the Library" },
      { t: "Right now", m: "Sunset Hour" },
    ],
  },
  {
    q: "Your ideal evening is…",
    a: [
      { t: "A concert, sweating", m: "Music Festival" },
      { t: "A long dinner", m: "On a Date" },
      { t: "A bath and silence", m: "Bubble Bath" },
      { t: "A walk after rain", m: "When the Rain Stops" },
    ],
  },
];
