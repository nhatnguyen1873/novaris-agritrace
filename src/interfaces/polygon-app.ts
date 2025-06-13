import type { Position } from "@/interfaces/position";

export interface PolygonApp {
  id: string;
  color: string;
  type: number;
  positions: Position[];
}
