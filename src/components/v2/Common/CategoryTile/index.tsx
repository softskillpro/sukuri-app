import Image from 'next/image';
import { Typography } from '@mui/material';
import { CategoryTileContainer } from './styles';

export type CategoryTileProps = {
  name: string;
  image?: string;
  count?: number;
};

export const CategoryTile = ({ name, image, count }: CategoryTileProps) => {
  return (
    <CategoryTileContainer>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className='category-tile-bg'
        />
      ) : null}
      <div className='category-content'>
        <Typography variant='h3' align='center'>
          {name}
        </Typography>
        {count ? (
          <Typography variant='paragraph' align='center'>
            {count} products
          </Typography>
        ) : null}
      </div>
    </CategoryTileContainer>
  );
};
