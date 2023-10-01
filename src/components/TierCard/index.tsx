import { memo } from 'react';
import { Typography } from '@mui/material';
import { StyledButton } from '@/components/Common/StyledButton';
import { DividerIcon } from '@/components/Icons';
import { TierInfo } from '@/types';
import { TierCardContainer } from './styles';

interface TierCardProps {
  tier: TierInfo;
  active: boolean;
  handleClick: () => void;
}

const TierCard = ({ active, tier, handleClick }: TierCardProps) => {
  return (
    <TierCardContainer active={`${active}`} onClick={handleClick}>
      <div className='tier-card-glow' />

      <Typography variant='h5' mb={1}>
        {tier.title}
      </Typography>

      <Typography variant='body3Mobile' mb={3.25} component='div'>
        {tier.description}
      </Typography>

      <Typography variant='h4' mb={5}>
        ${tier.price}{' '}
        <span style={{ fontSize: 14, fontWeight: 400 }}>/month</span>
      </Typography>

      <StyledButton
        variant='Secondary'
        disabled={!active}
        className='subscribe-btn'
      >
        {tier.btn}
      </StyledButton>

      <DividerIcon />

      <ul>
        {tier.features.map((feature: string, id: number) => (
          <li key={`tier-feature-${id}`}>
            <Typography variant='body3'>{feature}</Typography>
          </li>
        ))}
      </ul>
    </TierCardContainer>
  );
};

export default memo(TierCard);
