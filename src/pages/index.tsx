import Link from 'next/link';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Typography from '@mui/material/Typography';
import MarketplaceHero from '@/components/MarketplaceHero';
import { MarketplaceContainer } from '@/styles/home';

// TODO: check if there's a list of categories that should be passed to component
// for now, hardcoded strings used
const categories = [
  { name: 'utility', image: '/images/v2/recommend.png', count: 50 },
  { name: 'gaming', image: '/images/v2/recommend.png', count: 50 },
  { name: 'content', image: '/images/v2/recommend.png' },
  { name: 'dao', image: '/images/v2/recommend.png', count: 50 },
  { name: 'alpha', image: '/images/v2/recommend.png' },
];

// import mock from '@/utils/mock';

const Marketplace = ({
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // TODO: mock trending data
  const trendingProject = Array.from(projects?.slice(0, 1));

  // TODO: mock top Projects data
  const topProjects = Array.from(projects?.slice(0, 3));

  return (
    <MarketplaceContainer>
      <MarketplaceHero />
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
  const projects = await res.json();
  return { props: { projects } };
};
