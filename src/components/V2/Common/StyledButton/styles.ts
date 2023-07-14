import { styled } from '@mui/material/styles';

export interface StyledButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'Navigation' | 'Positive' | 'Negative' | 'Unavailable';
  type?: 'button|submit|reset';
  disabled?: boolean;
}

export const StyledButtonContainer = styled('button')(
  ({ size }: StyledButtonProps) => ({
    display: 'flex',
    alignItems: 'center',
    padding:
      size === 'xl'
        ? '15px 40px'
        : size === 'lg'
        ? '10px 15px'
        : size === 'md'
        ? '5px 10px'
        : '5px 10px',
    borderRadius: 10,
    textTransform: 'uppercase',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'var(--Montserrat)',
    fontSize: size === 'sm' ? 12 : 18,
    fontWeight: 600,
  }),
);
