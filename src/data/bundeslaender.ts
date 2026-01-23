import { Bundesland } from "./types";

export const bundeslaender: Bundesland[] = [
  {
    id: "by",
    name: "Bayern",
    slug: "bayern",
    capital: "München",
    population: 13176989,
    area_km2: 70541,
  },
  {
    id: "bw",
    name: "Baden-Württemberg",
    slug: "baden-wuerttemberg",
    capital: "Stuttgart",
    population: 11124642,
    area_km2: 35751,
  },
  {
    id: "nw",
    name: "Nordrhein-Westfalen",
    slug: "nordrhein-westfalen",
    capital: "Düsseldorf",
    population: 17925570,
    area_km2: 34112,
  },
  {
    id: "he",
    name: "Hessen",
    slug: "hessen",
    capital: "Wiesbaden",
    population: 6295017,
    area_km2: 21115,
  },
  {
    id: "ni",
    name: "Niedersachsen",
    slug: "niedersachsen",
    capital: "Hannover",
    population: 8027031,
    area_km2: 47709,
  },
  {
    id: "rp",
    name: "Rheinland-Pfalz",
    slug: "rheinland-pfalz",
    capital: "Mainz",
    population: 4106485,
    area_km2: 19858,
  },
  {
    id: "sn",
    name: "Sachsen",
    slug: "sachsen",
    capital: "Dresden",
    population: 4043002,
    area_km2: 18449,
  },
  {
    id: "sh",
    name: "Schleswig-Holstein",
    slug: "schleswig-holstein",
    capital: "Kiel",
    population: 2922005,
    area_km2: 15804,
  },
  {
    id: "bb",
    name: "Brandenburg",
    slug: "brandenburg",
    capital: "Potsdam",
    population: 2573135,
    area_km2: 29654,
  },
  {
    id: "st",
    name: "Sachsen-Anhalt",
    slug: "sachsen-anhalt",
    capital: "Magdeburg",
    population: 2169253,
    area_km2: 20454,
  },
  {
    id: "th",
    name: "Thüringen",
    slug: "thueringen",
    capital: "Erfurt",
    population: 2108863,
    area_km2: 16202,
  },
  {
    id: "mv",
    name: "Mecklenburg-Vorpommern",
    slug: "mecklenburg-vorpommern",
    capital: "Schwerin",
    population: 1628378,
    area_km2: 23295,
  },
  {
    id: "sl",
    name: "Saarland",
    slug: "saarland",
    capital: "Saarbrücken",
    population: 982348,
    area_km2: 2571,
  },
  {
    id: "be",
    name: "Berlin",
    slug: "berlin",
    capital: "Berlin",
    population: 3677472,
    area_km2: 892,
  },
  {
    id: "hh",
    name: "Hamburg",
    slug: "hamburg",
    capital: "Hamburg",
    population: 1892122,
    area_km2: 755,
  },
  {
    id: "hb",
    name: "Bremen",
    slug: "bremen",
    capital: "Bremen",
    population: 676463,
    area_km2: 419,
  },
];

export function getBundeslandBySlug(slug: string): Bundesland | undefined {
  return bundeslaender.find((b) => b.slug === slug);
}

export function getBundeslandById(id: string): Bundesland | undefined {
  return bundeslaender.find((b) => b.id === id);
}
