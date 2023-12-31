'use client';
import { ProductTile } from '@/components/molecules/ProductTile';
import React from 'react';
import styles from './index.module.scss';
import { ICategoryProps } from './types';
const { products__wrapper, products__category } = styles;

export const Category = ({ category, products }: ICategoryProps) => {
  return (
    <>
      <div className={products__wrapper}>
        <h2 className={products__category}>{category}</h2>
        {products.map((product) => {
          if (product.category === category) {
            return <ProductTile key={product.id} productInfo={product} />;
          }
        })}
      </div>
    </>
  );
};
