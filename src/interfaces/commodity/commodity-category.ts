export const COMMODITY_CATEGORY = {
  Vegetable: 0,
  Fruit: 1,
  Grain: 2,
  Seed: 3,
} as const;

export type CommodityCategory =
  (typeof COMMODITY_CATEGORY)[keyof typeof COMMODITY_CATEGORY];

export const COMMODITY_CATEGORY_LABEL: Record<CommodityCategory, string> = {
  0: "Vegetable",
  1: "Fruit",
  2: "Grain",
  3: "Seed",
};
