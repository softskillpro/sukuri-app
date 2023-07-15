import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const ProjectInfoCardContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  flexDirection: 'column',
  borderRadius: 10,
  border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
  background: 'rgba(255, 255, 255, 0.40)',
  backgroundBlendMode: 'overlay',
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(2.5px)',

  '.project-info-bg': {
    width: '100%',
    // minWidth: '100%',
    height: 240,
    borderRadius: 10,
    border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
  },

  '.social-group': {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 10,
    borderRadius: 5,
    border: `1px solid ${theme.palette.border.main}`,
    background: 'rgba(0, 0, 0, 0.50)',
    boxShadow: theme.palette.shadow.main,
    backdropFilter: 'blur(2.5px)',

    a: {
      img: {
        width: 'auto',
      },

      ':not(:last-of-type)': {
        marginRight: 15,
      },
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

        '.price-card': {
          width: 'calc((100% - 2px - 48px)/3)',
          flexDirection: 'column',
          borderRadius: 5,

          '.price-card-value': {
            width: '100%',
            padding: '10px 30px',
            backgroundColor: theme.palette.blue.main,
            borderRadius: '5px 5px 0 0',
          },

          '.price-card-type': {
            width: '100%',
            backgroundColor: theme.palette.blue.dark,
            borderRadius: '0 0 5px 5px',
          },
        },
      },
    },
  },

  [theme.breakpoints.down('xl')]: {
    '.price-card-value': {
      padding: '10px !important',
    },
  },
}));
