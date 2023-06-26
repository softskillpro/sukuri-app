import Image from 'next/image';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Gallery from '@/components/Gallery';
import ProjectAbout from '@/components/ProjectAbout';
import { ProjectContainer } from '@/styles/project';
import Subscription from '@/components/Subscription';
import RecommendedCommunities from '@/components/recommendedcommunities';
import { Layout4 } from '@/components/common/PageLayout';

const Project = ({
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    projects &&
    projects.length > 0 && (
      <ProjectContainer>
        <Layout4>
          <Typography
            variant={matches ? 'h3' : 'custom3'}
            color='text.secondary'
            textAlign='center'
            mb={2.5}
          >
            {projects[0].name}
          </Typography>
        </Layout4>

        <Image
          src={
            projects[0].large_image === 'https://example.com'
              ? 'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1'
              : projects[0].large_image
          }
          width={1000}
          height={400}
          priority
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
            {projects[0].short_description}
          </Typography>
        </Layout4>

        <Gallery />

        <ProjectAbout nft={projects[0]} />

        <Subscription project={projects[0]} />

        <RecommendedCommunities />
      </ProjectContainer>
    )
  );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async () => {
  const page = 0;
  const pageSize = 5;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/list?page=${page}&pageSize=${pageSize}`,
  );
  const projects = await res.json();
  return { props: { projects } };
};
