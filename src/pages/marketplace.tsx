import Image from 'next/image';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Layout1 } from '@/components/common/PageLayout';
import TodaysPick from '@/components/todayspick';
import RecommendedCommunities from '@/components/recommendedcommunities';
import RisingProjects from '@/components/risingprojects';
import AboutSukuri from '@/components/V2/AboutSukuri';
import TwitterCTA from '@/components/V2/TwitterCTA';
import { CategoryTile } from '@/components/V2/Common/CategoryTile';
import { DarkGlassWrapper } from '@/components/V2/Common/DarkGlassWrapper';
import { Input } from '@mui/material';
import { StyledHr } from '@/components/V2/Common/Splitter/styles';
import { CategoryTileProps } from '@/components/V2/Common/CategoryTile';
import { Carousel } from 'react-responsive-carousel';
import MultiCarousel from '@/components/V2/Common/MultiCarousel';
import mock from '@/utils/mock';
import { MarketplaceCarouselCard } from '@/components/V2/Common/MarketplaceCarouselCard';
import { NFTType } from '@/interface/Nft.interface';
import formatUnits from '@/utils/formatUnits';

import { MarketplaceContainer, MarketplaceIntro, MarketplaceContent, CategoryList  } from '@/styles/marketplace';
import MembershipCardGroup from '@/components/V2/Common/MembershipCardGroup';
import { StyledButton } from '@/components/V2/Common/StyledButton';
import TrendingSection from '@/components/V2/TrendingSection';
import CategorySection from '@/components/V2/CategorySection';
import TopProjectsSection from '@/components/V2/TopProjectsSection';

// TODO: mock trending data
const trendingProject = Array.from(mock.slice(0,1));

// TODO: mock top Projects data
const topProjects = Array.from(mock.slice(0,3));

// TODO: check if there's a list of categories that should be passed to component
// for now, hardcoded strings used
const categories: CategoryTileProps[] = [{ name: 'utility', image: '/images/v2/recommend.png', count: 50 }, { name: 'gaming', image: '/images/v2/recommend.png' }, { name: 'content', image: '/images/v2/recommend.png' }, { name: 'dao', image: '/images/v2/recommend.png' }, { name: 'alpha', image: '/images/v2/recommend.png' }]

const Marketplace = ({
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const matches = useMediaQuery('(min-width:900px)');
  const matches500 = useMediaQuery('(min-width:500px)');

  return (
    <MarketplaceContainer>
      <MarketplaceIntro>
        <Typography variant="wordmarkMarketplace">
          SUKURI <span style={{ fontWeight: 400 }}>PROTOCOL</span>
        </Typography>
        <input placeholder='SEARCH' className='marketplace-search' />
        <Typography variant="subHeading" align='center' sx={{lineHeight: '120%'}}>
          Explore new ways to buy, sell and create subscriptions.<br/>All on the blockchain.
        </Typography>
        <StyledHr />
        <CategoryList>
          {
            categories.map((category, id) => (
              <a href="/" key={id}>
                <Typography variant="labelMd" align='center' key={id}>
                  {category.name}
                </Typography>
              </a>
              ))
          }
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
