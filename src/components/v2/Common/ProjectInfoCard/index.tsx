import Image from 'next/image';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/v2/Common/FlexBox';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import SubscriptionCard from '@/components/v2/Common/SubscriptionCard';
import { SocialWrapper } from '@/components/v2/Common/SocialGroup';
import { inter } from '@/components/v2/Common/CustomFont';

import { ProjectInfoCardContainer } from './styles';

const ProjectInfoCard = () => {
  return (
    <ProjectInfoCardContainer>
      <div className='project-info-card-header'>
        <div className='project-info-img-social-wrapper'>
          <Image
            src='/images/v2/project_info.png'
            width={500}
            height={500}
            priority
            alt='Project Info'
            className='project-info-bg'
          />

          <FlexBox className='project-info-social-group'>
            <SocialWrapper />
          </FlexBox>
        </div>

        <Typography
          variant='caption'
          fontStyle='italic'
          lineHeight={1}
          fontWeight={500}
          sx={{ fontFamily: inter.style.fontFamily }}
          className='project-info-title'
        >
          Consequat incididunt do et commodo sunt mollit aliqua commodo
          incididunt esse fugiat esse. Reprehenderit consequat ullamco ipsum
          officia et cillum qui Lorem ullamco ex cillum laboris pariatur
          consequat.
        </Typography>
      </div>

      <FlexBox className='project-info-card-body'>
        <FlexBox className='price-card-group'>
          <FlexBox className='price-card-wrapper'>
            <SubscriptionCard
              price='0.05Ξ'
              period='secondary'
              variant='secondary'
              orientation='horizontal'
              className='project-subscription-card'
            />
            <SubscriptionCard
              price='0.05Ξ'
              period='secondary'
              variant='secondary'
              orientation='horizontal'
              className='project-subscription-card'
            />
            <SubscriptionCard
              price='0.05Ξ'
              period='secondary'
              variant='secondary'
              orientation='horizontal'
              className='project-subscription-card'
            />
          </FlexBox>

          <StyledButton sx={{ width: '100%' }}>
            <Typography
              variant='subHeading'
              lineHeight={1}
              fontWeight={600}
              sx={{ fontFamily: inter.style.fontFamily }}
            >
              {'View on marketplace ->'}
            </Typography>
          </StyledButton>
        </FlexBox>
      </FlexBox>
    </ProjectInfoCardContainer>
  );
};

export default ProjectInfoCard;
