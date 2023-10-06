import { styled } from '@mui/material/styles';

export const ImageCarouselContainer = styled('div')(({ theme }) => ({
  marginBottom: 60,

  '.keen-slider__slide': {
    width: 'auto',
    height: 400,
    borderRadius: 7,
  },

  [theme.breakpoints.down('md')]: {
    '.keen-slider__slide': {
      height: 220,
    },
  },
}));
