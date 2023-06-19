import Typography from '@mui/material/Typography';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import MultiCarousel from '@/components/multicarousel';
import { Layout1, Layout2, Layout3 } from '@/components/common/PageLayout';
import type { NFTType } from '@/interface/Nft.interface';

interface RecommendedCommunitiesProps {
  projects?: NFTType[];
}

const RecommendedCommunities = ({ projects }: RecommendedCommunitiesProps) => {
  return (
    <Layout3>
      <Layout2>
        <HorizontalDivider />
        <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
          Recommended Communities
        </Typography>
      </Layout2>

      <Layout1>
        {projects && projects.length > 0 && (
          <MultiCarousel projects={projects} />
        )}
      </Layout1>
    </Layout3>
  );
};

export default RecommendedCommunities;
