import { Fragment } from 'react';
import { type NextPage } from 'next';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HomeContainer } from '@/styles/home';
import LogoIcon from '@/components/svgs/LogoIcon';
import ConnectWallet from '@/components/ConnectWallet';
import ProjectIntro from '@/components/common/ProjectIntro';
import { HorizontalDivider } from '@/components/common/StyledDivider';

const contents = [
  'Supercharging subscriptions on the blockchain.',
  'More feature summaries to appear (animated slide and fade in) as the user scrolls down.',
  'Something about being better than everyone else.',
];

const Home: NextPage = () => {
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <HomeContainer>
      <LogoIcon
        fill='rgba(255, 192, 203, 0.3)'
        sx={{ fontSize: 950 }}
        className='home-logo'
      />

      <Grid container spacing={3} className='signup-section'>
        <Grid item xs={12} md={6}>
          <Typography
            variant='custom7'
            color='white.main'
            textAlign='right'
            component='div'
          >
            Supercharging subscriptions <br />
            on the blockchain.
          </Typography>
          <Typography variant='h1' color='primary.main' component='div'>
            Sukuri
          </Typography>
          <Typography variant='custom5' color='text1.light'>
            Protocol
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ConnectWallet />
        </Grid>
      </Grid>

      <HorizontalDivider
        sx={{
          borderBottom: (theme) => `0.5px solid ${theme.palette.border.main}`,
        }}
      />

      <section className='project-intro-wrapper'>
        {[0, 1, 2, 3].map((id) => (
          <Fragment key={`project-${id}`}>
            <Grid container spacing={5}>
              <Grid item xs={12} lg={6}>
                <ProjectIntro />
              </Grid>
            </Grid>
            {id < contents.length && (
              <Grid
                container
                spacing={5}
                sx={{ marginBottom: !matches ? 5 : 0 }}
              >
                <Grid item xs={12} lg={6} />
                <Grid item xs={12} lg={6}>
                  <Typography
                    variant='h4'
                    fontWeight={600}
                    color='primary.main'
                  >
                    {contents[id]}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Fragment>
        ))}
      </section>
    </HomeContainer>
  );
};

export default Home;
