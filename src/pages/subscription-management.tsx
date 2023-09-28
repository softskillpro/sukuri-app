import SubscriptionManagementHero from '@/components/SubManagementHero';
import MySubscription from '@/components/MySubscription';
import { SubscriptionManagementContainer } from '@/styles/sub-management';

const SubscriptionManagement = () => {
  return (
    <SubscriptionManagementContainer>
      <SubscriptionManagementHero />

      <MySubscription />
    </SubscriptionManagementContainer>
  );
};

export default SubscriptionManagement;
