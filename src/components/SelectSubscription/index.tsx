import { useCallback, useState } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import ToggleButton from '@/components/Common/ToggleButton';
import TierCard from '@/components/TierCard';
import { tiers } from '@/constants';
import type { TierInfo } from '@/types';

import { SelectSubscriptionContainer } from './styles';

const SelectSubscription = () => {
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
        {tiers.map((tier: TierInfo, id: number) => (
          <TierCard
            key={`tier-${id}`}
            active={activeId === id}
            tier={tier}
            handleClick={() => handleClick(id)}
          />
        ))}
      </div>
    </SelectSubscriptionContainer>
  );
};

export default SelectSubscription;
