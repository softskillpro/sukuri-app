import { styled } from '@mui/material/styles';

export const ToggleButtonContainer = styled('div')<{ active: string }>(
  ({ active }) => ({
    position: 'relative',
    width: 54,
    height: 24,
    borderRadius: 14,
    border: ' 1px solid #8E919B',
    cursor: 'pointer',

    svg: {
      position: 'absolute',
      top: 2,
      left: active === 'true' ? 'auto' : 2,
      right: active === 'true' ? 2 : 'auto',
    },
  }),
);
