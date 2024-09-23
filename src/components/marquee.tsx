"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import * as React from "react";
import { FetchMovieInfo } from "@/fetch/index";
import { API_KEY } from "@/config/urls";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";
import { Image as ImageIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type Movie = {
  id: number;
  title: string;
  backdrop_path: string | null;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
  overview: string;
};

type MovieData = {
  results: Movie[];
};

export interface CardProps {
  item: Movie;
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-2 max-w-xs md:max-w-sm">
      <Skeleton className="aspect-video w-full rounded-md" />
      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-1">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-10" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

export function Card({ item }: CardProps) {
  return (
    <Link
      href={`/movie/${item.id}`}
      className="flex flex-col gap-2 group relative overflow-hidden cursor-pointer max-w-xs md:max-w-sm"
    >
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border bg-background/50 shadow">
        {item.backdrop_path ? (
          <Image
            fill
            className="object-cover rounded-xl"
            src={`https://sup-proxy.zephex0-f6c.workers.dev/api-content?url=https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt={item.title}
            sizes="100%"
            priority
          />
        ) : (
          <ImageIcon className="text-muted" />
        )}
      </div>

      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-1">
          <span className="font-semibold text-sm">{item.title}</span>

          <Badge variant="outline">
            {item.vote_average ? item.vote_average.toFixed(1) : "?"}
          </Badge>
        </div>

        <p className="line-clamp-3 text-xs text-muted-foreground">
          {item.overview}
        </p>
      </div>
    </Link>
  );
}

export default function MarqueeSection() {
  const [data, setData] = React.useState<MovieData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
          { next: { revalidate: 21600 } }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch movie data");
        }
        const data: MovieData = await res.json();
        FetchMovieInfo(data);
        setData(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="py-14 text-center text-red-500">
        <p>Failed to load movies: {error}</p>
      </div>
    );
  }

  return (
    <section id="showcase" className="container py-14">
      <div className="relative flex flex-col">
        <Marquee pauseOnHover className="max-w-screen [--duration:40s]">
          {loading
            ? Array(10)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
            : data?.results.slice(0, 10).map((movie: Movie) => (
              <Card key={movie.id} item={movie} />
            ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="max-w-screen [--duration:40s] mt-10"
        >
          {loading
            ? Array(10)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
            : data?.results.slice(0, 10).map((movie: Movie) => (
              <Card key={movie.id} item={movie} />
            ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-[2%] bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-[2%] bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}