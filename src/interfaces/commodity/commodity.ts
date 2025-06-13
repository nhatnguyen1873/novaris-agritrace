import type { CommodityCategory } from "@/interfaces/commodity/commodity-category";
import type { CommodityStatus } from "@/interfaces/commodity/commodity-status";
import type { Crop } from "@/interfaces/crop/crop";
import type { Supplier } from "@/interfaces/supplier";

export interface Commodity {
  id: string;
  name: string;
  description: string;
  category: CommodityCategory;
  price: number;
  expirationDate: string;
  status: CommodityStatus;
  image: string;
  publicImageId: string;
  supplier: Supplier | null;
  crop: Crop | null;
}
