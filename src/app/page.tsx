import { Navbar } from "@/components/navbar";
import { Pattern } from "@/components/pattern";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import * as Craft from "@/components/ui/craft";
import Link from "next/link";
import { Suspense } from "react";
import DetailsContainer from "@/components/containers/movies/details-container";
import BlurIn from "@/components/magicui/blur-in";
import BlurFadeText from "@/components/blur-fade-text";
import BlurFade from "@/components/Blurfade";

export default async function Home() {
  const delay = 0.04
  return (
    <>
      <Pattern variant="checkered" />
      <Navbar />
      <div className="mx-auto max-w-4xl p-4">
        <section className="flex h-[75vh] items-center md:h-[50vh]">
          <BlurFade delay={delay * 2}>
            <div className="mx-auto flex w-4/5 flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-6xl font-bold">Explore <span className="text-[#5046e6]">movies,</span> tv series, and <span className="text-[#5046e6]">animes!</span></h1>
              <BlurFadeText
                className="text-sm leading-6 text-muted-foreground"
                delay={delay}
                text={"Multiflix is a streaming platform for those who enjoy relaxing and binge-watching their favorite movies, series, and more."}
              />
              <div className="flex gap-2">
                <Button>
                  <Link href={`/auth/register`}>
                    Sign up
                  </Link>
                </Button>
                <Link href={`/changelog`}>
                  <Button variant="outline">Changelog</Button>
                </Link>
              </div>
            </div>
          </BlurFade>
        </section>
      </div>
      <section className="pb-12 py-8">
        <div className="mx-auto aspect-auto w-full max-w-6xl overflow-hidden rounded-md border bg-background shadow-lg dark:shadow-none md:aspect-">
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <DetailsContainer embed />
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
