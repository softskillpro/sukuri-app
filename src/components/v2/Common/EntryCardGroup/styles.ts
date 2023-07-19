import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const EntryCardGroupContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  width: '100%',
  padding: 10,
  borderRadius: 15,
  border: `1px solid ${theme.palette.border.dark}`,
  background: theme.palette.secondary.light,
  boxShadow: theme.palette.shadow.main,

  '.entry-card-title': {
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
    padding: '10px 25px',
    borderRadius: 10,
    height: 50,
    border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
    // background: theme.palette.secondary.dark,
    boxShadow: theme.palette.shadow.main,
    backdropFilter: 'blur(10px) brightness(120%)',
    backgroundBlendMode: 'overlay',
  },

  '.entry-card-body': {
    width: '100%',
    flexDirection: 'column',
    gap: 5,
  },

  '.view-all-btn': {
    marginTop: 5,
  },

  [theme.breakpoints.down('xl')]: {
    '.entry-card-body': {
      flexDirection: 'row',
    },

    '.view-all-btn': {
      marginTop: 0,
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.entry-card-body': {
      flexDirection: 'column',
    },
  },
}));
