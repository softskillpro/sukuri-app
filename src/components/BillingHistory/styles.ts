import { FlexBox } from '@/components/Common/FlexBox';
import { styled } from '@mui/material/styles';

export const BillingHistoryContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 45,
  margin: '22px 0',
  padding: '70px 80px',

  '.tx-table-wrapper': {
    width: '100%',
    overflow: 'auto',
    zIndex: 3,

    '.tx-table': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 13,
      width: '100%',
      minWidth: 700,

      '.tx-th, .tx-tr': {
        display: 'grid',
        gridTemplateColumns: '2fr 2fr 2.5fr 5.5fr',
        width: '100%',
      },

      '.tx-tb': {
        width: '100%',

        '.tx-tr': {
          marginBottom: 8,
          padding: '5px 0',
          borderBottom: '1px solid #F4F4F4',
        },
      },
    },
  },

  '.view-more-btn': {
    margin: '0 auto',
    zIndex: 10,
    cursor: 'pointer',
  },

  [theme.breakpoints.down('lg')]: {
    padding: '70px 60px',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    padding: '70px 40px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '40px 24px',
  },
}));
