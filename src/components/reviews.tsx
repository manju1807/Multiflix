'use client';
import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from './ui/button';

const AnimatedNumber = ({ value }: { value: number }) => {
  const springValue = useSpring(0, { duration: 2000 });
  const displayValue = useTransform(springValue, Math.round);

  React.useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
};

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const totalReviews = 652;
  const overallRating = 3.5;
  const ratingDistribution = [
    { stars: 5, count: 483 },
    { stars: 4, count: 34 },
    { stars: 3, count: 18 },
    { stars: 2, count: 0 },
    { stars: 1, count: 69 },
  ];

  return (
    <div ref={ref} className='w-full h-full'>
      <AnimatePresence>
        {isInView && (
          <motion.div
            key="reviews"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-background w-full h-full flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2"><AnimatedNumber value={totalReviews} /> <span className='text-sm'>Overall reviews</span></h3>
              <div className="flex items-center mb-4">
                <span className="text-lg font-semibold mr-2">{overallRating.toFixed(1)}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(overallRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {ratingDistribution.map(({ stars, count }) => (
                <motion.div
                  key={stars}
                  className="flex items-center"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: stars * 0.1 }}
                >
                  <span className="w-8 text-sm">{stars}</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2 ml-2">
                    <motion.div
                      className="bg-yellow-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(count / totalReviews) * 100}%` }}
                      transition={{ duration: 0.5, delay: stars * 0.1 }}
                    />
                  </div>
                  <span className="w-8 text-sm text-right ml-2">{count}</span>
                </motion.div>
              ))}
            </div>
            <Button variant='default' className="mt-4 px-4 py-2 text-sm transition-colors">
              Write a review
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reviews;