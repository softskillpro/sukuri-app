import { useCallback, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import ToggleButton from '@/components/Common/ToggleButton';
import TierCard from '@/components/TierCard';
import type { Product, Tier } from '@/types';

import { SelectSubscriptionContainer } from './styles';

interface SelectSubscriptionProps {
  tierId?: string;
  product: Product;
}

const SelectSubscription = ({ tierId, product }: SelectSubscriptionProps) => {
  const [active, setActive] = useState(false);

  const [productTier, setProductTier] = useState<Tier | undefined>(undefined);

  useEffect(() => {
    if (product.tiers) {
      product.tiers.map((tier: Tier) => {
        if (tier.id === tierId) {
          setProductTier(tier);
        }
      });
    }
  }, [product, tierId]);

  const handleActiveChange = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  // const handleClick = (tier: Tier) => {
  //   setProductTier(tier);
  // };

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
        {product.tiers.map((tier: Tier, id: number) => (
          <div
            key={`tier-${id}`}
            role='button'
            tabIndex={0}
            // onClick={() => handleClick(tier)}
            // onKeyDown={() => handleClick(tier)}
          >
            <TierCard
              active={tier.id === productTier?.id}
              productId={product.id}
              tier={tier}
            />
          </div>
        ))}
      </div>
    </SelectSubscriptionContainer>
  );
};

export default SelectSubscription;
