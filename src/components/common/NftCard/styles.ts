import Link from 'next/link';
import { styled } from '@mui/material/styles';

export const NftCardContainer = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: 320,
  maxWidth: 320,
  minWidth: 320,
  background: theme.palette.bgGradient.light,
  borderRadius: 5,
  textDecoration: 'none',

  img: {
    borderRadius: '5px 5px 0px 0px',
    width: 320,
    userSelect: 'none',
    WebkitUserSelect: 'none',
    WebkitUserDrag: 'none',
    KhtmlUserDrag: 'none',
    MozUserDrag: 'none',
    OUserDrag: 'none',
    userDrag: 'none',
  },

  [theme.breakpoints.down(450)]: {
    width: 310,

    img: { width: 310 },
  },
}));
