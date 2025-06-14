import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Crop } from "@/interfaces/crop/crop";
import { Calendar, FileText, MapPin } from "lucide-react";

export interface CropSectionCardProps {
  crop: Crop;
}

export const CropSectionCard = ({ crop }: CropSectionCardProps) => {
  return (
    <Card className="gap-[initial] rounded-4xl shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-2xl text-green-600">
          <div className="flex items-center justify-center rounded-full border-white/20 bg-primary/20 backdrop-blur-md">
            🌱
          </div>
          Crop & Seedling Information
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-green-600">Crop</h4>
            <p className="text-muted-foreground">{crop.name}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-green-600">Seedling Origin</h4>
            <div className="flex flex-col gap-1">
              <p className="font-medium">
                Dalat Agricultural Research Institute
              </p>
              <p className="flex items-center text-sm text-muted-foreground">
                <MapPin className="text-base" size="1em" />
                123 Research Road, Ward 3, Dalat City, Lam Dong Province
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="flex items-center gap-2 font-semibold text-green-600">
              <Calendar className="text-base" size="1em" />
              Import Date
            </h4>
            <p className="text-muted-foreground">March 15, 2024</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="flex items-center gap-2 font-semibold text-green-600">
              <FileText className="text-base" size="1em" />
              Quality Certifications
            </h4>
            <div className="flex flex-col gap-2">
              <div className="rounded-lg border bg-secondary/50 p-3">
                <p className="text-sm font-medium">
                  Seedling Quality Certificate
                </p>
                <p className="text-xs text-muted-foreground">
                  Certificate No: SQ-2024-0315-DR
                </p>
              </div>
              <div className="rounded-lg border bg-secondary/50 p-3">
                <p className="text-sm font-medium">Phytosanitary Certificate</p>
                <p className="text-xs text-muted-foreground">
                  Certificate No: PC-2024-0314-VN
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
