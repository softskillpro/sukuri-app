import {
  TopProjectsSectionContainer,
  TopProjectEntry,
  TopProjectInfoWrapper,
  TopProjectsList,
  MembershipCardWrapper,
} from './styles';
import { StyledHr } from '@/components/v2/Common/Splitter/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import MembershipCardGroup from '@/components/v2/Common/MembershipCardGroup';

export type TopProjectsSectionProps = {
  topProjects: {
    name: string;
  };
};
const TopProjectsSection = ({ topProjects }: any) => {
  return (
    <TopProjectsSectionContainer>
      <Typography variant='h3' className='section-title'>
        Top Projects
      </Typography>
      <StyledHr />
      <TopProjectsList>
        {topProjects.map((project: any, id: number) => {
          return (
            <TopProjectEntry
              key={`top-project-${id}`}
              className='project-details'
              id={`topProj-${id}`}
            >
              <TopProjectInfoWrapper>
                <Image
                  src={project.thumbnail_image}
                  alt={project.name}
                  fill={true}
                  className='top-proj-bg'
                />
                <Typography
                  variant='productTitleSmall'
                  className='project-name'
                >
                  {project.name}
                </Typography>
                <StyledButton className='project-category'>gaming</StyledButton>
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
