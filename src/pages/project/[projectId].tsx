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
  project,
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <ProjectContainer>
      {project ? (
        <>
          <Layout4>
            <Typography
              variant={matches ? 'h3' : 'custom3'}
              color='text.secondary'
              textAlign='center'
              mb={2.5}
            >
              {project.name}
            </Typography>
          </Layout4>

          <Image
            src={
              project.large_image === 'https://example.com'
                ? 'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1'
                : project.large_image
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
              {project.short_description}
            </Typography>
          </Layout4>

          <Gallery />

          <ProjectAbout nft={project} />

          <Subscription nft={project} />

          <RecommendedCommunities projects={projects} />
        </>
      ) : (
        <Typography>This project does not exist</Typography>
      )}
    </ProjectContainer>
  );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = 0;
  const pageSize = 10;
  const { params } = context;

  try {
    const res = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/info/${params?.projectId}`,
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/featured?page=${page}&pageSize=${pageSize}`,
      ),
    ]);
    const data = await Promise.all(res.map((r) => r.json()));

    return { props: { project: data[0], projects: data[1] } };
  } catch (err: any) {
    return { props: { project: null } };
  }
};
