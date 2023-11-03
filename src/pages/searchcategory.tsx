import { useCallback, useState } from 'react';

import { SearchPageContainer, SidebarFilterWrapper } from '@/styles/search';

import { categories, currencies, statues, priceRange } from '@/constants';
import SearchManagement from '@/components/CategorySearchManagement';
import { Category, Status } from '@/types';
import SearchedProductList from '@/components/SearchedProductList';
import products from '@/mockData/Products.json';
import SidebarFilter from '@/components/CategorySidebarFilters';
import { useTheme, useMediaQuery } from '@mui/material';

const Search = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [currency, setCurrency] = useState(currencies[0] || 'USD');
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [isShowFilter, setShowFilter] = useState(true);
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    priceRange[0] || 'Price:high to low',
  );

  const [activeCategory, setActiveCategory] = useState<Category>(
    categories[0] || { title: 'Trading', value: 'trading', width: 77 },
  );

  const [activeStatus, setActiveStatus] = useState<Status>(
    statues[0] || { name: 'All', value: 'all' },
  );

  const handleToggleFilter = useCallback(() => {
    setShowFilter(!isShowFilter);
  }, [isShowFilter]);

  const handleSearch = useCallback((_search?: string) => {
    setSearch(_search);
  }, []);

  const handleCategoryChange = useCallback((_category: Category) => {
    setActiveCategory(_category);
  }, []);

  const handleStatusChange = useCallback((_status: Status) => {
    setActiveStatus(_status);
  }, []);

  const handleCurrencyChange = useCallback((_currency: string) => {
    setCurrency(_currency);
  }, []);

  const handlePriceRangeChange = useCallback((_range: string) => {
    setSelectedPriceRange(_range);
  }, []);

  return (
    <SearchPageContainer>
      <SearchManagement
        handleToggleFilter={handleToggleFilter}
        isShowFilter={isShowFilter}
        activeCategory={activeCategory}
        handleSearch={handleSearch}
        handleCategoryChange={handleCategoryChange}
        handlePriceRangeChange={handlePriceRangeChange}
        selectedPriceRange={selectedPriceRange}
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />

      <SidebarFilterWrapper isShowFilter={isShowFilter && isLargeScreen}>
        {isShowFilter && isLargeScreen && (
          <SidebarFilter
            currency={currency}
            handleCurrencyChange={handleCurrencyChange}
            activeCategory={activeCategory}
            handleSearch={handleSearch}
            handleCategoryChange={handleCategoryChange}
            activeStatus={activeStatus}
            handleStatusChange={handleStatusChange}
          />
        )}
        <SearchedProductList products={products} currency={currency} />
      </SidebarFilterWrapper>
    </SearchPageContainer>
  );
};

export default Search;
