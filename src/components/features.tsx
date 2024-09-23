import { cn } from "@/lib/utils";
import {
  List,
  LucideIcon,
  MessageSquare,
  Globe as GlobeLucide,
  Users,
} from "lucide-react";
import { ComponentProps, PropsWithChildren } from "react";
import { Globe } from "@/components/globe";

type HomeFeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
} & ComponentProps<"li"> &
  PropsWithChildren;

const HomeFeature = ({
  icon: Icon,
  title,
  description,
  className,
  children,
  ...props
}: HomeFeatureProps) => {
  return (
    <li
      className={cn(
        "flex flex-col space-y-4 rounded-lg border bg-background bg-gradient-to-b from-transparent to-muted/30 p-6",
        className
      )}
      {...props}
    >
      <div className="space-y-1">
        <div className="flex items-center gap-4">
          <Icon className="h-6 w-6 text-muted-foreground" />
          <span className="text-lg font-semibold">{title}</span>
        </div>

        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="pointer-events-none relative flex h-full w-full select-none items-center justify-center overflow-hidden rounded-lg border text-muted-foreground shadow">
        {children}
      </div>
    </li>
  );
};

export const HomeFeatures = () => {

  return (
    <section className="py-8" id="features">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold">Multiflix Features</h2>
          <p className="w-2/3 text-center text-muted-foreground">
            Multiflix is a haven for cinema enthusiasts, offering a vast library of movies and TV series. Discover detailed information including synopses, cast, budgets, and more.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-3 lg:p-0">
          <HomeFeature
            title={"List"}
            description={
              "Discover and enjoy free streaming content across various genres."
            }
            className="col-span-1 aspect-[16/9] lg:col-span-2"
            icon={List}
          >
            <span className="animate-pulse">Work in progress...</span>
          </HomeFeature>

          <HomeFeature
            icon={MessageSquare}
            title={"Reviews"}
            description={
              "Write reviews about what you are watching and let the world know your opinion."
            }
            className="col-span-1"
          >
            <span className="animate-pulse">Work in progress...</span>
          </HomeFeature>

          <HomeFeature
            icon={GlobeLucide}
            title={"Multi-language Support"}
            description={
              "We support different languages to bring together different countries."
            }
            className="col-span-1"
          >
            <Globe />
          </HomeFeature>

          <HomeFeature
            icon={Users}
            title={"Communities"}
            description={"Create or participate in specific niche communities."}
            className="col-span-1  aspect-[16/9] lg:col-span-2"
          >
            <span className="animate-pulse">Work in progress...</span>
          </HomeFeature>
        </ul>
      </div>
    </section>
  );
};
