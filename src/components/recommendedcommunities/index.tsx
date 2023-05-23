import Typography from '@mui/material/Typography';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import MultiCarousel from '@/components/multicarousel';
import { Layout1, Layout2, Layout3 } from '@/components/common/PageLayout';
import mock from '@/utils/mock';

const RecommendedCommunities = () => {
  return (
    <Layout3>
      <Layout2>
        <HorizontalDivider />
        <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
          Recommended Communities
        </Typography>
      </Layout2>

      <Layout1>
        <MultiCarousel nfts={mock} />
      </Layout1>
    </Layout3>
  );
};

export default RecommendedCommunities;
