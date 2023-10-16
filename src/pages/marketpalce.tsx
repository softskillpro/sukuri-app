import { useCallback, useEffect, useState } from 'react';
import MarketplaceHero from '@/components/MarketplaceHero';
import CategorySearch from '@/components/CategorySearch';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewProducts from '@/components/NewProducts';
import Explorer from '@/components/Explorer';
import IntroSukuri from '@/components/IntroSukuri';
import BecomeAffiliate from '@/components/BecomeAffiliate';
import Newsletter from '@/components/Newsletter';
import { MarketplaceContainer } from '@/styles/home';
import useRuntimeContext from '@/hooks/useRuntimeContext';
import { api } from '@/utils/api';
import { currencies } from '@/constants';

const Marketplace = () => {
  const { data: allProducts, status }: any = api.project.get.useQuery({
    asc: true,
  });

  const { fetchHandler } = useRuntimeContext();

  const [currency, setCurrency] = useState(currencies[0] || 'USD');
  const [search, setSearch] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchHandler(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCurrencyChange = useCallback((_currency: string) => {
    setCurrency(_currency);
  }, []);

  const handleSearch = useCallback((_search?: string) => {
    setSearch(_search);
  }, []);

  return (
    <MarketplaceContainer>
      <MarketplaceHero
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />

      <CategorySearch handleSearch={handleSearch} />

      <FeaturedProducts
        loading={status === 'loading'}
        products={allProducts}
        currency={currency}
      />

      <NewProducts
        loading={status === 'loading'}
        products={allProducts}
        currency={currency}
      />

      <Explorer />

      <IntroSukuri />

      <BecomeAffiliate />

      <Newsletter />
    </MarketplaceContainer>
  );
};

export default Marketplace;
