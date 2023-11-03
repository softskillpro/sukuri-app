import React from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';

const SearchedProductLoader = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      {Array(12)
        .fill('')
        .map((_item, index) => (
          <Grid key={index} item xs={6} md={3}>
            <Image
              src='/images/productLoading.png'
              width={400}
              height={292}
              layout='responsive'
              alt=''
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default SearchedProductLoader;
