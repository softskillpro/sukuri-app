import { useKeenSlider } from 'keen-slider/react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import SearchBar from '@/components/SearchBar';
import { FlexBox } from '@/components/Common/FlexBox';
import { CategorySearchContainer } from './styles';
import { categories } from '@/constants';
import 'keen-slider/keen-slider.min.css';

interface CategorySearchProps {
  handleSearch: (search?: string) => void;
}

const CategorySearch = ({ handleSearch }: CategorySearchProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(500));

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'snap',
    rtl: false,
    slides: { perView: 'auto' },
  });

  return (
    <CategorySearchContainer>
      <SearchBar handleSearch={handleSearch} />

      <section className='category-group-wrapper'>
        {matches ? (
          <FlexBox className='category-group'>
            {categories.map((category) => (
              <Typography
                key={category.title}
                variant='h4Mobile'
                component='div'
                sx={{ cursor: 'pointer' }}
              >
                {category.title}
              </Typography>
            ))}
          </FlexBox>
        ) : (
          <div ref={sliderRef} className='keen-slider'>
            {categories.map((category) => (
              <Typography
                key={category.title}
                variant='h4Mobile'
                className='keen-slider__slide'
                component='div'
                style={{
                  maxWidth: category.width,
                  minWidth: category.width,
                  cursor: 'pointer',
                }}
              >
                {category.title}
              </Typography>
            ))}
          </div>
        )}
      </section>
    </CategorySearchContainer>
  );
};

export default CategorySearch;
