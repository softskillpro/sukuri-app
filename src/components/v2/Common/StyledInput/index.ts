import { styled } from '@mui/material/styles';

const StyledInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: 30,
  padding: '4px 16px',
  background: 'rgba(255, 255, 255, 0.20)',
  color: '#fff',
  borderRadius: 5,
  border: 'none',
  outline: 'none',
  fontSize: theme.typography.input.fontSize,
  lineHeight: 1,
  fontWeight: 400,
  fontFamily: 'var(--Montserrat)',
  textAlign: 'center',
}));

export default StyledInput;
