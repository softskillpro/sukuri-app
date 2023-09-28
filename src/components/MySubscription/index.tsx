import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { HeroGlow } from '@/components/Common/HeroGlow';
import {
  StyledButton,
  SecondaryButton,
} from '@/components/Common/StyledButton';
import SubscriptionTierCard from '@/components/SubscriptionTierCard';
import StyledModal from '@/components/Common/StyledModal';
import { CloseIcon } from '@/components/Icons';
import { MySubscriptionContainer } from './styles';
import { subscriptions } from '@/constants';
import type { Subscription } from '@/types';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

const MySubscription = () => {
  const router = useRouter();

  const [selectedId, setSelectedId] = useState(0);
  const [open, setOpen] = useState(0);

  const handleClick = useCallback((cardId: number) => {
    setSelectedId(cardId);
  }, []);

  const handleSubscription = () => {
    setOpen(1);
  };

  const handleClose = useCallback(() => {
    setOpen(0);
  }, []);

  const handleCancel = useCallback(() => {
    setOpen(2);
  }, []);

  const handleBackMarketplace = useCallback(() => {
    router.push('/');

    setOpen(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
                    onClick={handleSubscription}
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

      <StyledModal open={open === 1} handleClose={handleClose}>
        <FlexBox className={`${inter.className} modal-body`}>
          <Typography variant='h4' mb={4} textAlign='center'>
            Are you sure you want to cancel your subscription?
          </Typography>

          <Typography variant='body3' mb={2.5} textAlign='center'>
            This product will remain active until the next billing cycle
          </Typography>

          <Typography variant='body3' mb={0.5} textAlign='center'>
            Next Billing Date
          </Typography>

          <Typography variant='bodyBold' mb={4} textAlign='center'>
            28/09/2023
          </Typography>

          <StyledButton
            sx={{
              padding: '15px 38px !important',
              fontSize: '14px !important',
            }}
            onClick={handleCancel}
          >
            Cancel Subscription
          </StyledButton>

          <div
            role='button'
            tabIndex={0}
            className='close-btn'
            onClick={handleClose}
            onKeyDown={handleClose}
          >
            <CloseIcon sx={{ fontSize: 16 }} />
          </div>
        </FlexBox>
      </StyledModal>

      <StyledModal open={open === 2} handleClose={handleClose}>
        <FlexBox className={`${inter.className} modal-body`} sx={{ gap: 4 }}>
          <Typography variant='h4' textAlign='center'>
            Thank you
          </Typography>

          <Typography variant='body3' textAlign='center'>
            This product will remain active until the next billing cycle
          </Typography>

          <StyledButton
            sx={{
              padding: '15px 38px !important',
              fontSize: '14px !important',
            }}
            onClick={handleBackMarketplace}
          >
            Back to marketplace
          </StyledButton>

          <div
            role='button'
            tabIndex={0}
            className='close-btn'
            onClick={handleClose}
            onKeyDown={handleClose}
          >
            <CloseIcon sx={{ fontSize: 16 }} />
          </div>
        </FlexBox>
      </StyledModal>
    </>
  );
};

export default MySubscription;
