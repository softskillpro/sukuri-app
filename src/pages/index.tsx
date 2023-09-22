import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import MarketplaceHero from '@/components/MarketplaceHero';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewProducts from '@/components/NewProducts';
import Explorer from '@/components/Explorer';
import IntroSukuri from '@/components/IntroSukuri';
import BecomeAffiliate from '@/components/BecomeAffiliate';
import { MarketplaceContainer } from '@/styles/home';

// TODO: check if there's a list of categories that should be passed to component
// for now, hardcoded strings used
// const categories = [
//   { name: 'utility', image: '/images/v2/recommend.png', count: 50 },
//   { name: 'gaming', image: '/images/v2/recommend.png', count: 50 },
//   { name: 'content', image: '/images/v2/recommend.png' },
//   { name: 'dao', image: '/images/v2/recommend.png', count: 50 },
//   { name: 'alpha', image: '/images/v2/recommend.png' },
// ];

// import mock from '@/utils/mock';

const Marketplace = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MarketplaceContainer>
      <MarketplaceHero />

      <FeaturedProducts products={products} />

      <NewProducts products={products} />

      <Explorer />

      <IntroSukuri />

      <BecomeAffiliate />
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
