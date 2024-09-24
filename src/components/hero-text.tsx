'use client';

import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

const blurInVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: (custom: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: custom * 0.2
    }
  })
};

const useAnimateOnView = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return { ref, controls };
};

const HeroText = () => {
  const { ref, controls } = useAnimateOnView();

  return (
    <section ref={ref} className="flex h-[60vh] items-center md:h-[50vh]">
      <div className="mx-auto flex w-4/5 flex-col items-center justify-center space-y-4 text-center">
        <AnimatedGradientText>
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial="hidden"
            animate={controls}
            variants={blurInVariants}
            custom={0}
          >
            Explore <span className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}>movies,</span> tv series, and <span className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ff8040] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}>animes!</span>
          </motion.h1>
        </AnimatedGradientText>
        <motion.p
          className="text-md leading-6 text-muted-foreground"
          initial="hidden"
          animate={controls}
          variants={blurInVariants}
          custom={1}
        >
          Multiflix is a streaming platform for those who enjoy relaxing and binge-watching their favorite movies, series, and more.
        </motion.p>
        <motion.div
          className="flex gap-2"
          initial="hidden"
          animate={controls}
          variants={blurInVariants}
          custom={2}
        >
          <Button>
            <Link href={`/auth/register`}>
              Sign up
            </Link>
          </Button>
          <Link href={`/changelog`}>
            <Button variant="outline">Changelog</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroText;