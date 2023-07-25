import Typography from '@mui/material/Typography';
import FlexBox from '@/components/v2/Common/FlexBox';
import type { TierType } from '@/interface/Nft.interface';
import formatUnits from '@/utils/formatUnits';
import { TierEntryCardContainer } from './styles';

interface TierEntryCardProps {
  tier: TierType;
  active: boolean;
  onClick: () => void;
}

const TierEntryCard = ({ tier, active, onClick }: TierEntryCardProps) => {
  return (
    <TierEntryCardContainer active={`${active}`} onClick={onClick}>
      <FlexBox sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant='labelMd' textTransform='uppercase' lineHeight={1}>
          Tier {tier.tier_id}
        </Typography>
        <Typography variant='labelLg' textTransform='uppercase' lineHeight={1}>
          {tier.name}
        </Typography>
      </FlexBox>

      <FlexBox sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
        <Typography variant='labelXl' lineHeight={1}>
          {formatUnits(tier.price, tier.unit)}
        </Typography>
        <Typography variant='labelMd' textTransform='uppercase' lineHeight={1}>
          {tier.subscription_length} {tier.subscription_length_unit}
        </Typography>
      </FlexBox>
    </TierEntryCardContainer>
  );
};

export default TierEntryCard;
