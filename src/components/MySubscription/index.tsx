import { useCallback, useState } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { HeroGlow } from '@/components/Common/HeroGlow';
import {
  StyledButton,
  SecondaryButton,
} from '@/components/Common/StyledButton';
import SubscriptionTierCard from '@/components/SubscriptionTierCard';
import { MySubscriptionContainer } from './styles';
import { subscriptions } from '@/constants';
import type { Subscription } from '@/types';

const MySubscription = () => {
  const [selectedId, setSelectedId] = useState(0);

  const handleClick = useCallback((cardId: number) => {
    setSelectedId(cardId);
  }, []);

  return (
    <MySubscriptionContainer>
      <HeroGlow />

      <section className='subscription-tier-wrapper'>
        <div className='subscription-header'>
          <Typography variant='h5' mb={0.375}>
            Your Subscription
          </Typography>

          <Typography variant='body3'>
            Select a plan to view or upgrade your subscription
          </Typography>
        </div>

        <FlexBox className='subscription-tier-list'>
          {subscriptions.map((subscription: Subscription, id: number) => (
            <SubscriptionTierCard
              key={`tier-${id}`}
              active={id === 0 ? true : false}
              subscription={subscription}
              handleClick={() => handleClick(id)}
            />
          ))}
        </FlexBox>
      </section>

      <section>
        <div className='subscription-header included'>
          <Typography variant='h5'>What&apos;s Included?</Typography>
        </div>

        <FlexBox className='subscription-features'>
          <ul>
            {subscriptions[selectedId]?.features.map(
              (feature: string, id: number) => (
                <li key={`feature-${id}`}>
                  <Typography variant='body2'>{feature}</Typography>
                </li>
              ),
            )}
          </ul>

          <FlexBox className='button-group'>
            {selectedId === 0 ? (
              <>
                <FlexBox gap={1.25}>
                  <StyledButton
                    sx={{
                      padding: '15px 32px !important',
                      fontSize: '14px !important',
                    }}
                  >
                    Renew
                  </StyledButton>
                  <SecondaryButton>Sell Subscription</SecondaryButton>
                </FlexBox>

                <Typography
                  variant='body5'
                  className='cancel-btn'
                  component='div'
                >
                  Cancel Subscription
                </Typography>
              </>
            ) : (
              <StyledButton
                sx={{
                  padding: '15px 32px !important',
                  fontSize: '14px !important',
                }}
              >
                Upgrade
              </StyledButton>
            )}
          </FlexBox>
        </FlexBox>
      </section>
    </MySubscriptionContainer>
  );
};

export default MySubscription;
