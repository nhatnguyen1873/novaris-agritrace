import type { Field } from "@/interfaces/field";

export const FIELD_DATA: Field = {
  id: "field-001",
  name: "Field Number 1",
  area: 12.5, // Area in hectares or other units
  status: "active",
  internalId: "FD-XYZ-001",
  plantingFormat: "row_cropping",
  locationType: "outdoor",
  lightProfile: "full_sun",
  grazingRestDays: 30,
  numberOfBeds: 50,
  bedLength: 100, // meters
  bedWidth: 1.2, // meters
  description: "Main field for summer-autumn rice cultivation.",
  location: {
    id: "loc-001",
    address: "Hoa An Commune, Phung Hiep District, Hau Giang Province",
    lat: 9.7745,
    lng: 105.7709,
    countryCode: "VN",
    city: "Hau Giang",
    state: "Hau Giang",
    district: "Phung Hiep",
    road: "National Route 61",
    postCode: "910000",
  },
  // Updated soilQuality properties with new fields
  soilQuality: {
    id: "soil-Q-abc",
    infoTime: "2025-06-14T10:00:00Z", // Information collection time
    chlorophyll: 35.2, // Unit: SPAD or as applicable
    iron: 12.5, // Unit: ppm
    nitrate: 25.8, // Unit: mg/kg
    phyto: 0.8, // General phytoplankton index
    oxygen: 7.1, // Unit: mg/L
    pH: 6.8, // Soil pH
    phytoplankton: 120, // Cells/ml
    silicate: 8.9, // Unit: mg/L
    salinity: 0.1, // Unit: % or ppt
    soilMoisture: 28.5, // %
    soilMoisture10cm: 32.1, // % moisture at 10cm depth
    soilMoisture40cm: 28.0, // % moisture at 40cm depth
    soilMoisture100cm: 25.5, // % moisture at 100cm depth
    soilTemperature: 27.0, // Celsius
    soilTemperature10cm: 26.5, // Celsius at 10cm depth
    soilTemperature40cm: 25.8, // Celsius at 40cm depth
    soilTemperature100cm: 24.5, // Celsius at 100cm depth
  },
};
