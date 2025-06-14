import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Field } from "@/interfaces/field";
import { Info, MapPin } from "lucide-react";

export interface FieldSectionCardProps {
  field: Field;
}

export const FieldSectionCard = ({ field }: FieldSectionCardProps) => {
  return (
    <Card className="animate-fade-in transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-2xl text-primary">
          <div className="rounded-full bg-primary/10">🗺️</div>
          Cultivation Plot Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            <div>
              <h4 className="mb-2 font-semibold text-primary">
                Plot Information
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Plot ID:
                  </span>
                  <Badge variant="outline">BT-2024-007</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Area:</span>
                  <span className="font-medium">2.5 hectares</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Soil Type:
                  </span>
                  <span className="font-medium">Red Basaltic Soil</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-2 flex items-center font-semibold text-primary">
                <MapPin className="mr-2 h-4 w-4" />
                Address
              </h4>
              <p className="text-muted-foreground">
                Ham Thuan Nam District, Binh Thuan Province, Vietnam
              </p>
              <div className="mt-2 rounded-lg bg-secondary/30 p-3">
                <p className="text-sm">
                  <span className="font-medium">GPS Coordinates:</span>
                  <br />
                  Latitude: 11.0451° N, Longitude: 108.0976° E
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-primary">Interactive Map</h4>
            <div className="flex aspect-square items-center justify-center rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/20">
              <div className="text-center text-primary/60">
                <MapPin className="mx-auto mb-2 h-12 w-12" />
                <p className="text-sm">Map Integration</p>
                <p className="text-xs">Click to view in maps</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-secondary/30 p-4">
          <h4 className="mb-2 flex items-center font-semibold text-primary">
            <Info className="mr-2 h-4 w-4" />
            Cultivation History
          </h4>
          <p className="text-sm text-muted-foreground">
            Previous crops: Rice (2022-2023), followed by soil restoration
            period. This rotation ensures optimal soil health and nutrient
            balance for dragon fruit cultivation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
