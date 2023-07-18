import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const EntryCardContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  justifyContent: 'flex-end',
  width: '100%',
  height: 55,
  padding: '0px 10px',
  border: `1px solid ${theme.palette.border.contrastText}`,
  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
  borderRadius: 15,
  cursor: 'pointer',

  '.entry-card-img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 15,
  },

  [theme.breakpoints.down('xl')]: {
    height: 95,
  },

  [theme.breakpoints.down('sm')]: {
    height: 35,
  },
}));
