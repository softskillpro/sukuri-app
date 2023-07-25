import { useCallback, useState } from 'react';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/v2/Common/FlexBox';
import TierEntryCard from '@/components/v2/Common/TierEntryCard';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import { inter } from '@/components/v2/Common/CustomFont';
import type { TierType } from '@/interface/Nft.interface';

import { SubscriptionTiersCardContainer } from './styles';

interface SubscriptionTiersCardProps {
  tiers: TierType[];
}

const SubscriptionTiersCard = ({ tiers }: SubscriptionTiersCardProps) => {
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
          {tiers.map((tier: TierType, id) => (
            <TierEntryCard
              key={tier.tier_id}
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
              <ul style={{ margin: 0, paddingLeft: 14 }}>
                {tiers[selected]?.features.map((feature, id) => (
                  <li key={`feature-${id}`} style={{ margin: '3px 0' }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </Typography>
          </FlexBox>
          <StyledButton variants='xl'>Upgrade</StyledButton>
        </FlexBox>
      </div>
    </SubscriptionTiersCardContainer>
  );
};

export default SubscriptionTiersCard;
