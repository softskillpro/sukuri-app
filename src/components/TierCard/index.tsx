import { memo } from 'react';
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';
import { StyledButton } from '@/components/Common/StyledButton';
import { DividerIcon } from '@/components/Icons';
import { TierCardContainer } from './styles';
import { Tier } from '@/types';
import { api } from '@/utils/api';
import formatUnits from '@/utils/formatUnits';

interface TierCardProps {
  productId: string;
  tier: Tier;
  active: boolean;
}

const TierCard = ({ productId, active, tier }: TierCardProps) => {
  const subscribed = api.subscribe.subscribed.useQuery({
    id: productId,
  });

  const subscribeMutationProject = api.subscribe.subscribe.useMutation();

  const handleSubscribe = async () => {
    const input = {
      projectId: productId as string,
      tierId: tier.id as string,
    };

    try {
      await subscribeMutationProject.mutateAsync(input);

      toast.success('Successfully subscribed');

      subscribed.refetch();
    } catch (error: any) {
      toast.error(error?.message || error);
    }
  };

  return (
    <TierCardContainer active={`${active}`} className='tier-card'>
      <div className='tier-card-glow' />

      <Typography variant='h5' mb={1}>
        {tier.name}
      </Typography>

      <Typography
        variant='body3Mobile'
        color='accent.light'
        mb={3.25}
        component='div'
      >
        {tier.description}
      </Typography>

      <Typography variant='h4' mb={5}>
        {formatUnits(tier.price, tier.unit)}{' '}
        <span style={{ fontSize: 14, fontWeight: 400, color: '#8E919B' }}>
          /month
        </span>
      </Typography>

      <StyledButton
        variant='Secondary'
        disabled={active}
        className='subscribe-btn'
        onClick={handleSubscribe}
      >
        {active ? 'Subscribed' : 'Subscribe'}
      </StyledButton>

      <DividerIcon />

      <ul>
        {tier.features.map((feature: string, id: number) => (
          <li key={`tier-feature-${id}`}>
            <Typography variant='body3' color='accent.light'>
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
    </TierCardContainer>
  );
};

export default memo(TierCard);
