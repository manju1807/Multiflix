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
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-shadow duration-500 ease--in-out [--bg-size:300%]",
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
