'use client';
import { ProductTile } from '@/components/molecules/ProductTile';
import React from 'react';
import styles from './index.module.scss';
import { IHomePageProps } from '@/components/pages/HomePage/types';
import { Slider } from '@/components/molecules/Slider';
const { products__wrapper } = styles;

export const Home = ({ products }: IHomePageProps) => {
  return (
    <>
      <Slider
        images={['/homeSlider/slide1.png', '/homeSlider/slide2.png', '/homeSlider/slide3.jpg']}
      />
      <div className={products__wrapper}>
        {!products ? (
          <div>No products available</div>
        ) : (
          products.map((product, index) => <ProductTile key={index} productInfo={product} />)
        )}
      </div>
    </>
  );
};
