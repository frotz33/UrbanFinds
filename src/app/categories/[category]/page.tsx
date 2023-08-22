import { StoreApiHandler } from '@/api/FakeStoreApi/StoreApiHandler';
import { LayoutWithNavbar } from '@/components/organisms/LayoutWithNavbar';
import { CategoryPage } from '@/components/pages/CategoryPage';
import React from 'react';
interface IPageProps {
  params: { category: string };
}

const Page = async ({ params: { category } }: IPageProps) => {
  const products = await StoreApiHandler.getProducts();
  return (
    <LayoutWithNavbar products={products}>
      <CategoryPage category={decodeURIComponent(category)} products={products} />
    </LayoutWithNavbar>
  );
};

export default Page;
