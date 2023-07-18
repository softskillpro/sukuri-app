import { CategorySectionContainer } from './styles';
import Typography from '@mui/material/Typography';
import { StyledHr } from '@/components/v2/Common/Splitter/styles';
import { CategoryTile } from '@/components/v2/Common/CategoryTile';

export type CategoryListProps = {
  categories: {
    name: string;
    image?: string;
    count?: number;
  }[];
};
const CategorySection = ({ categories }: CategoryListProps) => {
  return (
    <CategorySectionContainer>
      <Typography variant='h3' className='section-title'>
        Categories
      </Typography>
      <StyledHr />
      <div className='category-tile-grid'>
        {categories
          ? categories.map(({ name, image, count }, i) => {
              return (
                <CategoryTile
                  key={i}
                  name={name}
                  image={image ? image : ''}
                  count={count ? count : undefined}
                />
              );
            })
          : ''}
      </div>
    </CategorySectionContainer>
  );
};

export default CategorySection;
