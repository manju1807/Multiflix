'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card"

type Genre =
  | 'Action and adventure'
  | 'Anime'
  | 'Comedy'
  | 'Documentary'
  | 'Drama'
  | 'Horror'
  | 'Kids'
  | 'Mystery and thrillers'
  | 'Romance';

interface GenreCardProps {
  genre: Genre;
}

const GenreCard: React.FC<GenreCardProps> = ({ genre }) => {
  return (
    <motion.div className="w-52 h-28">
      <Card className="w-full h-full relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <CardContent className="p-0 h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://m.media-amazon.com/images/S/pv-target-images/cd041ddf6841d6f03d38fe96a739a8cee7320f023b486303f6cd8e98beba2d14._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX720_FMjpg_.jpg')`
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-sm font-semibold text-center">{genre}</h2>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Genres: React.FC = () => {
  const genres: Genre[] = [
    'Action and adventure',
    'Anime',
    'Comedy',
    'Documentary',
    'Drama',
    'Horror',
    'Kids',
    'Mystery and thrillers',
    'Romance'
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 w-full h-full justif-center items-center">
      {genres.map((genre) => (
        <GenreCard key={genre} genre={genre} />
      ))}
    </div>
  );
};

export default Genres;