import { CommodityCard } from "@/pages/components/commodity-card";
import { CropSectionCard } from "@/pages/components/crop-section-card";
import { FieldSectionCard } from "@/pages/components/field-section-card";
import { COMMODITY_DATA } from "@/seeds/commodity/commodity-data";
import { CROP_DATA } from "@/seeds/crop/crop-data";
import { FIELD_DATA } from "@/seeds/field/field-data";

export const TracePage = () => {
  return (
    <div className="flex min-h-[100rem] flex-col gap-16 p-6">
      <CommodityCard commodity={COMMODITY_DATA} />
      <CropSectionCard crop={CROP_DATA} />
      <FieldSectionCard field={FIELD_DATA} />
    </div>
  );
};
