import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const TierCardContainer = styled(FlexBox)(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 170,
  width: '100%',
  borderRadius: 10,
  border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(30px) brightness(120%)',

  '.tier-card-header': {
    flexDirection: 'column',
    width: '100%',
    padding: 12,
    borderRadius: '10px 10px 0 0',
  },

  '.tier-card-body': {
    flexDirection: 'column',
    width: '100%',
    padding: 12,

    '.tier-card-content': {
      width: '100%',
      marginBottom: 12,
      padding: 10,
      borderRadius: 10,
      background: 'rgba(255, 255, 255, 0.10)',

      li: {
        '::marker': { fontSize: 12 },
      },
    },

    '.more-info-btn': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 12,
      padding: '5px 10px',
      borderRadius: '0px 5px 5px 5px',
      border: '1px solid rgba(255, 255, 255, 0.20)',
      background: theme.palette.blue.dark,
      color: '#fff',
      cursor: 'pointer',
      fontStyle: 'italic',
      fontSize: 12,
    },
  },

  '.tier-card-footer': {
    flexDirection: 'column',
    width: '100%',
    padding: 12,
    borderRadius: '0px 0px 10px 10px',
    background: theme.palette.blue.main,
  },

  [theme.breakpoints.down('xl')]: {
    '.tier-card-body': {
      padding: 0,

      '.tier-card-content': {
        width: '100%',
        marginBottom: 12,
        padding: 10,
        borderRadius: 0,
      },
    },

    '.tier-card-footer': {
      padding: '10px 15px',
    },
  },
}));
