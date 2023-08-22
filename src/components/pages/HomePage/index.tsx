'use client';
import { Home } from '@/components/organisms/Home';
import React from 'react';
import { IHomePageProps } from './types';

export const HomePage = ({ products }: IHomePageProps) => {
  return (
    <>
      <Home products={products} />
    </>
  );
};
