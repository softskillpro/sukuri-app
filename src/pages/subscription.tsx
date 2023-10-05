import { useCallback, useEffect, useState } from 'react';
import SubscriptionHero from '@/components/SubscriptionHero';
import SubscriptionManagement from '@/components/SubscriptionManagement';
import ActiveSubscriptions from '@/components/ActiveSubscriptions';
import LikedProducts from '@/components/LikedProducts';
import Explorer from '@/components/Explorer';
import useRuntimeContext from '@/hooks/useRuntimeContext';
import { SubscriptionContainer } from '@/styles/subscription';
import { categoriesOfSubscription } from '@/constants';
import type { CategoryOfSubscription, Product } from '@/types';
import { api } from '@/utils/api';

const Subscription = () => {
  const { fetchHandler } = useRuntimeContext();

  const [subscriptionProducts, setSubscriptionProducts] = useState<Product[]>(
    [],
  );
  const [likeProducts, setLikeProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [activeCategory, setActiveCategory] = useState<CategoryOfSubscription>(
    categoriesOfSubscription[0] || {
      name: 'Active',
      value: 'active',
    },
  );
  const [asc, setAsc] = useState(true);
  const [loadingSubscribed, setLoadingSubscribed] = useState(true);

  const { data: subscribedProducts, status: subscribedProductsStatus } =
    api.subscribe.getActive.useQuery({
      asc,
    });

  const { data: allProducts, status: allProductsStatus }: any =
    api.project.get.useQuery({
      asc,
    });

  useEffect(() => {
    fetchHandler(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      subscribedProductsStatus !== 'loading' ||
      allProductsStatus !== 'loading'
    ) {
      setLoadingSubscribed(false);
    }
  }, [allProductsStatus, subscribedProductsStatus]);

  // Fetch subscribed products
  useEffect(() => {
    if (activeCategory.value === 'active') {
      if (subscribedProducts) {
        const _products: Product[] = [];
        subscribedProducts.map((subscribed: any) => {
          _products.push(subscribed.project);
        });
        setSubscriptionProducts(_products);
      }
    } else if (activeCategory.value === 'view-all') {
      if (allProducts) setSubscriptionProducts(allProducts);
    } else {
      setSubscriptionProducts([]);
    }
  }, [activeCategory, allProducts, subscribedProducts]);

  // Fetch Products you like
  useEffect(() => {
    if (allProducts) {
      setLikeProducts(allProducts);
    }
  }, [allProducts]);

  const handleSearch = useCallback((_search?: string) => {
    setSearch(_search);
  }, []);

  const handleCategoryChange = useCallback(
    (_category: CategoryOfSubscription) => {
      setActiveCategory(_category);
    },
    [],
  );

  const handleFilter = useCallback(() => {
    setAsc((prev) => !prev);
  }, []);

  return (
    <SubscriptionContainer>
      <SubscriptionHero numOfActive={subscribedProducts?.length} />

      <SubscriptionManagement
        activeCategory={activeCategory}
        handleSearch={handleSearch}
        handleCategoryChange={handleCategoryChange}
      />

      <ActiveSubscriptions
        loading={loadingSubscribed}
        activeCategory={activeCategory}
        products={subscriptionProducts}
        handleFilter={handleFilter}
      />

      <LikedProducts title='Products you might like' products={likeProducts} />

      <Explorer />
    </SubscriptionContainer>
  );
};

export default Subscription;
