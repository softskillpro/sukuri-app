import { useState } from 'react';
import { Inter } from 'next/font/google';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import FlexBox from '@/components/v2/Common/FlexBox';
import { StyledDivider } from '@/components/v2/Common/StyledDivider';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import { TierCardContainer } from './styles';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const TierCard = () => {
  const matches = useMediaQuery('(min-width:1400px)');

  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  return (
    <TierCardContainer>
      <FlexBox sx={{ height: 40 }}>
        <Typography variant='labelLg' textTransform='uppercase'>
          tier 1
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
          A very short piece of text about why this tier might be good at this
          price.
        </Typography>

        {more && (
          <div className='tier-card-content'>
            <Typography
              variant='paragraph'
              sx={{ fontFamily: inter.style.fontFamily }}
            >
              A very short piece of text about why this tier might be good at
              this price.
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
          <Typography variant='labelXl'>0.005Ξ</Typography>
          <Typography
            variant='labelMd'
            textTransform='uppercase'
            sx={{ lineHeight: 1 }}
          >
            monthly
          </Typography>
        </FlexBox>

        <StyledButton disabled variants={matches ? 'md' : 'sm'}>
          subscribe
        </StyledButton>
      </FlexBox>
    </TierCardContainer>
  );
};

export default TierCard;
