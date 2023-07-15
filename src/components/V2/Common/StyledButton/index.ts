import Button, { ButtonProps } from '@mui/material/Button';
import { Theme, styled } from '@mui/material/styles';

export interface StyledButtonProps extends ButtonProps {
  variants?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'Navigation' | 'Positive' | 'Negative' | 'Unavailable';
  theme?: Theme;
}

export const StyledButton = styled(Button)<StyledButtonProps>(
  ({ variants = 'md', status = 'Positive', theme }: StyledButtonProps) => ({
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
    borderRadius: 10,
    textTransform: 'uppercase',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'var(--Montserrat)',
    fontvariants: variants === 'sm' ? 12 : 18,
    fontWeight: 600,
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
  }),
);
