export const COMMODITY_STATUS = {
  Active: 0,
  OutOfStock: 1,
  Discontinued: 2,
  ComingSoon: 3,
  PreOrder: 4,
  Limited: 5,
} as const;

export type CommodityStatus =
  (typeof COMMODITY_STATUS)[keyof typeof COMMODITY_STATUS];
