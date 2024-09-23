export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Multiflix",
  description:
    "A beautifully crafted website offering free access to anime, dramas and movies. Developed using Next.js and shadcn/ui.",
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
