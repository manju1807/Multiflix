import { Navbar } from "@/components/navbar";
import { Pattern } from "@/components/pattern";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import * as Craft from "@/components/ui/craft";
import Link from "next/link";
import { Suspense } from "react";
import DetailsContainer from "@/components/containers/movies/home-page";
import { getInfoURL, getTVInfoURL } from "@/config/urls";


export default async function Home() {
  const id = "299536";
  const type = 'movies'
  const data = await get_movie_info(id, type);
  return (
    <>
      <Pattern variant="checkered" />
      <Navbar />
      <div className="mx-auto max-w-4xl p-4">
        <section className="flex h-[75vh] items-center md:h-[50vh]">
          <div className="mx-auto flex w-4/5 flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-6xl font-bold">
              Enjoy latest movies, tv series, and tv shows!
            </h1>
            <p className="text-sm leading-6 text-muted-foreground">
              Multiflix is a streaming platform for those who enjoy relaxing and binge-watching their favorite movies, series, and more.
            </p>
            <div className="flex gap-2">
              <Button disabled>
                <Link href={`/auth/register`}>
                  Sign up
                </Link>
              </Button>
              <Link href={`/changelog`}>
                <Button variant="outline">Changelog</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section className="pb-12 py-8">
        <div className="mx-auto aspect-auto w-full max-w-6xl overflow-hidden rounded-md border bg-background shadow-lg dark:shadow-none md:aspect-">
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <DetailsContainer data={data} id={id} embed />
          </Suspense>
        </div>
      </section>
      <section className="space-y-8">
        <Craft.Section>
          <Craft.Container>
            <section className="py-8" id="posts">
              <div className="mx-auto max-w-6xl space-y-8">
                <div className="flex flex-col items-center space-y-2">
                  <h2 className="text-2xl font-bold">Latest Posts</h2>
                  <p className="w-2/3 text-center text-muted-foreground">
                    Find out the latest info on what have been updated.
                  </p>
                </div>
              </div>
            </section>
          </Craft.Container>
        </Craft.Section>
      </section>
    </>
  );
}

const get_movie_info = async (id: any, type: any) => {
  const url = type === 'movies' ? getInfoURL(id) : getTVInfoURL(id);
  const res = await fetch(url, { next: { revalidate: 21620 } });
  const data = await res.json();
  return data;
};
