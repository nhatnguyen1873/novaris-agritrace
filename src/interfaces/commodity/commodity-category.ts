export const COMMODITY_CATEGORY = {
  Vegetable: 0,
  Fruit: 1,
  Grain: 2,
  Seed: 3,
} as const;

export type CommodityCategory =
  (typeof COMMODITY_CATEGORY)[keyof typeof COMMODITY_CATEGORY];
