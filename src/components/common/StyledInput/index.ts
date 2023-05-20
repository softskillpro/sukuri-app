import { styled } from '@mui/material/styles';

const StyledInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: '8px 12px',
  background: theme.palette.white.main,
  borderBottom: `4px solid ${theme.palette.border.light}`,
  boxShadow: theme.palette.shadow2.main,
  borderRadius: 5,
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  outline: 'none',
}));

export default StyledInput;
