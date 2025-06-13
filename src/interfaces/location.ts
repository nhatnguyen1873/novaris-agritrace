import type { User } from "@/interfaces/user";

export interface Location {
  id: string;
  address: string;
  lat: number;
  lng: number;
  countryCode: string;
  city: string;
  state: string;
  district: string;
  road: string;
  postCode: string;
  user: User | null;
}
