import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import PageLayout from '@/components/common/PageLayout'
import LogoIcon from '@/components/svgs/LogoIcon'
import TodaysPick from '@/components/todayspick'
import RecommendedCommunities from '@/components/recommendedcommunities'
import RisingProjects from '@/components/risingprojects'
import AboutSukuri from '@/components/aboutsukuri'
import { MarketplaceContainer } from '@/styles/marketplace'

const Marketplace = () => {
  const matches = useMediaQuery('(min-width:900px)')
  const matches500 = useMediaQuery('(min-width:500px)')

  return (
    <MarketplaceContainer>
      <PageLayout>
        <LogoIcon
          fill='#FFC0CB'
          sx={{ fontSize: 670 }}
          className='marketplace-flower'
        />

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

        <TodaysPick />

        <RecommendedCommunities />

        <RisingProjects />

        <AboutSukuri />
      </PageLayout>
    </MarketplaceContainer>
  )
}

export default Marketplace
