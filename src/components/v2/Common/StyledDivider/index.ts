import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

export const StyledDivider = styled(Divider)(({ theme }) => ({
  width: '100%',
  borderColor: theme.palette.white.main,
  backgroundBlendMode: 'overlay',
}));
