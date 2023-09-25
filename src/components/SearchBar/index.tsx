import { memo, useRef } from 'react';
import type { FormEvent } from 'react';
import { Inter } from 'next/font/google';
import { IconButton } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { SearchIcon } from '@/components/Icons';
import { SearchBarContainer } from './styles';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

interface SearchBarProps {
  handleSearch: (search?: string) => void;
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSearch(inputRef.current?.value);
  };

  return (
    <SearchBarContainer>
      <HeroGlow className='input-glow' />

      <form className={`${inter.className}`} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          required
          placeholder='Search'
          className='search'
        />

        <IconButton className='search-btn' type='submit'>
          <SearchIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </form>
    </SearchBarContainer>
  );
};

export default memo(SearchBar);
