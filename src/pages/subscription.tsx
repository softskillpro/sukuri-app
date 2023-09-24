import { useCallback, useState } from 'react';
import SubscriptionHero from '@/components/SubscriptionHero';
import SubscriptionManagement from '@/components/SubscriptionManagement';
import { SubscriptionContainer } from '@/styles/subscription';
import { categoriesOfSubscription } from '@/constants';

const Subscription = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [activeCategory, setActiveCategory] = useState(
    categoriesOfSubscription[4]?.value || 'view-all',
  );

  console.log(search);

  const handleSearch = useCallback((_search?: string) => {
    setSearch(_search);
  }, []);

  const handleCategoryChange = useCallback((_category: string) => {
    setActiveCategory(_category);
  }, []);

  return (
    <SubscriptionContainer>
      <SubscriptionHero />

      <SubscriptionManagement
        activeCategory={activeCategory}
        handleSearch={handleSearch}
        handleCategoryChange={handleCategoryChange}
      />
    </SubscriptionContainer>
  );
};

export default Subscription;
