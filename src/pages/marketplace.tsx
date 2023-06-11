import Image from 'next/image';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Layout1 } from '@/components/common/PageLayout';
import TodaysPick from '@/components/todayspick';
import RecommendedCommunities from '@/components/recommendedcommunities';
import RisingProjects from '@/components/risingprojects';
import AboutSukuri from '@/components/aboutsukuri';
import { MarketplaceContainer } from '@/styles/marketplace';

const Marketplace = ({
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const matches = useMediaQuery('(min-width:900px)');
  const matches500 = useMediaQuery('(min-width:500px)');

  return (
    <MarketplaceContainer>
      <Image
        src='/images/marketplace.png'
        width={596}
        height={508}
        priority
        alt='Marketplace'
        className='marketplace-flower'
      />

      <Layout1>
        <Grid container spacing={2} className='marketplace-grid-wrapper'>
          <Grid item xs={12} lg={5}>
            <Typography variant={matches ? 'h5' : 'subtitle1'} mb={1}>
              Find <span style={{ color: '#F88497' }}>600+</span> Communities To
              Join
            </Typography>
            <Typography variant={matches ? 'h5' : 'subtitle1'} mb={1}>
              Earn <span style={{ color: '#F88497' }}>5% APY</span>
            </Typography>
            <Typography variant={matches ? 'h5' : 'subtitle1'}>
              Over <span style={{ color: '#F88497' }}>23M</span> Total Value
              Locked
            </Typography>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Typography
              variant={matches ? 'h1' : matches500 ? 'h3' : 'custom3'}
              color='text.secondary'
              textAlign='right'
              component='div'
            >
              Sukuri <br />
              Marketplace
            </Typography>
          </Grid>
        </Grid>
      </Layout1>

      {projects && projects.length > 0 && <TodaysPick project={projects[0]} />}

      <RecommendedCommunities projects={projects} />

      <RisingProjects projects={projects} />

      <AboutSukuri />
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
