import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import {
  SubscriptionTierCardContainer,
  StyledDivider,
  SubscriptionTierGlassMorph,
} from './styles';
import type { Subscription } from '@/types';
import formatUnits from '@/utils/formatUnits';

interface SubscriptionTierCardProps {
  currency: string;
  subscription: Subscription;
  active?: boolean;
  handleClick: () => void;
}

const SubscriptionTierCard = ({
  currency,
  subscription,
  active = false,
  handleClick,
}: SubscriptionTierCardProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <SubscriptionTierCardContainer onClick={handleClick}>
      <SubscriptionTierGlassMorph active={`${active}`} />

      {active && (
        <div className='active-card'>
          <Typography
            variant={matches ? 'bodyBoldMobile' : 'body5'}
            fontWeight={700}
          >
            Active
          </Typography>
        </div>
      )}

      <FlexBox className='membership-info'>
        <Typography
          variant={matches ? 'bodyBoldMobile' : 'body5'}
          fontWeight={700}
          className='membership-info-item'
        >
          {subscription.name}
        </Typography>

        <StyledDivider />

        <Typography
          variant={matches ? 'bodyBoldMobile' : 'body5'}
          fontWeight={700}
          className='membership-info-item'
        >
          {subscription.description}
        </Typography>
      </FlexBox>

      <FlexBox className='membership-price'>
        <Typography
          variant={matches ? 'bodyBoldMobile' : 'body5'}
          fontWeight={700}
        >
          Price
        </Typography>

        <Typography
          variant={matches ? 'bodyBoldMobile' : 'body5'}
          fontWeight={700}
        >
          {subscription.price &&
            subscription.unit &&
            formatUnits(subscription.price, subscription.unit, currency)}
        </Typography>
      </FlexBox>
    </SubscriptionTierCardContainer>
  );
};

export default SubscriptionTierCard;
