import { styled } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { GlassMorph } from '@/components/Common/GlassMorph';

export const SubscriptionTierCardContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  justifyContent: 'space-between',
  padding: '24px 24px 24px 40px',
  borderRadius: 7,
  cursor: 'pointer',

  '.active-card': {
    position: 'absolute',
    right: 30,
    top: -22,
    padding: '5px 22px',
    borderRadius: 7,
    background: theme.palette.topProductsGradient.light,
    boxShadow: theme.palette.boxShadow.main,
    backdropFilter: 'blur(5px)',
  },

  '.membership-info': {
    gap: 20,
    width: '75%',

    '.membership-info-item': {
      width: 'calc((100% - 24px) / 2)',
      maxWidth: 130,
    },
  },

  '.membership-price': {
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '15%',
  },

  [theme.breakpoints.down('md')]: {
    padding: '20px 15px 20px 25px',

    '.membership-info': {
      gap: 15,

      '.membership-info-item': {
        width: 'calc((100% - 18px) / 2)',
      },
    },
  },
}));

export const StyledDivider = styled('div')(({ theme }) => ({
  width: 4,
  height: 60,
  background: theme.palette.dividerBg.main,

  [theme.breakpoints.down('md')]: {
    width: 3,
    height: 48,
  },
}));

export const SubscriptionTierGlassMorph = styled(GlassMorph)<{
  active?: string;
}>(({ active }) => ({
  borderRadius: 6,
  opacity: active === 'true' ? 1 : 0.2,
}));
