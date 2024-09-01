import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]",
        className,
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient p-[1px]`}
      />
      {children}
    </div>
  );
}
