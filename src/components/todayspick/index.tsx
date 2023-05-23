import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import { ContainedButton } from '@/components/common/StyledButton';
import FlexBox from '@/components/common/FlexBox';
import { Layout1, Layout2, Layout3 } from '@/components/common/PageLayout';

const TodaysPick = () => {
  return (
    <Layout3>
      <Layout2>
        <HorizontalDivider />
        <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
          Todays Pick
        </Typography>
      </Layout2>

      <Layout1>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Typography variant='h5' color='text.secondary' mb={3.5}>
              PepeDAO Gladiators
            </Typography>

            <Typography variant='custom1' color='black.main'>
              Pepe Gladiators is a thrilling game-fi alpha group that takes you
              on a wild adventure through ancient Rome. In this game, you play
              as a gladiator who must fight for survival in the brutal arenas of
              the Roman Empire.
            </Typography>

            <FlexBox sx={{ justifyContent: 'flex-end', mt: 3.5 }}>
              <ContainedButton>See More</ContainedButton>
            </FlexBox>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Image
              src='/images/pick.png'
              width={823}
              height={341}
              priority
              alt='Todays Pick'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid>
        </Grid>
      </Layout1>
    </Layout3>
  );
};

export default TodaysPick;
