import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import SidebarLayout from '@/components/v2/SidebarLayout';
import UserInfoCard from '@/components/v2/Common/UserInfoCard';
import DiscoverCreatorsCard from '@/components/v2/Common/DiscoverCreatorsCard';
import ProjectInfoCard from '@/components/v2/Common/ProjectInfoCard';
import SubscriptionOverviewHeader from '@/components/v2/SubscriptionOverviewHeader';
import TierCard from '@/components/v2/Common/TierCard';
import FlexBox from '@/components/v2/Common/FlexBox';
import TransactionTable from '@/components/v2/Common/TransactionTable';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import { inter } from '@/components/v2/Common/CustomFont';
import { SubscriptionOverviewContainer } from '@/styles/subscriptionOverview';
import type { Tier } from '@/interface/tier.interface';

const tiers: Tier[] = [
  {
    type: 'tier 1',
    title: 'pleb',
    price: '0.005Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    option: 'dot point 1',
  },
  {
    type: 'tier 2',
    title: 'explorer',
    price: '0.015Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    option: 'dot point 2',
  },
  {
    type: 'tier 3',
    title: 'emperor',
    price: '0.025Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    option: 'dot point 3',
  },
];

const SubscriptionOverview = () => {
  const router = useRouter();

  return (
    <SubscriptionOverviewContainer>
      <SidebarLayout className='subscription-overview-layout'>
        <section>
          <UserInfoCard />
          <DiscoverCreatorsCard />
        </section>

        <section className='sidebar-layout-body'>
          <SubscriptionOverviewHeader />

          {/* <div className='subscription-management-body'>
            <ProjectInfoCard />

            <FlexBox
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                overflow: 'auto',
              }}
            >
              <Typography
                variant='h5'
                textTransform='uppercase'
                m='0 15px 15px'
              >
                Your Subscription
              </Typography>

              <TierCard tier={tiers[0]} active />

              <Typography variant='h5' textTransform='uppercase' m='15px'>
                Upgrade
              </Typography>

              <TierCard tier={tiers[1]} />

              <FlexBox
                sx={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%',
                }}
              >
                <Typography variant='h5' textTransform='uppercase' m='15px'>
                  Billing transactions
                </Typography>

                <TransactionTable />
              </FlexBox>

              <FlexBox className='deactivate-wrapper'>
                <Typography variant='h5' textTransform='uppercase' m='15px'>
                  Deactivate
                </Typography>

                <FlexBox className='deactivate-card'>
                  <FlexBox
                    sx={{ flexDirection: 'column', alignItems: 'center' }}
                  >
                    <Typography
                      variant='labelMd'
                      textTransform='uppercase'
                      lineHeight={1}
                    >
                      subscribed since
                    </Typography>
                    <Typography variant='labelLg' textTransform='uppercase'>
                      06/01/2023
                    </Typography>
                  </FlexBox>

                  <Typography
                    variant='caption'
                    lineHeight={1}
                    textAlign='center'
                    fontStyle='italic'
                    sx={{
                      maxWidth: '50%',
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    When you deactivate, your access to content remains until
                    the next billing cycle.
                  </Typography>

                  <StyledButton status='Negative'>Deactivate</StyledButton>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </div> */}

          <Typography
            variant='subHeading'
            textAlign='center'
            component='div'
            className='subscription-management-footer'
            sx={{
              fontFamily: inter.style.fontFamily,
            }}
            onClick={() => router.push('/marketplace')}
          >
            Looking for more? Check out the Marketplace.
          </Typography>
        </section>
      </SidebarLayout>
    </SubscriptionOverviewContainer>
  );
};

export default SubscriptionOverview;
