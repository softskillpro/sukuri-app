import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export interface StyledButtonProps extends ButtonProps {
  variants?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'Navigation' | 'Positive' | 'Negative' | 'Unavailable';
}

export const StyledButton = styled(Button)<StyledButtonProps>(
  ({ variants = 'md', status = 'Positive', theme }: any) => ({
    display: 'flex',
    alignItems: 'center',
    padding:
      variants === 'xl'
        ? '15px 40px'
        : variants === 'lg'
        ? '10px 15px'
        : variants === 'md'
        ? '5px 10px'
        : '5px 10px',
    borderRadius:
      variants === 'xl'
        ? 10
        : variants === 'lg'
        ? 10
        : variants === 'md'
        ? 7
        : 5,
    textTransform: 'uppercase',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'var(--Montserrat)',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1,
    backgroundColor:
      status === 'Navigation'
        ? theme?.palette.blue.dark
        : status === 'Positive'
        ? theme?.palette.green.main
        : status === 'Negative'
        ? theme?.palette.hardNegative.main
        : theme?.palette.unavailableBg.main,
    border: `1px solid ${theme?.palette.lightInternalGlassBorder.main}`,

    ':disabled': {
      backgroundColor: theme?.palette.unavailableBg.main,
      cursor: 'not-allowed',
      color: '#fff',
    },

    ':hover': {
      backgroundColor:
        status === 'Navigation'
          ? theme?.palette.blue.dark
          : status === 'Positive'
          ? theme?.palette.green.main
          : status === 'Negative'
          ? theme?.palette.hardNegative.main
          : theme?.palette.unavailableBg.main,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  }),
);
