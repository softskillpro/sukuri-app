import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import SidebarLayout from '@/components/v2/SidebarLayout';
import UserInfoCard from '@/components/v2/Common/UserInfoCard';
import DiscoverCreatorsCard from '@/components/v2/Common/DiscoverCreatorsCard';
import ProjectInfoCard from '@/components/v2/Common/ProjectInfoCard';
import TierCard from '@/components/v2/Common/TierCard';
import TokenCardGroup from '@/components/v2/Common/TokenCardGroup';
import FlexBox from '@/components/v2/Common/FlexBox';
import TransactionTable from '@/components/v2/Common/TransactionTable';
import CheckMarketplace from '@/components/v2/Common/CheckMarketplace';
import { SubscriptionManagementContainer } from '@/styles/subscriptionManagement';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import { TokenCardGroupPopper } from '@/components/v2/Common/TokenCardGroupPopper';
import Arrowback2Icon from '@/components/v2/svgs/Arrowback2Icon';
import ManageIcon from '@/components/v2/svgs/ManageIcon';
import { inter } from '@/components/v2/Common/CustomFont';
import type { Tier } from '@/interface/tier.interface';

const tiers: Tier[] = [
  {
    type: 'tier 1',
    title: 'pleb',
    price: '0.005Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    options: ['dot point 1'],
    active: true,
  },
  {
    type: 'tier 2',
    title: 'explorer',
    price: '0.015Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    options: ['dot point 1', 'dot point 2', 'dot point 3'],
    active: false,
  },
  {
    type: 'tier 3',
    title: 'emperor',
    price: '0.025Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    options: ['dot point 3'],
    active: false,
  },
  {
    type: 'tier 4',
    title: 'pleb',
    price: '0.005Ξ',
    period: 'monthly',
    description: 'this section more lines than the dot points they both expand',
    options: ['dot point 1'],
    active: false,
  },
];

const SubscriptionManagement = () => {
  const matches = useMediaQuery('(min-width:600px)');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'token-card-group-popper' : undefined;

  return (
    <>
      <SubscriptionManagementContainer>
        <SidebarLayout className='subscription-management-layout'>
          <section>
            <UserInfoCard />
            <DiscoverCreatorsCard />
          </section>

          <section className='sidebar-layout-body'>
            <FlexBox className='subscription-management-header'>
              <IconButton>
                <Arrowback2Icon sx={{ fontSize: 19 }} />
              </IconButton>

              <Typography
                variant='h4'
                textTransform='uppercase'
                textAlign='center'
                className='subscription-management-header-title'
              >
                product name
              </Typography>

              {matches ? (
                <TokenCardGroup variant='Horizontal' />
              ) : (
                <IconButton onClick={handleClick}>
                  <ManageIcon sx={{ fontSize: 19 }} />
                </IconButton>
              )}
            </FlexBox>

            <div className='subscription-management-body'>
              <ProjectInfoCard />

              <FlexBox
                sx={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%',
                  overflow: 'auto',
                }}
              >
                <FlexBox className='tier-card-group'>
                  {tiers.map((tier) => (
                    <TierCard
                      key={tier.type}
                      tier={tier}
                      active={tier.active}
                    />
                  ))}
                </FlexBox>

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
            </div>

            <CheckMarketplace />
          </section>
        </SidebarLayout>
      </SubscriptionManagementContainer>

      <TokenCardGroupPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement='bottom-end'
      >
        <TokenCardGroup />
      </TokenCardGroupPopper>
    </>
  );
};

export default SubscriptionManagement;
