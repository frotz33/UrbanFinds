'use client';
import { ProductTile } from '@/components/molecules/ProductTile';
import React from 'react';
import styles from './index.module.scss';
import { IHomePageProps } from '@/components/pages/HomePage/types';
const { products__wrapper } = styles;

export const Home = ({ products }: IHomePageProps) => {
  return (
    <div className={products__wrapper}>
      {!products ? (
        <div>No products available</div>
      ) : (
        products.map((product, index) => <ProductTile key={index} productInfo={product} />)
      )}
    </div>
  );
};
