import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

export const VerticalDivider = styled(Divider)(({ theme }) => ({
  height: 32,
  margin: '0 20px',
  border: `1px solid ${theme.palette.primary.main}`,
}));

export const HorizontalDivider = styled(Divider)(({ theme }) => ({
  width: '100%',
  borderBottom: `0.5px solid ${theme.palette.text1.main}`,
}));
