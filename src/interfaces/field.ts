import type { Farm } from "@/interfaces/farm";
import type { Location } from "@/interfaces/location";
import type { PolygonApp } from "@/interfaces/polygon-app";
import type { SoilQuality } from "@/interfaces/soil-quality";

export interface Field {
  id: string;
  name: string;
  area: number;
  status: string;
  internalId: string;
  plantingFormat: string;
  locationType: string;
  lightProfile: string;
  grazingRestDays: number;
  numberOfBeds: number;
  bedLength: number | null;
  bedWidth: number | null;
  description: string | null;
  location: Location | null;
  farm?: Farm | null;
  polygonApp?: PolygonApp | null;
  soilQuality?: SoilQuality | null;
}
