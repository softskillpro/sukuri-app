import { memo } from 'react';
import { FlexBox } from '@/components/Common/FlexBox';
import SearchBar from '@/components/SearchBar';
import { SubscriptionManagementContainer, CategoryButton } from './styles';
import { categoriesOfSubscription } from '@/constants';
import { CategoryOfSubscription } from '@/types';

interface SubscriptionManagementProps {
  activeCategory: string;
  handleSearch: (search?: string) => void;
  handleCategoryChange: (category: string) => void;
}

const SubscriptionManagement = ({
  activeCategory,
  handleSearch,
  handleCategoryChange,
}: SubscriptionManagementProps) => {
  return (
    <SubscriptionManagementContainer>
      <SearchBar handleSearch={handleSearch} />

      <FlexBox className='btn-group'>
        {categoriesOfSubscription.map((category: CategoryOfSubscription) => (
          <CategoryButton
            key={category.value}
            active={activeCategory === category.value}
            onClick={() => handleCategoryChange(category.value)}
          >
            {category.name}
          </CategoryButton>
        ))}
      </FlexBox>
    </SubscriptionManagementContainer>
  );
};

export default memo(SubscriptionManagement);
