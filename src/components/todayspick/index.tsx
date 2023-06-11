import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import { ContainedButton } from '@/components/common/StyledButton';
import FlexBox from '@/components/common/FlexBox';
import { Layout1, Layout2, Layout3 } from '@/components/common/PageLayout';
import type { NFTType } from '@/interface/Nft.interface';

interface TodaysPickProps {
  project: NFTType;
}

const TodaysPick = ({ project }: TodaysPickProps) => {
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
              {project.name}
            </Typography>

            <Typography variant='custom1' color='black.main'>
              {project?.short_description}
            </Typography>

            <Link
              href={`/project/${project.id}`}
              style={{ textDecoration: 'none' }}
            >
              <FlexBox sx={{ justifyContent: 'flex-end', mt: 3.5 }}>
                <ContainedButton>See More</ContainedButton>
              </FlexBox>
            </Link>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Image
              src={
                project.large_image.includes('https://example.com')
                  ? '/images/pick.png'
                  : project?.large_image
              }
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
