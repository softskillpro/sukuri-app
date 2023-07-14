import { styled } from '@mui/material/styles';

export const StyledButton = styled('button')(() => ({
  display: 'flex',
  alignItems: 'center',
  height: 30,
  padding: '0px 60px',
  background: 'rgba(21, 109, 46, 0.80)',
  border: '1px solid rgba(255, 255, 255, 0.20)',
  borderRadius: 10,
  textTransform: 'uppercase',
  color: '#fff',
  cursor: 'pointer',
}));
