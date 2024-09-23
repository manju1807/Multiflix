import { format } from "date-fns";
import { Poster } from "@/components/common/poster";
import Link from "next/link";
import { Play } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { movieData } from "@/data/main";
import Img from "@/public/movies/foGkPxpw9h8zln81j63mix5B7m8.jpg"

const DetailsContainer = ({ embed }: any) => {
  return (
    <div className="antialiased relative border rounded-lg">
      <BorderBeam />
      <div className={cn("mx-auto max-w-6xl", embed ? "p-0" : "md:pt-4")}>
        <div
          className={cn(
            "h-[30dvh] w-full overflow-hidden border bg-muted shadow md:rounded-lg lg:h-[55dvh]",
            embed ? "max-h-[20vh] md:max-h-[50vh]" : undefined
          )}
        >
          <div
            style={{
              backgroundImage: `url(${Img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-full w-full brightness-75"
            moviedata-testid="banner"
          />
        </div>

        <div className="mx-auto my-8 max-w-4xl space-y-8 p-4 md:space-y-12 md:p-0 ">
          <main className="flex flex-col gap-4 md:flex-row">
            <aside className="-mt-24 mx-auto w-4/5 space-y-2 md:-ml-8 md:-mt-32 md:w-1/3">
              <Poster url={movieData.poster_path} alt={movieData.title} />
            </aside>
            <article className="flex w-full flex-col gap-2 md:w-2/3">
              {movieData.release_date && (
                <span className="text-xs text-muted-foreground">
                  {format(new Date(movieData.release_date), "PPP", {})}
                </span>
              )}
              <h1 className="text-lg font-bold md:text-4xl">{movieData.title}</h1>
              <div className="flex flex-wrap items-center gap-2">
                {movieData.genres.length > 0 && (
                  <>
                    {movieData.genres.map((genre: any) => {
                      return (
                        <Badge
                          key={genre.id}
                          variant="outline"
                          className="whitespace-nowrap"
                        >
                          {genre.name}
                        </Badge>
                      );
                    })}

                    <Separator orientation="vertical" className="h-6" />
                  </>
                )}

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge>{movieData.vote_average.toFixed(1)}</Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{movieData.vote_count} votes</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-xs leading-5 text-muted-foreground md:text-sm md:leading-6">
                {movieData.overview}
              </p>
              <div className="flex flex-wrap items-center gap-1">
                <Link href={`/movie/watch`}>
                  <Badge
                    variant="outline"
                    className="cursor-pointer whitespace-nowrap"
                  >
                    <Play className="mr-1.5" size={12} />
                    Watch
                  </Badge>
                </Link>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
