import { StoreApiHandler } from '@/api/FakeStoreApi/StoreApiHandler';
import { LayoutWithNavbar } from '@/components/organisms/LayoutWithNavbar';
import { HomePage } from '@/components/pages/HomePage';

export default async function Home() {
  const products = await StoreApiHandler.getProducts();
  return (
    <LayoutWithNavbar products={products}>
      <HomePage products={products} />;
    </LayoutWithNavbar>
  );
}
