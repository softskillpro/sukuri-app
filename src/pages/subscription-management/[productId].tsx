import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SubscriptionManagementHero from '@/components/SubManagementHero';
import MySubscription from '@/components/MySubscription';
import BillingHistory from '@/components/BillingHistory';
import LikedProducts from '@/components/LikedProducts';
import { SubscriptionManagementContainer } from '@/styles/sub-management';
import useRuntimeContext from '@/hooks/useRuntimeContext';
import { api } from '@/utils/api';
import { currencies } from '@/constants';

const SubscriptionManagement = () => {
  const router = useRouter();
  const { fetchHandler } = useRuntimeContext();

  const { productId }: any = router.query;

  const { data: likedProducts }: any = api.project.get.useQuery({
    asc: true,
  });

  const { data: currentProject }: any = api.subscribe.get.useQuery({
    id: productId,
    asc: true,
  });

  const [currency, setCurrency] = useState(currencies[0] || 'USD');

  useEffect(() => {
    fetchHandler(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCurrencyChange = useCallback((_currency: string) => {
    setCurrency(_currency);
  }, []);

  return (
    <SubscriptionManagementContainer>
      <SubscriptionManagementHero
        product={currentProject}
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />

      <MySubscription currency={currency} />

      <BillingHistory />

      <LikedProducts
        title='Discover more'
        currency={currency}
        products={likedProducts}
      />
    </SubscriptionManagementContainer>
  );
};

export default SubscriptionManagement;
