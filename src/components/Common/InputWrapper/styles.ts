import { styled } from '@mui/material/styles';
import { FlexBox } from '@/components/Common/FlexBox';

export const InputWrapperContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',

  '.input-wrap': {
    position: 'relative',
    width: '100%',
    marginTop: 6,

    '.input-text': {
      width: '100%',
      padding: '13px 24px',
      outline: 'none',
      border: 'none',
      fontSize: 17,
      fontWeight: 400,
      lineHeight: '148%',
      letterSpacing: 0.17,
      fontFamily: 'var(--Inter)',
      background: 'transparent',
      color: 'white',
      borderRadius: 7,

      '::placeholder': {
        color: 'white',
        opacity: 0.2,
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '.input-wrap': {
      '.input-text': {
        fontSize: 14,
      },
    },
  },
}));
