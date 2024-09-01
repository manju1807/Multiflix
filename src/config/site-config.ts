export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "EnjoyTown",
  description:
    "Beautifully designed website where you can watch anime, drama, movies and read mangas for free. Built with Next.JS and shadcn/ui.",
  mainNav: [
    {
      title: "Drama",
      href: "/drama",
    },
    {
      title: "Movie",
      href: "/movie",
    },
    {
      title: "Anime",
      href: "/anime",
    },
    {
      title: "Manga",
      href: "/manga",
    },
    {
      title: "TV",
      href: "/tv",
    },
  ],
  links: {
    twitter: "https://twitter.com/im_manju1807",
    github: "https://github.com/manju1807",
    multiflex: "/",
  },
};
