import { useCallback, useState } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import ToggleButton from '@/components/Common/ToggleButton';
import TierCard from '@/components/TierCard';
import type { Product, Tier } from '@/types';

import { SelectSubscriptionContainer } from './styles';

interface SelectSubscriptionProps {
  product: Product;
}

const SelectSubscription = ({ product }: SelectSubscriptionProps) => {
  const [activeId, setActiveId] = useState(1);
  const [active, setActive] = useState(false);

  const handleActiveChange = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  const handleClick = useCallback((id: number) => {
    setActiveId(id);
  }, []);

  return (
    <SelectSubscriptionContainer>
      <Typography variant='h4'>Select Subscription</Typography>

      <FlexBox className='select-plan'>
        <Typography variant='body4'>Monthly plans</Typography>

        <ToggleButton active={active} handleActiveChange={handleActiveChange} />

        <FlexBox flexDirection='column' alignItems='flex-start'>
          <Typography variant='body4' color='accent.main'>
            Get 20% off
          </Typography>

          <Typography variant='body4' color='accent.light'>
            Annual plans
          </Typography>
        </FlexBox>
      </FlexBox>

      <div className='tier-card-list'>
        {product.tiers.map(
          (tier: Tier, id: number) =>
            id < 3 && (
              <TierCard
                key={`tier-${id}`}
                active={activeId === id}
                productId={product.id}
                tier={tier}
                handleClick={() => handleClick(id)}
              />
            ),
        )}
      </div>
    </SelectSubscriptionContainer>
  );
};

export default SelectSubscription;
