import { useState } from 'react';
import { Inter } from 'next/font/google';
import Typography from '@mui/material/Typography';

import FlexBox from '@/components/V2/Common/FlexBox';
import { StyledDivider } from '@/components/V2/Common/StyledDivider';
import { StyledButton } from '@/components/V2/Common/StyledButton';
import type { Tier } from '@/interface/tier.interface';
import { TierCardContainer } from './styles';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface TierCardProps {
  tier?: Tier;
  active?: boolean;
}

const TierCard = ({ tier, active = false }: TierCardProps) => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  return (
    <TierCardContainer>
      <FlexBox sx={{ height: 40 }}>
        <Typography variant='labelLg' textTransform='uppercase'>
          {tier?.type}
        </Typography>

        <Typography variant='labelXl' textTransform='uppercase' ml={5.5}>
          TierCard
        </Typography>
      </FlexBox>

      <StyledDivider />

      <FlexBox className='tier-card-body'>
        <Typography
          variant='paragraph'
          mt={4}
          mb={1.5}
          px={1.5}
          sx={{ fontFamily: inter.style.fontFamily }}
        >
          {tier?.description}
        </Typography>

        {more && (
          <div className='tier-card-content'>
            <Typography
              variant='paragraph'
              sx={{ fontFamily: inter.style.fontFamily }}
            >
              {tier?.option}
            </Typography>
          </div>
        )}

        <button
          className='more-info-btn'
          style={{ fontFamily: inter.style.fontFamily }}
          onClick={handleMore}
        >
          {more ? 'Less' : 'More'} Info
        </button>
      </FlexBox>

      <FlexBox className='tier-card-footer'>
        <FlexBox mr={5.5} sx={{ flexDirection: 'column' }}>
          <Typography variant='labelXl'>{tier?.price}</Typography>
          <Typography
            variant='labelMd'
            textTransform='uppercase'
            sx={{ lineHeight: 1 }}
          >
            {tier?.period}
          </Typography>
        </FlexBox>

        <StyledButton disabled={active}>subscribe</StyledButton>
      </FlexBox>
    </TierCardContainer>
  );
};

export default TierCard;
