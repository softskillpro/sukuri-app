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

import { MarketplaceContainer, MarketplaceIntro, MarketplaceContent, CategoryList, TrendingSection, TopProjectsSection, CategorySection, CarouselContainer, TopProjectsList, TopProjectEntry, MembershipCardWrapper, TopProjectInfoWrapper  } from '@/styles/marketplace';
import MembershipCardGroup from '@/components/V2/Common/MembershipCardGroup';
import { StyledButton } from '@/components/V2/Common/StyledButton';

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
        <input placeholder='SEARCH'></input>
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
        <TrendingSection>
          <Typography variant="h3" className='section-title'>
            Trending
          </Typography>
          <StyledHr />
            {
            trendingProject.map((project, id) => ( // MultiCarousel is broken with dynamically sized content as far as I can tell.
              <div
                key={`project-${id}`}
                className='product-carousel-img-container'
              >
                <MarketplaceCarouselCard key={id} name={project.name} category='gaming' membershipPrice={'$5'} largeImageURL={project.large_image} />
              </div>
            ))
            }
        </TrendingSection>
        <TopProjectsSection>
          <Typography variant="h3" className='section-title'>
            Top Projects
          </Typography>
          <StyledHr />
          <TopProjectsList>
            {
              topProjects.map((project, id) => {
                return(
                  <TopProjectEntry className="project-details" id={`topProj-${id}`}>
                    <TopProjectInfoWrapper>
                      <Image src={project.thumbnail_image} alt={project.name} fill={true} className='top-proj-bg'/>
                      <Typography variant="productTitleSmall" className='project-name'>
                        {project.name}
                      </Typography>
                      <StyledButton className='project-category'>
                        gaming
                      </StyledButton>
                    </TopProjectInfoWrapper>
                    <MembershipCardWrapper>
                      <MembershipCardGroup />
                    </MembershipCardWrapper>
                  </TopProjectEntry>
                )
              })
            }
          </TopProjectsList>
        </TopProjectsSection>
        <CategorySection>
          <Typography variant="h3" className='section-title'>
            Categories
          </Typography>
          <StyledHr />
          <div className="category-tile-grid">
            {
              categories ? 
              categories.map(({name, image, count}, i) => {
                
                return(
                  <CategoryTile key={i}
                    name={name}
                    image={image ? image : ''}
                    count={count ? count : null}
                  />
                )
              })
              : ''
            }
          </div>
        </CategorySection>
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
