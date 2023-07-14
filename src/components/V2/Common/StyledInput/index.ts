import { styled } from '@mui/material/styles';

const StyledInput = styled('input')(() => ({
  width: '100%',
  height: 30,
  padding: '4px 16px',
  background: 'rgba(255, 255, 255, 0.20)',
  color: '#fff',
  borderRadius: 5,
  border: 'none',
  outline: 'none',
  fontSize: 14,
  lineHeight: '17px',
  fontWeight: 400,
  fontFamily: 'var(--Montserrat)',
  textAlign: 'center',
}));

export default StyledInput;
