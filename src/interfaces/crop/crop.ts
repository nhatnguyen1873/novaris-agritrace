import type { CropType } from "@/interfaces/crop/crop-type";
import type { Supplier } from "@/interfaces/supplier";

export interface Crop {
  id: string;
  icon: string;
  name: string;
  cycle: string;
  edible: boolean;
  soil: string;
  watering: string;
  maintenance: string;
  hardinessZone: number;
  indoor: boolean;
  propagation: string;
  careLevel: string;
  growthRate: string;
  description: string;
  cultivatedArea: number;
  plantedDate: string;
  expectedDate: string;
  quantity: number;
  publicImageId: string;
  cropType: CropType;
  supplier: Supplier;
}
