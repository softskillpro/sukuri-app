import { styled } from '@mui/material/styles';
import { Layout3 } from '@/components/common/PageLayout';

export const GalleryContainer = styled(Layout3)(({ theme }) => ({
  '.gallery': {
    height: 260,
    borderRadius: 5,
    background: theme.palette.text.primary,

    ':not(:last-of-type)': {
      marginRight: 20,
    },
  },
}));
