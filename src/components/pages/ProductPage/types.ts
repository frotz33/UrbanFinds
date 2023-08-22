import { IFetchedProduct } from '@/api/FakeStoreApi/types';

export interface IProductPageProps {
  id: string;
  products: IFetchedProduct[];
}
