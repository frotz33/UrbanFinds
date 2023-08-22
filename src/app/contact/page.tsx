import { StoreApiHandler } from '@/api/FakeStoreApi/StoreApiHandler';
import { LayoutWithNavbar } from '@/components/organisms/LayoutWithNavbar';
import { ContactPage } from '@/components/pages/ContactPage';
import React from 'react';

const Page = async () => {
  const products = await StoreApiHandler.getProducts();
  return (
    <LayoutWithNavbar products={products}>
      <ContactPage />;
    </LayoutWithNavbar>
  );
};
export default Page;
