import { RawImage } from "@/components/image/raw-image";
import { Badge } from "@/components/ui/badge";
import type { Commodity } from "@/interfaces/commodity/commodity";
import { COMMODITY_CATEGORY_LABEL } from "@/interfaces/commodity/commodity-category";
import { Mail, Phone } from "lucide-react";

export interface CommodityCardProps {
  commodity: Commodity;
}

export const CommodityCard = ({ commodity }: CommodityCardProps) => {
  return (
    <div className="grid gap-4 rounded-4xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-8 shadow-2xl md:grid-cols-2 md:flex-row">
      <div>
        <div className="flex flex-col gap-6 md:sticky md:top-2">
          <div className="flex flex-col gap-4">
            <Badge className="rounded-full border-white/20 bg-white/20 text-white backdrop-blur-md">
              {COMMODITY_CATEGORY_LABEL[commodity.category]}
            </Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {commodity.name}
            </h1>
            <p className="text-lg font-medium text-white/80">
              {commodity.description}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white/90">
              <span className="font-semibold">Supplier:</span>{" "}
              {commodity.supplier?.name}
            </p>
            <p className="flex items-center gap-2 text-white/90">
              <Phone className="text-base" size="1em" />
              {commodity.supplier?.phoneNumber}
            </p>
            <p className="flex items-center gap-2 text-white/90">
              <Mail className="text-base" size="1em" />
              {commodity.supplier?.email}
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm">
          {commodity.image ? (
            <RawImage src={commodity.image} alt={commodity.name} />
          ) : (
            <div className="text-center text-white/70">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20">
                <span className="text-3xl">🐲</span>
              </div>
              <p>Product Image</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
