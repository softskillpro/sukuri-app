import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import SubscriptionManagementHero from '@/components/SubManagementHero';
import MySubscription from '@/components/MySubscription';
import BillingHistory from '@/components/BillingHistory';
import LikedProducts from '@/components/LikedProducts';
import { SubscriptionManagementContainer } from '@/styles/sub-management';

const SubscriptionManagement = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
