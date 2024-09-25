'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card"

type Genre = 'Action and adventure' | 'Anime' | 'Comedy' | 'Documentary' | 'Drama' | 'Horror' | 'Kids' | 'Mystery and thrillers' | 'Romance';

interface GenreCardProps {
  genre: Genre;
  imageUrl: string;
}

const genreImages: Record<Genre, string> = {
  'Action and adventure': 'https://cdnuploads.aa.com.tr/uploads/Contents/2024/07/29/thumbs_b_c_8b15990eaf301e14ed598c9c6e5a39d2.jpg?v=194744',
  'Anime': 'https://wallpapercave.com/wp/wp5342493.jpg',
  'Comedy': 'https://wallpapercave.com/wp/wp5033829.jpg',
  'Documentary': 'https://i.pinimg.com/736x/28/0b/e0/280be0ef212bf44bc796b59e8b9df8ca.jpg',
  'Drama': 'https://rukminim2.flixcart.com/image/850/1000/kzsqykw0/poster/w/a/y/small-it-ok-not-to-be-seo-yea-ji-and-kim-soo-hyun-korean-drama-original-imagbq933z6jqums.jpeg?q=90&crop=false',
  'Horror': 'https://wallpapercave.com/wp/wp1994790.jpg',
  'Kids': 'https://wallpapercave.com/wp/wp2739947.jpg',
  'Mystery and thrillers': 'https://wallpapercave.com/wp/wp7172825.jpg',
  'Romance': 'https://wallpapercave.com/wp/wp5529917.jpg',
};

const GenreCard: React.FC<GenreCardProps> = ({ genre, imageUrl }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="w-full aspect-[16/9]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full h-full relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <CardContent className="p-0 h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${imageUrl}')`
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-sm font-semibold text-center px-2">{genre}</h2>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Genres: React.FC = () => {
  const genres: Genre[] = [
    'Action and adventure', 'Anime', 'Comedy', 'Documentary', 'Drama',
    'Horror', 'Kids', 'Mystery and thrillers', 'Romance'
  ];

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2">
        {genres.map((genre) => (
          <GenreCard key={genre} genre={genre} imageUrl={genreImages[genre]} />
        ))}
      </div>
    </div>
  );
};

export default Genres;