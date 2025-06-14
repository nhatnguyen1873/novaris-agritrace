import { cn } from "@/lib/utils";
import type { ImgHTMLAttributes } from "react";

export type RawImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const RawImage = (props: RawImageProps) => {
  return (
    <img
      {...props}
      className={cn("h-full w-full object-cover", props.className)}
    />
  );
};
