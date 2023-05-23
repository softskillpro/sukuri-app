import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const NftCardContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  width: 320,
  maxWidth: 320,
  minWidth: 320,
  background: theme.palette.bgGradient.light,
  borderRadius: 5,

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
