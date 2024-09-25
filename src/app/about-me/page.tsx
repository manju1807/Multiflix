import React from 'react';
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Cover from '@/public/cover.png';
import DP from '@/public/DP.png';
import Image from 'next/image';
import { Icons } from '@/components/common/icons';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site-config';
import Link from 'next/link';

const data = [
  'Software Development Engineer',
  'Full Stack Developer',
  'React.js Developer',
  'Next.js Developer',
  'JavaScript Developer'
];

const AboutPage = ({ embed = false }) => {
  return (
    <div>
      <div className={cn("mx-auto max-w-6xl pt-8 md:pt-0", embed ? "p-0" : "md:pt-4")}>
        <div
          className={cn(
            "h-[12dvh] w-full overflow-hidden border bg-muted shadow md:rounded-lg lg:h-[30dvh]",
            embed ? "max-h-[20vh] md:max-h-[50vh]" : undefined
          )}
        >
          <Image
            src={Cover}
            alt="Cover Image"
            className="h-full w-full object-cover md:object-cover brightness-100"
            data-testid="banner"
          />
        </div>
        <div className="mx-auto my-8 max-w-4xl space-y-8 p-4 md:space-y-12 md:p-0">
          <main className="flex flex-col gap-4 md:flex-row">
            <aside className="-mt-24 w-full space-y-2 md:-mt-32 md:w-1/3 mr-12">
              <div className="relative aspect-[2/2] w-1/2 mx-auto md:w-full overflow-hidden rounded-full border bg-muted shadow">
                <Image
                  fill
                  src={DP}
                  alt="Manjunath R"
                  className="aspect-poster"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </aside>
            <article className="flex w-full flex-col gap-2 md:w-2/3">
              <span className="text-xs text-muted-foreground">
                September 21st, 2024
              </span>
              <h1 className="text-lg font-bold md:text-4xl">Manjunath R</h1>
              <div className="flex flex-wrap items-center gap-2">
                {data.map((role, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="whitespace-nowrap"
                  >
                    {role}
                  </Badge>
                ))}
                <Separator orientation="vertical" className="h-6" />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge>Experience : 2 yrs</Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      My Experience
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-xs leading-5 text-muted-foreground md:text-sm md:leading-6">
                Full Stack Developer specializing in JavaScript, React, and Next.js. Experienced in frontend and backend, focused on creating efficient, responsive web applications. Passionate about emerging tech and tackling complex challenges in web development.
              </p>
            </article>
            <article className='hidden md:block'>
              <div className="flex flex-1 items-center space-x-2 justify-end">
                <nav className="flex items-center space-x-2">
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "w-9 px-0 rounded-full"
                      )}
                    >
                      <Icons.gitHub className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </div>
                  </Link>
                  <Link
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "w-9 px-0 rounded-full"
                      )}
                    >
                      <Icons.twitter className="h-5 w-5 fill-current" />
                      <span className="sr-only">Twitter</span>
                    </div>
                  </Link>
                </nav>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;