import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageLayout from '@/components/common/PageLayout'
import LogoIcon from '@/components/svgs/LogoIcon'
import TodaysPick from '@/components/todayspick'
import RecommendedCommunities from '@/components/recommendedcommunities'
import { MarketplaceContainer } from '@/styles/marketplace'

const Marketplace = () => {
  return (
    <MarketplaceContainer>
      <PageLayout>
        <LogoIcon
          fill='#FFC0CB'
          sx={{ fontSize: 440 }}
          className='marketplace-flower'
        />

        <Grid container className='marketplace-grid-wrapper'>
          <Grid item xs={12} lg={5}>
            <Typography variant='h5'>
              Find <span style={{ color: '#F88497' }}>600+</span> Communities To
              Join
            </Typography>
            <Typography variant='h5'>
              Earn <span style={{ color: '#F88497' }}>5% APY</span>
            </Typography>
            <Typography variant='h5'>
              Over <span style={{ color: '#F88497' }}>23M</span> Total Value
              Locked
            </Typography>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Typography variant='h1' color='text.secondary' textAlign='right'>
              Sukuri <br />
              Marketplace
            </Typography>
          </Grid>
        </Grid>

        <TodaysPick />

        <RecommendedCommunities />
      </PageLayout>
    </MarketplaceContainer>
  )
}

export default Marketplace
