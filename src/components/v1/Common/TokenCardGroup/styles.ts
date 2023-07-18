import { styled } from '@mui/material/styles';

export const TokenCardGroupContainer = styled('div')<any>(
  ({ variant, theme }: any) => ({
    display: variant === 'Vertical' ? 'block' : 'flex',
    width: 'fit-content',
    padding: variant === 'Vertical' ? 12 : 0,
    borderRadius: 5,
    border:
      variant === 'Vertical'
        ? `1px solid ${theme.palette.border.main}`
        : 'none',
    background: 'rgba(0, 0, 0, 0.50)',
    boxShadow: variant === 'Vertical' ? theme.palette.shadow.main : 'none',
    backdropFilter: 'blur(2.5px)',

    '.ETH-token': {
      margin: variant === 'Vertical' ? '0 0 5px 0' : '0 5px 0 0',
    },
  }),
);
