import { IFetchedProduct } from '@/api/FakeStoreApi/types';
import { ReactNode } from 'react';

export interface ILayoutWithNavbarProps {
  children: ReactNode;
  products: IFetchedProduct[];
}
