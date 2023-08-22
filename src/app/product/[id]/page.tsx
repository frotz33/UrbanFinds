import { StoreApiHandler } from '@/api/FakeStoreApi/StoreApiHandler';
import { LayoutWithNavbar } from '@/components/organisms/LayoutWithNavbar';
import { ProductPage } from '@/components/pages/ProductPage';
import React from 'react';

interface IPageProps {
  params: { id: string };
}
const Page = async ({ params: { id } }: IPageProps) => {
  const products = await StoreApiHandler.getProducts();
  return (
    <LayoutWithNavbar products={products}>
      <ProductPage products={products} id={id} />
    </LayoutWithNavbar>
  );
};
export default Page;
