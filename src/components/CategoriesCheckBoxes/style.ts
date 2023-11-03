import { styled } from '@mui/material/styles';
import { FormControlLabel } from '@mui/material';

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.accent.light,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '148%',
  letterSpacing: '0.16px',
}));
