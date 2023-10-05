import { memo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import ProductSubscriptionCard from '@/components/ProductSubscriptionCard';
import { Loader } from '@/components/Common/Loader';
import { ActiveSubscriptionsContainer } from './styles';
import type { CategoryOfSubscription, Product } from '@/types';

interface ActiveSubscriptionsProps {
  loading: boolean;
  currency: string;
  activeCategory: CategoryOfSubscription;
  products: Product[];
  handleFilter: () => void;
}

const ActiveSubscriptions = ({
  loading,
  currency,
  activeCategory,
  products,
  handleFilter,
}: ActiveSubscriptionsProps) => {
  return (
    <ActiveSubscriptionsContainer>
      <FlexBox className='active-subscription-header'>
        <Typography variant='h5'>
          {activeCategory.name === 'View All' ? 'All' : activeCategory.name}{' '}
          Subscriptions
        </Typography>

        <Typography
          variant='body4'
          fontWeight={700}
          component='div'
          className='filter-btn'
          onClick={handleFilter}
        >
          Filter
        </Typography>
      </FlexBox>

      {loading ? (
        <FlexBox justifyContent='center'>
          <Loader variant='Secondary' />
        </FlexBox>
      ) : (
        products.length > 0 && (
          <div className='product-group'>
            {products.map((product: Product) => (
              <ProductSubscriptionCard
                key={product.id}
                currency={currency}
                product={product}
              />
            ))}
          </div>
        )
      )}

      {/* <Typography
        variant='bodyBoldMobile'
        component='div'
        textAlign='center'
        className='filter-btn see-all-btn'
      >
        See All
      </Typography> */}
    </ActiveSubscriptionsContainer>
  );
};

export default memo(ActiveSubscriptions);
