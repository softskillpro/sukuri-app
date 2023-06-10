import Typography from '@mui/material/Typography';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import { Layout2 } from '@/components/common/PageLayout';
import type { NFTType } from '@/interface/Nft.interface';

interface ProjectAboutProps {
  nft?: NFTType;
}

const ProjectAbout = ({ nft }: ProjectAboutProps) => {
  return (
    <Layout2>
      <HorizontalDivider />

      <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
        About
      </Typography>

      <Typography variant='caption' textAlign='left' component='div' mb={6.25}>
        {nft?.long_description}
      </Typography>
    </Layout2>
  );
};

export default ProjectAbout;
