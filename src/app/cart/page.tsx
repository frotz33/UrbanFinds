import React from 'react';
import { CartPage } from '@/components/pages/CartPage';
import { StoreApiHandler } from '@/api/FakeStoreApi/StoreApiHandler';
import { LayoutWithNavbar } from '@/components/organisms/LayoutWithNavbar';

const Page = async () => {
  const products = await StoreApiHandler.getProducts();
  return (
    <LayoutWithNavbar products={products}>
      <CartPage />;
    </LayoutWithNavbar>
  );
};

export default Page;
