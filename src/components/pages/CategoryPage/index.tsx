import { Category } from '@/components/organisms/Category';
import React from 'react';
import { ICategoryPageProps } from './types';

export const CategoryPage = ({ category, products }: ICategoryPageProps) => {
  return (
    <>
      <Category category={decodeURIComponent(category)} products={products} />
    </>
  );
};
