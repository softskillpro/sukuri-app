import { styled } from '@mui/material';

export const StyledButton = styled('button')<{
  variant?: 'Primay' | 'Secondary';
}>(({ theme, variant = 'Primary' }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: variant === 'Primay' ? '12px 30px' : '15px 38px',
  borderRadius: 6,
  border: 'none',
  background: theme.palette.buttonGradient.main,
  boxShadow: theme.palette.boxShadow.main,
  backdropFilter: 'blur(20px)',
  cursor: 'pointer',
  fontSize: variant === 'Primay' ? 12.5 : 14,
  fontWeight: 700,
  fontFamily: 'var(--Inter)',
  color: theme.palette.text.primary,

  ':hover': {
    background: theme.palette.buttonGradient.light,
  },

  ':disabled': {
    background: theme.palette.buttonGradient.dark,
  },

  [theme.breakpoints.down('md')]: {
    fontSize: variant === 'Primay' ? 10 : 14,
    fontWeight: 600,
    padding: variant === 'Primay' ? '9px 24px' : '15px 38px',
  },
}));

export const SecondaryButton = styled(StyledButton)(({ theme }) => ({
  padding: '15px 38px',
  border: '1px solid white',
  background: 'transparent',
  backdropFilter: 'blur(5px)',
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 700,
  fontFamily: 'var(--Inter)',
  color: theme.palette.text.primary,

  ':hover': {
    border: '1px solid #AAA',
    background: 'transparent',
  },

  [theme.breakpoints.down('md')]: {
    padding: '15px 32px',
    fontSize: 14,
  },
}));

export const TertiaryButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '15px 38px',
  borderRadius: 7,
  border: 'none',
  background: theme.palette.topProductsGradient.light,
  boxShadow: theme.palette.boxShadow.main,
  backdropFilter: 'blur(5px)',
  cursor: 'pointer',
  fontSize: 18,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
  color: theme.palette.text.primary,

  ':hover': {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.20) 100%)',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
}));
