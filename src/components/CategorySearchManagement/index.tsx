import { memo } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import SearchBar from '@/components/SearchBar';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import {
  SubscriptionManagementContainer,
  CategoryButton,
  SearchbarBorder,
  CategoriesButtonWrapper,
  FilterButton,
} from './styles';

import { useMediaQuery, useTheme } from '@mui/material';
import { Category } from '@/types';
import { ArrowLeftIcon, FilterIcon } from '../Icons';
import PriceFilterPopup from '../PriceFilterPopup';
import { categories } from '@/constants';
import 'keen-slider/keen-slider.min.css';
import { FlexBox } from '../Common/FlexBox';

interface SearchProps {
  activeCategory: Category;
  handleSearch: (search?: string) => void;
  handleCategoryChange: (category: Category) => void;
  handleToggleFilter: () => void;
  isShowFilter: boolean;
  handlePriceRangeChange: (range: string) => void;
  selectedPriceRange: string;
  handleCurrencyChange: (_currency: string) => void;
  currency: string;
}

const SearchManagement = ({
  isShowFilter,
  handleToggleFilter,
  activeCategory,
  handleSearch,
  handleCategoryChange,
  selectedPriceRange,
  handlePriceRangeChange,
  handleCurrencyChange,
  currency,
}: SearchProps) => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'snap',
    rtl: false,
    slides: { perView: 'auto' },
  });

  return (
    <div>
      <SearchbarBorder />
      <SubscriptionManagementContainer>
        {!isMobileScreen && (
          <FilterButton onClick={handleToggleFilter}>
            {isShowFilter ? (
              <ArrowLeftIcon sx={{ fontSize: 18 }} />
            ) : (
              <FilterIcon sx={{ fontSize: 18 }} />
            )}
            Filter
          </FilterButton>
        )}
        <FlexBox justifyContent='space-between' columnGap='7px'>
          <SearchBar handleSearch={handleSearch} />

          {isMobileScreen && (
            <CurrencySwitcher
              currency={currency}
              handleCurrencyChange={handleCurrencyChange}
            />
          )}
        </FlexBox>

        <PriceFilterPopup
          selectedPriceRange={selectedPriceRange}
          handlePriceRangeChange={handlePriceRangeChange}
        />

        {isMobileScreen && (
          <CategoriesButtonWrapper ref={sliderRef} className='keen-slider'>
            {categories.map((category) => (
              <CategoryButton
                className='keen-slider__slide'
                style={{
                  maxWidth: category.width,
                  minWidth: category.width,
                  cursor: 'pointer',
                }}
                key={category.value}
                active={activeCategory.value === category.value}
                onClick={() => handleCategoryChange(category)}
              >
                {category.title}
              </CategoryButton>
            ))}
          </CategoriesButtonWrapper>
        )}
      </SubscriptionManagementContainer>
    </div>
  );
};

export default memo(SearchManagement);
