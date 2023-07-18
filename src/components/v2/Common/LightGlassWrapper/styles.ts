import { LightGlassWrapper } from '@/components/LightGlassWrapper';
import { styled } from '@mui/material';

export const WrapperDiv = styled('div')(({ theme }) => ({
  '& * >': {
    zIndex: 5,
  },

  padding: 40,

  [theme.breakpoints.down('xl')]: {
    padding: 30,
  },

  [theme.breakpoints.down('md')]: {
    padding: 15,
  },

  [theme.breakpoints.down('sm')]: {
    padding: 10,
  },
}));

export const ChildWrapper = styled('span')(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
}));
