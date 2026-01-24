import { Stadt } from "../types";

// Bremen als Stadtstaat (zwei Städte: Bremen und Bremerhaven)
export const staedteBremen: Stadt[] = [
  {
    id: "hb-bremen",
    name: "Bremen",
    slug: "bremen",
    population: 569352,
    plz: ["28195", "28199", "28201", "28203", "28205", "28207", "28209", "28211", "28213", "28215", "28217", "28219", "28237", "28239", "28259", "28277", "28279", "28307", "28309", "28325", "28327", "28329", "28355", "28357", "28359", "28717", "28719", "28755", "28757", "28759", "28777", "28779"],
    coordinates: { lat: 53.0793, lng: 8.8017 },
    landkreis_id: null,
    bundesland_id: "hb",
    is_kreisfrei: true,
  },
  {
    id: "hb-bremerhaven",
    name: "Bremerhaven",
    slug: "bremerhaven",
    population: 113634,
    plz: ["27568", "27570", "27572", "27574", "27576", "27578", "27580"],
    coordinates: { lat: 53.5396, lng: 8.5809 },
    landkreis_id: null,
    bundesland_id: "hb",
    is_kreisfrei: true,
  },
];
