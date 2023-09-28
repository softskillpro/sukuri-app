import { useCallback, useState } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import SubscriptionHero from '@/components/SubscriptionHero';
import SubscriptionManagement from '@/components/SubscriptionManagement';
import ActiveSubscriptions from '@/components/ActiveSubscriptions';
import LikedProducts from '@/components/LikedProducts';
import Explorer from '@/components/Explorer';
import { SubscriptionContainer } from '@/styles/subscription';
import { categoriesOfSubscription } from '@/constants';

const Subscription = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [activeCategory, setActiveCategory] = useState(
    categoriesOfSubscription[4]?.value || 'view-all',
  );

  console.log(search);

  const handleSearch = useCallback((_search?: string) => {
    setSearch(_search);
  }, []);

  const handleCategoryChange = useCallback((_category: string) => {
    setActiveCategory(_category);
  }, []);

  return (
    <SubscriptionContainer>
      <SubscriptionHero />

      <SubscriptionManagement
        activeCategory={activeCategory}
        handleSearch={handleSearch}
        handleCategoryChange={handleCategoryChange}
      />

      <ActiveSubscriptions products={products} />

      <LikedProducts title='Products you might like' products={products} />

      <Explorer />
    </SubscriptionContainer>
  );
};

export default Subscription;

export const getServerSideProps: GetServerSideProps = async () => {
  const page = 0;
  const pageSize = 10;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/featured?page=${page}&pageSize=${pageSize}`,
  );
  const products = await res.json();
  return { props: { products } };
};
