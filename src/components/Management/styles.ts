import { styled } from '@mui/material/styles';
import { FlexBox } from '@/components/Common/FlexBox';

export const ManagementContainer = styled(FlexBox)(() => ({
  justifyContent: 'space-between',
  padding: '7px 0',

  svg: {
    ':hover': {
      opacity: 0.7,
    },
  },

  '.see-all': {
    padding: '10px 24px',
    borderRadius: 9,
    border: '1.275px solid white',
    cursor: 'pointer',

    ':hover': {
      opacity: 0.7,
    },
  },
}));
