import { Inter } from 'next/font/google';
import Typography from '@mui/material/Typography';

import FlexBox from '@/components/v2/Common/FlexBox';
import { StyledDivider } from '@/components/v2/Common/StyledDivider';
import { StyledButton } from '@/components/v2/Common/StyledButton';
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
  // const [more, setMore] = useState(false);

  // const handleMore = () => {
  //   setMore((prev) => !prev);
  // };

  return (
    <TierCardContainer>
      <FlexBox className='tier-card-header'>
        <Typography variant='labelLg' textTransform='uppercase'>
          {tier?.type}
        </Typography>

        <Typography variant='labelXl' textTransform='uppercase'>
          TierCard
        </Typography>
      </FlexBox>

      <StyledDivider />

      <FlexBox className='tier-card-body'>
        <Typography
          variant='paragraph'
          textAlign='center'
          my={4}
          px={1.5}
          sx={{ fontFamily: inter.style.fontFamily }}
        >
          {tier?.description}
        </Typography>

        {/* {more && (
          <div className='tier-card-content'>
            {tier?.options.map((option, id) => (
              <li key={`tier-option-${id}`}>
                <Typography
                  variant='paragraph'
                  sx={{ fontFamily: inter.style.fontFamily }}
                >
                  {option}
                </Typography>
              </li>
            ))}
          </div>
        )} */}

        {/* <button
          className='more-info-btn'
          style={{ fontFamily: inter.style.fontFamily }}
          onClick={handleMore}
        >
          {more ? 'Less' : 'More'} Info
        </button> */}
      </FlexBox>

      <FlexBox className='tier-card-footer'>
        <Typography variant='labelXl' mt='5px'>
          {tier?.price}
        </Typography>

        <Typography variant='labelMd' textTransform='uppercase' mb='5px'>
          {tier?.period}
        </Typography>

        <StyledButton disabled={active}>subscribe</StyledButton>
      </FlexBox>
    </TierCardContainer>
  );
};

export default TierCard;
