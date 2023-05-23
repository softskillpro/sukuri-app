import { styled } from '@mui/material/styles';

export const AutoGrid = styled('div')<{ width?: number }>(
  ({ width = 390 }) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${width}px, 1fr))`,
    gap: 20,
    alignItems: 'center',
    justifyItems: 'center',
  }),
);
