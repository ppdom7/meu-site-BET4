export type Game = {
  id: string;
  name: string;
  provider: "pg" | "tada";
  tag?: string;
  icon: string;
};

export type Banner = {
  id: string;
  image: string;
  alt: string;
};

export type Category = {
  id: string;
  label: string;
  icon: string;
};

const base = "/mirror/cdn.play77br.com/uploads";

export const banners: Banner[] = [
  { id: "b1", image: `${base}/20260113/175977df0e35f417534d53fa94d24be6.png`, alt: "Promoção de boas-vindas" },
  { id: "b2", image: `${base}/20260113/f763ea9e2d9f5a46b8e817d8ddb22cdc.png`, alt: "Bônus de recarga" },
  { id: "b3", image: `${base}/20260113/4e9c5ea5e73ba367e0d9951b295936f4.png`, alt: "Giros grátis" },
  { id: "b4", image: `${base}/20260113/d77e6aaf83d7b9eab0fa84866d498d45.png`, alt: "Cashback semanal" },
  { id: "b5", image: `${base}/20260403/1a30151b4159a0c77a1115a7a0e4170a.png`, alt: "Torneio exclusivo" },
];

export const categories: Category[] = [
  { id: "all", label: "Todos", icon: "grid" },
  { id: "popular", label: "Populares", icon: "flame" },
  { id: "new", label: "Lançamentos", icon: "sparkle" },
  { id: "slots", label: "Slots", icon: "slots" },
  { id: "jackpot", label: "Jackpot", icon: "jackpot" },
  { id: "live", label: "Ao Vivo", icon: "live" },
];

export const games: Game[] = [
  { id: "g1", name: "Fortune Tiger", provider: "tada", tag: "HOT", icon: `${base}/pop_icon/tada_87_bog.webp` },
  { id: "g2", name: "Five Star", provider: "tada", tag: "NEW", icon: `${base}/pop_icon/tada_44_fivestar.webp` },
  { id: "g3", name: "Fortune Gems 3", provider: "tada", icon: `${base}/pop_icon/tada_300_fg3.webp` },
  { id: "g4", name: "Chinese New Year", provider: "tada", icon: `${base}/pop_icon/tada_176_cny.webp` },
  { id: "g5", name: "Money Coming", provider: "tada", tag: "HOT", icon: `${base}/pop_icon/tada_51_mc.webp` },
  { id: "g6", name: "Money Combo", provider: "tada", icon: `${base}/pop_icon/tada_302_mcp.webp` },
  { id: "g7", name: "PG Slots 39", provider: "pg", icon: `${base}/pop_icon/pg_39.webp` },
  { id: "g8", name: "PG Slots 57", provider: "pg", tag: "NEW", icon: `${base}/pop_icon/pg_57.webp` },
  { id: "g9", name: "PG Slots 69", provider: "pg", icon: `${base}/pop_icon/pg_69.webp` },
  { id: "g10", name: "PG Slots 89", provider: "pg", tag: "HOT", icon: `${base}/pop_icon/pg_89.webp` },
  { id: "g11", name: "PG Slots 98", provider: "pg", icon: `${base}/pop_icon/pg_98.webp` },
  { id: "g12", name: "PG Slots 104", provider: "pg", icon: `${base}/pop_icon/pg_104.webp` },
  { id: "g13", name: "PG Slots 126", provider: "pg", icon: `${base}/pop_icon/pg_126.webp` },
  { id: "g14", name: "PG Slots 130", provider: "pg", tag: "NEW", icon: `${base}/pop_icon/pg_130.webp` },
  { id: "g15", name: "PG Slots 1451", provider: "pg", icon: `${base}/pop_icon/pg_1451122.webp` },
  { id: "g16", name: "PG Slots 1543", provider: "pg", icon: `${base}/pop_icon/pg_1543462.webp` },
  { id: "g17", name: "PG Slots 1648", provider: "pg", tag: "HOT", icon: `${base}/pop_icon/pg_1648578.webp` },
  { id: "g18", name: "PG Slots 1682", provider: "pg", icon: `${base}/pop_icon/pg_1682240.webp` },
  { id: "g19", name: "PG Slots 1695", provider: "pg", icon: `${base}/pop_icon/pg_1695365.webp` },
  { id: "g20", name: "PG Slots 1879", provider: "pg", icon: `${base}/pop_icon/pg_1879752.webp` },
];

export const navItems = [
  { id: "home", label: "Início" },
  { id: "sports", label: "Esportes" },
  { id: "casino", label: "Cassino" },
  { id: "promotions", label: "Promoções" },
  { id: "vip", label: "VIP" },
  { id: "support", label: "Suporte" },
];
