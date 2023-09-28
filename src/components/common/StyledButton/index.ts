import { styled } from '@mui/material';

export const StyledButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 30px',
  borderRadius: 6,
  border: 'none',
  background: theme.palette.buttonGradient.main,
  boxShadow: theme.palette.boxShadow.main,
  backdropFilter: 'blur(20px)',
  cursor: 'pointer',
  fontSize: 12.5,
  fontWeight: 700,
  fontFamily: 'var(--Inter)',
  color: theme.palette.text.primary,

  ':hover': {
    background: theme.palette.buttonGradient.light,
  },

  [theme.breakpoints.down('md')]: {
    fontSize: 10,
    fontWeight: 600,
    padding: '9px 24px',
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
