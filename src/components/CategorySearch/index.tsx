import { Inter } from 'next/font/google';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { SearchIcon } from '@/components/Icons';
import { CategorySearchContainer } from './styles';
import { categories } from '@/constants';
import 'keen-slider/keen-slider.min.css';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

const CategorySearch = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(500));

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'snap',
    rtl: false,
    slides: { perView: 'auto' },
  });

  const [search, setSearch] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <CategorySearchContainer>
      <section className='search-bar'>
        <div className='input-glow' />

        <form className={`${inter.className}`} onSubmit={handleSubmit}>
          <input
            value={search}
            placeholder='Search'
            className='search'
            onChange={handleChange}
          />

          <SearchIcon sx={{ fontSize: 16 }} />
        </form>
      </section>

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
