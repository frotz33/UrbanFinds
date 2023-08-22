import { IFetchedProduct } from '@/api/FakeStoreApi/types';

export interface ICategoryProps {
  category: string;
  products: IFetchedProduct[];
}
