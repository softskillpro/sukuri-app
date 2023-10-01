import { useEffect } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import SubscriptionManagementHero from '@/components/SubManagementHero';
import MySubscription from '@/components/MySubscription';
import BillingHistory from '@/components/BillingHistory';
import LikedProducts from '@/components/LikedProducts';
import { SubscriptionManagementContainer } from '@/styles/sub-management';
import useRuntimeContext from '@/hooks/useRuntimeContext';

const SubscriptionManagement = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { fetchHandler } = useRuntimeContext();

  useEffect(() => {
    fetchHandler(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SubscriptionManagementContainer>
      <SubscriptionManagementHero />

      <MySubscription />

      <BillingHistory />

      <LikedProducts title='Discover more' products={products} />
    </SubscriptionManagementContainer>
  );
};

export default SubscriptionManagement;

export const getServerSideProps: GetServerSideProps = async () => {
  const page = 0;
  const pageSize = 10;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/featured?page=${page}&pageSize=${pageSize}`,
  );
  const products = await res.json();
  return { props: { products } };
};
