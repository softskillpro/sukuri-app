import Popper from '@mui/material/Popper';
import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const SocialGroupContainer = styled('div')<{
  variant?: 'sm' | 'md';
}>(({ variant, theme }: any) => ({
  width: 'fit-content',
  padding: variant === 'md' ? 10 : 0,
  borderRadius: variant === 'md' ? 5 : 10,
  border: `1px solid ${theme.palette.border.main}`,
  background: 'rgba(0, 0, 0, 0.50)',

  '.link-button': {
    display: 'flex',
    alignItems: 'center',
    width: 81,
    padding: 10,
    borderRadius: 10,
    border: 'none',
    background: 'rgba(0, 0, 0, 0.50)',
    cursor: 'pointer',
    color: '#fff',
    fontSize: 12,
    fontWeight: 600,
    fontFamily: 'var(--Montserrat)',
    textTransform: 'uppercase',

    img: {
      marginLeft: 10,
    },
  },
}));

export const SocialGroupWrapper = styled(FlexBox)<{ open: boolean }>(
  ({ open }) => ({
    width: !open ? 203 : 'auto',
    flexDirection: !open ? 'row' : 'column',
    background: !open ? 'transparent' : 'rgba(0, 0, 0, 0.50)',
    borderRadius: 5,
    padding: !open ? 0 : '12px 0',

    a: {
      height: 19,
      margin: !open ? '0 15px 0 0' : '12px 0',

      img: {
        width: 'auto',
      },
    },
  }),
);

export const SocialGroupPopper = styled(Popper)(() => ({
  width: 81,
  margin: '12px 0 !important',
  zIndex: 1000,
  background: 'rgba(0, 0, 0, 0.50)',
  borderRadius: 5,
}));
