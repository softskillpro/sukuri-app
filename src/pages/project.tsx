import Image from 'next/image';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Gallery from '@/components/Gallery';
import ProjectAbout from '@/components/ProjectAbout';
import { ProjectContainer } from '@/styles/project';
import Subscription from '@/components/Subscription';
import RecommendedCommunities from '@/components/recommendedcommunities';
import { Layout4 } from '@/components/common/PageLayout';
import mock from '@/utils/mock';

const Project = () => {
  const matches = useMediaQuery('(min-width:900px)');

  const nft = mock[0];

  if (!nft) return null;

  return (
    <ProjectContainer>
      <Layout4>
        <Typography
          variant={matches ? 'h3' : 'custom3'}
          color='text.secondary'
          textAlign='center'
          mb={2.5}
        >
          {nft.short_description}
        </Typography>
      </Layout4>

      <Image
        src={nft.large_image}
        width={1000}
        height={400}
        className='project-image'
        alt='Project Image'
      />

      <Layout4>
        <Typography
          variant='subtitle2'
          color='black.main'
          textAlign='center'
          mb={2.5}
        >
          {nft.long_description}
        </Typography>
      </Layout4>

      <Gallery />

      <ProjectAbout nft={nft} />

      <Subscription nft={nft} />

      <RecommendedCommunities />
    </ProjectContainer>
  );
};

export default Project;
