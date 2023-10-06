import { Typography } from '@mui/material';
import { GlassMorph } from '@/components/Common/GlassMorph';
import { CircleIcon } from '@/components/Icons';
import { SubscriptionInfoCardContainer } from './styles';
import { FlexBox } from '../Common/FlexBox';

interface SubscriptionInfoCardProps {
  title: string;
  value: string;
  icon?: JSX.Element;
  className?: string;
}

const SubscriptionInfoCard = ({
  title,
  value,
  icon,
  className,
}: SubscriptionInfoCardProps) => {
  return (
    <SubscriptionInfoCardContainer
      className={className || 'subscription-info-card'}
    >
      <GlassMorph />

      <div className='circle-icon'>
        <CircleIcon sx={{ fontSize: 44 }} />
      </div>

      <Typography
        variant='bodyBoldMobile'
        className='info-title'
        component='div'
      >
        {title}
      </Typography>

      <FlexBox>
        {icon && icon}
        <Typography variant='h3' className='info-content'>
          {value}
        </Typography>
      </FlexBox>
    </SubscriptionInfoCardContainer>
  );
};

export default SubscriptionInfoCard;
