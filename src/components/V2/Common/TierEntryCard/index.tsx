import Typography from '@mui/material/Typography';
import FlexBox from '@/components/V2/Common/FlexBox';
import { Tier } from '@/interface/tier.interface';
import { TierEntryCardContainer } from './styles';

interface TierEntryCardProps {
  tier: Tier;
  active: boolean;
  onClick: () => void;
}

const TierEntryCard = ({ tier, active, onClick }: TierEntryCardProps) => {
  return (
    <TierEntryCardContainer active={`${active}`} onClick={onClick}>
      <FlexBox sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant='labelMd' textTransform='uppercase' lineHeight={1}>
          {tier.type}
        </Typography>
        <Typography variant='labelLg' textTransform='uppercase' lineHeight={1}>
          {tier.title}
        </Typography>
      </FlexBox>

      <FlexBox sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant='labelXl' lineHeight={1}>
          {tier.price}
        </Typography>
        <Typography variant='labelMd' textTransform='uppercase' lineHeight={1}>
          {tier.period}
        </Typography>
      </FlexBox>
    </TierEntryCardContainer>
  );
};

export default TierEntryCard;
