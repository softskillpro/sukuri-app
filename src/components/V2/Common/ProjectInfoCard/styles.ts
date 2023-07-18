import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const ProjectInfoCardContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  flexDirection: 'column',
  height: 'fit-content',
  borderRadius: 10,
  border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
  // background: 'rgba(255, 255, 255, 0.40)',
  backgroundBlendMode: 'overlay',
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(2.5px)',

  '.project-info-card-header': {
    display: 'grid',
    gridTemplateColumns: '1fr',

    '.project-info-img-social-wrapper': {
      position: 'relative',

      '.project-info-bg': {
        width: '100%',
        height: 240,
        objectFit: 'cover',
        borderRadius: 10,
        border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
      },

      '.project-info-social-group': {
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 10,
      },
    },

    '.project-info-title': {
      padding: '10px 15px',
    },
  },

  '.project-info-card-body': {
    flexDirection: 'column',
    width: '100%',
    padding: '10px 15px',

    '.price-card-group': {
      flexDirection: 'column',
      width: '100%',
      padding: 10,
      borderRadius: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.30)',
      boxShadow: theme.palette.shadow.main,
      backdropFilter: 'blur(2.5px)',

      '.price-card-wrapper': {
        width: '100%',
        marginBottom: 5,
        gap: 16,

        '.project-subscription-card': {
          width: '100%',
        },
      },
    },
  },

  [theme.breakpoints.down('xl')]: {
    '.project-info-card-header': {
      gridTemplateColumns: '8fr 2fr',

      '.project-info-img-social-wrapper': {
        '.project-info-social-group': {
          position: 'absolute',
          top: 'auto',
          bottom: 5,
          right: 5,
          padding: 10,
        },
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.project-info-card-header': {
      gridTemplateColumns: '1fr',
    },
  },
}));
