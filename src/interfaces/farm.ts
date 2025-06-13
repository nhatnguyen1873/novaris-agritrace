import type { Field } from "@/interfaces/field";
import type { Location } from "@/interfaces/location";
import type { PolygonApp } from "@/interfaces/polygon-app";

export interface Farm {
  id: string;
  name: string;
  area: number;
  ownerName: string;
  location?: Location | null;
  polygonApp?: PolygonApp | null;
  fields?: Field[] | null;
}
