import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";
import { Icons } from "@/components/common/icons";

const Section = {
  Root: (props: PropsWithChildren) => <div className="space-y-1" {...props} />,
  Label: (props: PropsWithChildren) => (
    <h4 className="text-md font-semibold" {...props} />
  ),
  List: (props: PropsWithChildren) => (
    <ul className="space-y-1 text-sm leading-7" {...props} />
  ),
  Item: ({
    disabled,
    className,
    ...props
  }: PropsWithChildren & ComponentProps<"li"> & { disabled?: boolean }) => (
    <li
      className={cn(
        className,
        disabled &&
        "white-sp cursor-not-allowed select-none text-muted-foreground"
      )}
      {...props}
    />
  ),
};

export const Footer = () => {
  return (
    <footer className="px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 border-t py-12 lg:grid-cols-5 lg:gap-4">
        <div className="col-span-3 flex flex-col justify-between space-y-2">
          <div className="space-y-1">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icons.multiflix_logo className="h-6 w-6" />
                <h2 className="text-2xl font-bold italic">multiflix</h2>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Created with &hearts; by Manjunath R</p>
          </div>
          <div>
            <Link
              href="https://www.themoviedb.org/"
              className="text-xs text-muted-foreground"
              target="blank"
            >
              Data provided by TMDB API.
            </Link>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-4">
          <Section.Root>
            <Section.Label>Product</Section.Label>
            <Section.List>
              <Section.Item>
                <Link href={`/#features`}>Features</Link>
              </Section.Item>

              <Section.Item>
                <Link href={`https://buymeacoffee.com/`}>Support</Link>
              </Section.Item>

              <Section.Item disabled>Download</Section.Item>
            </Section.List>
          </Section.Root>

          <Section.Root>
            <Section.Label>Company</Section.Label>

            <Section.List>
              <Section.Item disabled>About Us</Section.Item>
              <Section.Item disabled>Brand</Section.Item>
            </Section.List>
          </Section.Root>

          <Section.Root>
            <Section.Label>Developers</Section.Label>

            <Section.List>
              <Section.Item>
                <Link href="https://github.com/manju1807">
                  Github
                </Link>
              </Section.Item>
              <Section.Item>
                <Link href={`/about-me`}>About me</Link>
              </Section.Item>
            </Section.List>
          </Section.Root>
        </div>
      </div>
    </footer>
  );
};
