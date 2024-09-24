'use client';

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from 'react';

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

const Headings = ({ heading, subheading }: { heading: string, subheading: string }) => {
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
  return (
    <div className="flex flex-col items-center space-y-2" ref={ref}>
      <motion.h2
        className="text-2xl font-bold"
        initial="hidden"
        animate={controls}
        variants={blurInVariants}
        custom={0}
      >
        {heading}
      </motion.h2>
      <motion.p
        className="w-3/4 md:w-2/3 text-center text-sm text-muted-foreground"
        initial="hidden"
        animate={controls}
        variants={blurInVariants}
        custom={1}
      >
        {subheading}
      </motion.p>
    </div>
  )
}

export default Headings;