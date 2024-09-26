import Image from "next/image";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Img1 from "@/public/movies/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg"

type PosterProps = {
  url?: string;
  alt: string;
} & ComponentProps<"div">;

export const Poster = ({ className, ...props }: PosterProps) => {
  return (
    <div
      className={cn(
        "relative flex aspect-[2/3] h-96 w-[90%] mx-auto md:aspect-poster md:w-full items-center justify-center overflow-hidden rounded-lg border bg-muted text-muted shadow",
        className
      )}
      {...props}
    >
      <Image
        fill
        className="object-fill"
        sizes="100%"
        alt={'alt'}
        src={`${Img1.src}`}
        loading="lazy"
        quality={100}
      />
    </div>
  );
};
