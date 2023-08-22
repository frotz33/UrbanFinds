'use client';
import GrayStar from '../GrayStar';
import YellowStar from '../YellowStar';
import { IRatingProps } from './types';

export const Rating = ({ rating, className }: IRatingProps) => {
  const stars = Array(5).fill(null);

  const pickRightStars = () => {
    const scoreStars = [...stars];
    const updatedScoreStars = scoreStars.map((_, index) => {
      if (index + 1 > rating) return <GrayStar key={index} className={className} />;
      return <YellowStar key={index} className={className} />;
    });
    return updatedScoreStars;
  };

  return <>{pickRightStars()}</>;
};
