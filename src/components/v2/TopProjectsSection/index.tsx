import Image from 'next/image';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import { StyledHr } from '@/components/v2/Common/Splitter/styles';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import MembershipCardGroup from '@/components/v2/Common/MembershipCardGroup';
import { NFTType } from '@/interface/Nft.interface';
import {
  TopProjectsSectionContainer,
  TopProjectEntry,
  TopProjectInfoWrapper,
  TopProjectsList,
  MembershipCardWrapper,
} from './styles';

export type TopProjectsSectionProps = {
  topProjects: NFTType[];
};

const TopProjectsSection = ({ topProjects }: TopProjectsSectionProps) => {
  const router = useRouter();

  const handleProduct = (projectId: string) => {
    router.push(`/product/${projectId}`);
  };

  return (
    <TopProjectsSectionContainer>
      <Typography variant='h3' className='section-title'>
        Top Projects
      </Typography>
      <StyledHr />
      <TopProjectsList>
        {topProjects.map((project: NFTType, id: number) => {
          return (
            <TopProjectEntry
              key={`top-project-${id}`}
              className='project-details'
              id={`topProj-${id}`}
              onClick={() => handleProduct(project.id)}
            >
              <TopProjectInfoWrapper>
                <Image
                  // src={project.thumbnail_image}
                  src={
                    'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1' ??
                    project.thumbnail_image
                  }
                  priority
                  alt={project.name}
                  fill={true}
                  className='top-proj-bg'
                />
                <div className='top-proj-content-wrapper'>
                  <Typography
                    variant='productTitleSmall'
                    className='project-name'
                    textAlign='right'
                  >
                    {project.name}
                  </Typography>
                  <StyledButton className='project-category'>
                    gaming
                  </StyledButton>
                </div>
              </TopProjectInfoWrapper>
              <MembershipCardWrapper>
                <MembershipCardGroup />
              </MembershipCardWrapper>
            </TopProjectEntry>
          );
        })}
      </TopProjectsList>
    </TopProjectsSectionContainer>
  );
};

export default TopProjectsSection;
