import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const MembershipCardContainer = styled(FlexBox)<any>(
  ({ lengs, theme }: any) => ({
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 5,
    border: `2px solid ${theme.palette.border.main}`,
    boxShadow: theme.palette.shadow.main,

    '.membership-header': {
      width: '100%',
      padding: '7px 15px',
      borderRadius: '5px 5px 0px 0px',
      background:
        lengs === '1' ? theme.palette.green.main : theme.palette.blue.main,
    },

    '.membership-price-card': {
      '.membership-price-value': {
        padding: '7px 15px',
        background:
          lengs === '1' ? theme.palette.green.light : theme.palette.blue.light,
      },
      '.membership-price-state': {
        padding: '7px 15px',
        background:
          lengs === '1' ? theme.palette.green.dark : theme.palette.blue.dark,
      },
    },
  }),
);
