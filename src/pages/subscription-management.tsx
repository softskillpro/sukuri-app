import SubscriptionManagementHero from '@/components/SubManagementHero';
import MySubscription from '@/components/MySubscription';
import BillingHistory from '@/components/BillingHistory';
import { SubscriptionManagementContainer } from '@/styles/sub-management';

const SubscriptionManagement = () => {
  return (
    <SubscriptionManagementContainer>
      <SubscriptionManagementHero />

      <MySubscription />

      <BillingHistory />
    </SubscriptionManagementContainer>
  );
};

export default SubscriptionManagement;
