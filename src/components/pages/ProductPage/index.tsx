'use client';
import React from 'react';
import { IProductPageProps } from './types';
import { Product } from '@/components/organisms/Product';

export const ProductPage = ({ products, id }: IProductPageProps) => {
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) return;
  return (
    <>
      <Product productInfo={product} />
    </>
  );
};
