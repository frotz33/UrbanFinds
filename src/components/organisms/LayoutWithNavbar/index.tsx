import React from 'react';
import { ILayoutWithNavbarProps } from './types';
import { Navigation } from '@/components/molecules/Navigation';

export const LayoutWithNavbar = ({ children, products }: ILayoutWithNavbarProps) => {
  return (
    <>
      <Navigation products={products} />
      {children}
    </>
  );
};
