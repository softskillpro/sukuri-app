import Link from 'next/link';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Typography from '@mui/material/Typography';
import AboutSukuri from '@/components/v2/AboutSukuri';
import TwitterCTA from '@/components/v2/TwitterCta';
import { StyledHr } from '@/components/v2/Common/Splitter/styles';
import { CategoryTileProps } from '@/components/v2/Common/CategoryTile';

import {
  MarketplaceContainer,
  MarketplaceIntro,
  MarketplaceContent,
  CategoryList,
} from '@/styles/marketplace';
import TrendingSection from '@/components/v2/TrendingSection';
import CategorySection from '@/components/v2/CategorySection';
import TopProjectsSection from '@/components/v2/TopProjectsSection';
import { NFTType } from '@/interface/Nft.interface';

// TODO: check if there's a list of categories that should be passed to component
// for now, hardcoded strings used
const categories: CategoryTileProps[] = [
  { name: 'utility', image: '/images/v2/recommend.png', count: 50 },
  { name: 'gaming', image: '/images/v2/recommend.png' },
  { name: 'content', image: '/images/v2/recommend.png' },
  { name: 'dao', image: '/images/v2/recommend.png' },
  { name: 'alpha', image: '/images/v2/recommend.png' },
];

const Marketplace = ({
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // TODO: mock trending data
  const trendingProject: NFTType[] = Array.from(projects.slice(0, 1));

  // TODO: mock top Projects data
  const topProjects: NFTType[] = Array.from(projects.slice(0, 3));

  return (
    <MarketplaceContainer>
      <MarketplaceIntro>
        <Typography variant='wordmarkMarketplace' align='center'>
          SUKURI <span style={{ fontWeight: 400 }}>PROTOCOL</span>
        </Typography>
        <input placeholder='SEARCH' className='marketplace-search' />
        <Typography
          variant='subHeading'
          align='center'
          sx={{ lineHeight: '120%' }}
        >
          Explore new ways to buy, sell and create subscriptions.
          <br />
          All on the blockchain.
        </Typography>
        <StyledHr />
        <CategoryList>
          {categories.map((category, id) => (
            <Link href='/' key={id}>
              <Typography variant='labelMd' align='center' key={id}>
                {category.name}
              </Typography>
            </Link>
          ))}
        </CategoryList>
      </MarketplaceIntro>

      <MarketplaceContent>
        <TrendingSection trendingProject={trendingProject} />
        <TopProjectsSection topProjects={topProjects} />
        <CategorySection categories={categories} />
        <AboutSukuri />
        <TwitterCTA />
      </MarketplaceContent>
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
