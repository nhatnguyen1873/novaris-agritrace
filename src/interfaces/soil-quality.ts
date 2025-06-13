import type { Field } from "@/interfaces/field";

export interface SoilQuality {
  id: string;
  infoTime: string;
  chlorophyll: number;
  iron: number;
  nitrate: number;
  phyto: number;
  oxygen: number;
  pH: number;
  phytoplankton: number;
  silicate: number;
  salinity: number;
  soilMoisture: number;
  soilMoisture10cm: number;
  soilMoisture40cm: number;
  soilMoisture100cm: number;
  soilTemperature: number;
  soilTemperature10cm: number;
  soilTemperature40cm: number;
  soilTemperature100cm: number;
  field?: Field | null;
}
