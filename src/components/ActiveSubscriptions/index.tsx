import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import ProductSubscriptionCard from '@/components/ProductSubscriptionCard';
import { ActiveSubscriptionsContainer } from './styles';
import type { Product } from '@/types';

interface ActiveSubscriptionsProps {
  products: Product[];
}

const ActiveSubscriptions = ({ products }: ActiveSubscriptionsProps) => {
  return (
    <ActiveSubscriptionsContainer>
      <FlexBox className='active-subscription-header'>
        <Typography variant='h5'>Active Subscriptions</Typography>

        <Typography
          variant='body4'
          fontWeight={700}
          component='div'
          className='filter-btn'
        >
          Filter
        </Typography>
      </FlexBox>

      <div className='product-group'>
        {products &&
          products.map((product: Product) => (
            <ProductSubscriptionCard key={product.id} product={product} />
          ))}
      </div>

      <Typography
        variant='bodyBoldMobile'
        component='div'
        textAlign='center'
        className='filter-btn see-all-btn'
      >
        See All
      </Typography>
    </ActiveSubscriptionsContainer>
  );
};

export default ActiveSubscriptions;
