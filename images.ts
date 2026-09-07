const P = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900`;

export const IMG = {
  hero: "/margiela/hero.jpg",
  artisanal: "/margiela/artisanal.jpg",
  atelier: "/margiela/atelier.jpg",
  tabi: "/margiela/tabi.jpg",
  bag: "/margiela/bag.jpg",
  replica: "/margiela/replica.jpg",

  runway1: P("13057830"),
  runway2: P("13057803"),
  runway3: P("13045954"),
  runway4: P("13057810"),
  runway5: P("18339311"),
  runway6: P("30492648"),
  runway7: P("13057837"),
  runway8: P("13045956"),

  shoe1: P("30229954"),
  shoe2: P("35654976"),
  shoe3: P("11332376"),
  shoe4: P("14210970"),
  shoe5: P("30229957"),
  shoe6: P("30229958"),
  shoe7: P("30272891"),
  shoe8: P("30229961"),

  scent1: P("7005940"),
  scent2: P("32645088"),
  scent3: P("27357173"),
  scent4: P("32630384"),
  scent5: P("32630382"),
  scent6: P("32630388"),
  scent7: P("28745493"),
  scent8: P("32630378"),

  acc1: P("9595079"),
  acc2: P("9595073"),
  acc3: P("9595290"),
  acc4: P("9595286"),
  acc5: P("26316185"),
  acc6: P("21837378"),
  acc7: P("21897134"),
  acc8: P("14455753"),
};

export const POOL = {
  shoes: [IMG.shoe1, IMG.shoe2, IMG.shoe3, IMG.shoe4, IMG.shoe5, IMG.shoe6, IMG.shoe7, IMG.shoe8],
  scents: [IMG.scent1, IMG.scent2, IMG.scent3, IMG.scent4, IMG.scent5, IMG.scent6, IMG.scent7, IMG.scent8],
  acc: [IMG.acc1, IMG.acc2, IMG.acc3, IMG.acc4, IMG.acc5, IMG.acc6, IMG.acc7, IMG.acc8],
  runway: [IMG.runway1, IMG.runway2, IMG.runway3, IMG.runway4, IMG.runway5, IMG.runway6, IMG.runway7, IMG.runway8],
  house: [IMG.artisanal, IMG.atelier, IMG.bag, IMG.tabi, IMG.replica, IMG.hero],
};

export const pick = (arr: string[], i: number) => arr[i % arr.length];
