import * as React from 'react';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: theme.spacing(1),
    minWidth: 230,
    borderRadius: 7,

    background:
      'var(--Pop-Up, linear-gradient(270deg, rgba(235, 242, 255, 0.09) 2.2%, rgba(200, 222, 255, 0.04) 95.12%), #252430)',
    backdropFilter: 'blur(5px)',
    boxShadow:
      'linear-gradient(270deg, rgba(235, 242, 255, 0.09) 2.2%, rgba(200, 222, 255, 0.04) 95.12%)',

    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      fontSize: 16,
      fontWeight: 700,

      '&:active': {
        background: theme.palette.topProductsGradient.light,
      },
    },
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 7,
  padding: '13.02px, 19.5px',
  background: theme.palette.topProductsGradient.main,
  color: 'white',
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: 700,
  textTransform: 'none',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between !important',
}));

export const StyledMenuItem = styled(MenuItem)<{ active: boolean }>(
  ({ theme, active }) => ({
    background: active
      ? theme.palette.topProductsGradient.light
      : 'transparent',
  }),
);
