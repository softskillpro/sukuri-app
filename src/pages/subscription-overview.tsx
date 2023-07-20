import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import SidebarLayout from '@/components/v2/SidebarLayout';
import UserInfoCard from '@/components/v2/Common/UserInfoCard';
import DiscoverCreatorsCard from '@/components/v2/Common/DiscoverCreatorsCard';
import SubscriptionOverviewHeader from '@/components/v2/SubscriptionOverviewHeader';
import SubscriptionEntryCard from '@/components/v2/Common/SubscriptionEntryCard';
import { inter } from '@/components/v2/Common/CustomFont';
import { SubscriptionOverviewContainer } from '@/styles/subscriptionOverview';

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

          <div className='subscription-overview-body'>
            <SubscriptionEntryCard />
            <SubscriptionEntryCard />
            <SubscriptionEntryCard />
            <SubscriptionEntryCard />
            <SubscriptionEntryCard />
          </div>

          <Typography
            variant='subHeading'
            textAlign='center'
            component='div'
            className='subscription-overview-footer'
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
