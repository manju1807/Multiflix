import { Navbar } from "@/components/navbar";
import { Pattern } from "@/components/pattern";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { HomeFeatures } from "@/components/features";
import MarqueeSection from "@/components/marquee";
import DetailsContainer from "@/components/containers/movies/details-container";
import HeroText from "@/components/hero-text";
import Headings from "@/components/common/headings";

export default async function Home() {
  return (
    <>
      <Pattern variant="checkered" />
      <Navbar />
      <div className="mx-auto max-w-4xl p-4">
        <HeroText />
      </div>
      <section className="pb-12 py-8 px-4">
        <div className="mx-auto aspect-auto w-full max-w-6xl overflow-hidden rounded-md border bg-background shadow-lg dark:shadow-none md:aspect-">
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <DetailsContainer embed />
          </Suspense>
        </div>
      </section>
      <section id="posts">
        <div className="mx-auto max-w-6xl">
          <Headings heading={'Our Latest Collections'} subheading={'Find out the latest info on what have been updated.'} />
          <MarqueeSection />
        </div>
      </section>
      <HomeFeatures />
    </>
  );
}
