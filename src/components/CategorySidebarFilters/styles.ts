import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SideBarWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '300px',
  width: '100%',
  borderRadius: '7px',
  padding: '28px 0px',
  border: `2px solid ${theme.palette.buttonGradient.contrastText}`,
  minHeight: '75vh',
}));

export const StatusButton = styled('button')<{ active: boolean }>(
  ({ active, theme }) => ({
    padding: '12px 20px',
    borderRadius: 7,
    background: active
      ? theme.palette.topProductsGradient.light
      : theme.palette.topProductsGradient.main,
    border: 'none',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 700,
    color: 'white',
    whiteSpace: 'nowrap',
  }),
);
