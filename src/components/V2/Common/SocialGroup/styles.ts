import Popper from '@mui/material/Popper';
import { styled } from '@mui/material/styles';
import FlexBox from '@/components/V2/Common/FlexBox';

export const SocialGroupContainer = styled('div')(() => ({
  '.link-button': {
    display: 'flex',
    alignItems: 'center',
    width: 81,
    padding: 10,
    borderRadius: 10,
    border: 'none',
    background: 'rgba(0, 0, 0, 0.50)',
    cursor: 'pointer',
    color: '#fff',
    fontSize: 12,
    fontWeight: 600,
    fontFamily: 'var(--Montserrat)',
    textTransform: 'uppercase',

    svg: {
      marginLeft: 10,
    },
  },
}));

export const SocialGroupWrapper = styled(FlexBox)<{
  variant?: 'sm' | 'md';
}>(({ variant, theme }) => ({
  flexDirection: variant === 'md' ? 'row' : 'column',
  background: theme.palette.primary.contrastText,
  borderRadius: variant === 'md' ? 5 : 10,
  padding: variant === 'md' ? '10px 15px' : 5,
  border: `1px solid ${theme.palette.border.main}`,

  a: {
    ':not(:last-of-type)': {
      margin: variant === 'md' ? '0 20px 0 0' : '0 0 10px 0',
    },
  },

  [theme.breakpoints.down('xl')]: {
    padding: variant === 'md' ? '5px 10px' : 5,
  },
}));

export const SocialGroupPopper = styled(Popper)(({ theme }) => ({
  width: 80,
  margin: '12px 0 !important',
  zIndex: 1000,
  background: theme.palette.primary.contrastText,
  borderRadius: 10,
}));
