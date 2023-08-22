import { IFetchedProduct } from '@/api/FakeStoreApi/types';

export interface ICategoryPageProps {
  category: string;
  products: IFetchedProduct[];
}
