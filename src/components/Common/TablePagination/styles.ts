import { styled } from '@mui/material/styles';
import { Pagination as StyledPagination } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';

export const PaginationContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  justifyContent: 'center',

  '.go-to-page': {
    position: 'absolute',
    top: 0,
    right: 0,

    input: {
      width: 75,
      height: 36,
      margin: '0 9px',
      borderRadius: 7,
      border: `1px solid ${theme.palette.buttonGradient.contrastText}`,
      background: 'transparent',
      outline: 'none',
      fontSize: 16,
      fontWeight: 700,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'var(--Inter)',
    },
  },

  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between',
  },
}));

export const Pagination = styled(StyledPagination)(({ theme }) => ({
  button: {
    borderRadius: 7,
    border: `1px solid ${theme.palette.buttonGradient.contrastText}`,

    '&.Mui-selected': {
      background: theme.palette.topProductsGradient.light,
    },
  },

  [theme.breakpoints.down('md')]: {
    ul: {
      li: {
        ':not(:first-of-type):not(:last-of-type)': {
          display: 'none',
        },
      },
    },
  },
}));
