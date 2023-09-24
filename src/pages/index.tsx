import { useCallback, useState } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import MarketplaceHero from '@/components/MarketplaceHero';
import CategorySearch from '@/components/CategorySearch';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewProducts from '@/components/NewProducts';
import Explorer from '@/components/Explorer';
import IntroSukuri from '@/components/IntroSukuri';
import BecomeAffiliate from '@/components/BecomeAffiliate';
import Newsletter from '@/components/Newsletter';
import { MarketplaceContainer } from '@/styles/home';

const Marketplace = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  console.log(search);

  const handleSearch = useCallback((_search?: string) => {
    setSearch(_search);
  }, []);

  return (
    <MarketplaceContainer>
      <MarketplaceHero />

      <CategorySearch handleSearch={handleSearch} />

      <FeaturedProducts products={products} />

      <NewProducts products={products} />

      <Explorer />

      <IntroSukuri />

      <BecomeAffiliate />

      <Newsletter />
    </MarketplaceContainer>
  );
};

export default Marketplace;

export const getServerSideProps: GetServerSideProps = async () => {
  const page = 0;
  const pageSize = 10;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/featured?page=${page}&pageSize=${pageSize}`,
  );
  const products = await res.json();
  return { props: { products } };
};
