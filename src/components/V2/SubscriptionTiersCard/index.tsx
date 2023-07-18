import { useCallback, useState } from 'react';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/v2/Common/FlexBox';
import TierEntryCard from '@/components/v2/Common/TierEntryCard';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import { inter } from '@/components/v2/Common/CustomFont';
import type { Tier } from '@/interface/tier.interface';

import { SubscriptionTiersCardContainer } from './styles';

const tiers: Tier[] = [
  {
    type: 'tier 1',
    title: 'pleb',
    price: '0.005Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    option: 'dot point 1',
  },
  {
    type: 'tier 2',
    title: 'explorer',
    price: '0.015Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    option: 'dot point 2',
  },
  {
    type: 'tier 3',
    title: 'emperor',
    price: '0.025Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    option: 'dot point 3',
  },
];

const SubscriptionTiersCard = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = useCallback((_id: number) => {
    setSelected(_id);
  }, []);

  return (
    <SubscriptionTiersCardContainer>
      <Typography variant='h4' textTransform='uppercase' mb={2}>
        Subscription Tiers
      </Typography>

      <div className='subscription-tiers-card-body'>
        <FlexBox className='subscription-tiers-group'>
          {tiers.map((tier: Tier, id) => (
            <TierEntryCard
              key={tier.title}
              tier={tier}
              active={id === selected}
              onClick={() => handleSelect(id)}
            />
          ))}
        </FlexBox>

        <FlexBox className='subscription-tier-detail'>
          <FlexBox className='subscription-tier-detail-contents'>
            <Typography
              variant='paragraph'
              lineHeight={1}
              component='div'
              className='subscription-tier-detail-content'
              sx={{ fontFamily: inter.style.fontFamily }}
            >
              {tiers[selected]?.description}
            </Typography>

            <Typography
              variant='paragraph'
              lineHeight={1}
              component='div'
              className='subscription-tier-detail-content'
              sx={{ fontFamily: inter.style.fontFamily }}
            >
              {tiers[selected]?.option}
            </Typography>
          </FlexBox>
          <StyledButton variants='xl'>Upgrade</StyledButton>
        </FlexBox>
      </div>
    </SubscriptionTiersCardContainer>
  );
};

export default SubscriptionTiersCard;
