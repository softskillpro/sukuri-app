import { styled } from '@mui/material/styles';
import { FlexBox } from '@/components/Common/FlexBox';

export const CurrencySwitcherContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  width: 160,
  height: 42,
  borderRadius: 7,

  '.currency-switcher-glow': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 7,
    opacity: 0.2,
    background: theme.palette.topProductsGradient.light,
    zIndex: -50,
  },
}));

export const CurrencyButton = styled('button')<{ active: boolean }>(
  ({ active, theme }) => ({
    width: '50%',
    height: 42,
    border: 'none',
    cursor: 'pointer',
    background: active
      ? theme.palette.topProductsGradient.light
      : 'transparent',
    borderRadius: 7,
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '150.5%',
    letterSpacing: '-0.32px',
    fontFamily: 'var(--Inter)',
    color: theme.palette.white.main,
  }),
);
