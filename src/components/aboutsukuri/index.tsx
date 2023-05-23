import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import { Layout1, Layout2, Layout3 } from '@/components/common/PageLayout';

const AboutSukuri = () => {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <Layout3>
      <Layout2>
        <HorizontalDivider />
        <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
          More about Sukuri
        </Typography>
      </Layout2>

      <Layout1
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          variant='h5'
          color='text.secondary'
          textAlign='center'
          mb={4.25}
          sx={{ width: matches ? '60%' : '93%' }}
        >
          The most advanced onchain solution for recurring payment
          infrastructure.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              variant='body2'
              color='text.secondary'
              textAlign={matches ? 'right' : 'left'}
            >
              Software and content creators can benefit from this new
              subscription model while allowing their users to have free will
              over these new tokenized assets.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='body2' color='text.secondary' textAlign='left'>
              Our SmartAccount system allows you to interact once and have
              access to the entire protocol. Pay your subscriptions, earn yield,
              and benefit from gasless transactions thanks to ERC-4337.
            </Typography>
          </Grid>
        </Grid>
      </Layout1>
    </Layout3>
  );
};

export default AboutSukuri;
