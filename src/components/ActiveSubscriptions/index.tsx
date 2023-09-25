import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import SubscriptionCard from '@/components/SubscriptionCard';
import { ActiveSubscriptionsContainer } from './styles';
import type { NFT } from '@/types';

interface ActiveSubscriptionsProps {
  products: NFT[];
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
          products.map((product: NFT) => (
            <SubscriptionCard key={product.id} product={product} />
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
