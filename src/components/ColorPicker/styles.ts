import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const ColorPalettes = styled(Grid)(({ theme }) => ({
  position: 'relative',
  boxShadow: theme.palette.shadow.contrastText,
  borderRadius: 5,
}));

export const ColorPanel = styled(FlexBox)(() => ({
  width: '100%',
  height: 34,
  cursor: 'pointer',
}));
