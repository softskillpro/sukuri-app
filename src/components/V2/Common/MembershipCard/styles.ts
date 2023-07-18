import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const MembershipCardContainer = styled(FlexBox)<any>(
  ({ lengs, theme }: any) => ({
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 7,
    border: `1px solid ${theme.palette.border.main}`,
    boxShadow: theme.palette.shadow.main,

    '.membership-header': {
      width: '100%',
      padding: '7px 15px',
      borderRadius: '5px 5px 0px 0px',
      background:
        lengs === '1' ? theme.palette.green.main : theme.palette.blue.main,
      [theme.breakpoints.down('lg')]: {
        padding: '5px 5px',
      },
        [theme.breakpoints.down('md')]: {
          padding: '3px 3px',
        }
    },

    '.membership-price-card': {
      '.membership-price-value': {
        padding: '7px 15px',
        background:
          lengs === '1' ? theme.palette.green.light : theme.palette.blue.light,
        [theme.breakpoints.down('lg')]: {
          padding: '5px 5px',
        },
        [theme.breakpoints.down('md')]: {
          padding: '3px 3px',
        }
      },
      '.membership-price-state': {
        padding: '7px 15px',
        background:
          lengs === '1' ? theme.palette.green.dark : theme.palette.blue.dark,
        [theme.breakpoints.down('lg')]: {
          padding: '5px 5px',
        },
        [theme.breakpoints.down('md')]: {
          padding: '3px 3px',
        }
      },
    },
  }),
);
