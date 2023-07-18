import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const ActionTogglerContainer = styled(FlexBox)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    flexDirection: 'column',
  },
}));

export const ActionTogglerButton = styled('button')<{ active: string }>(
  ({ active, theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 20,
    padding: 5,
    background:
      active === 'true'
        ? theme.palette.green.main
        : theme.palette.secondary.main,
    fontSize: theme.typography.labelSm.fontSize,
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: 1,
    color: theme.palette.text.primary,
    cursor: 'pointer',

    ':nth-of-type(1)': {
      borderRadius: '5px 0 0 5px',
      borderTop: `1px solid ${theme.palette.green.main}`,
      borderBottom: `1px solid ${theme.palette.green.main}`,
      borderLeft: `1px solid ${theme.palette.green.main}`,
      borderRight: 'none',
    },

    ':nth-of-type(2)': {
      borderRadius: '0 5px 5px 0',
      borderTop: `1px solid ${theme.palette.green.main}`,
      borderBottom: `1px solid ${theme.palette.green.main}`,
      borderRight: `1px solid ${theme.palette.green.main}`,
      borderLeft: 'none',
    },

    [theme.breakpoints.down('xl')]: {
      ':nth-of-type(1)': {
        borderRadius: '5px 5px 0 0',
        borderTop: `1px solid ${theme.palette.green.main}`,
        borderBottom: 'none',
        borderRight: `1px solid ${theme.palette.green.main}`,
        borderLeft: `1px solid ${theme.palette.green.main}`,
      },

      ':nth-of-type(2)': {
        borderRadius: '0 0 5px 5px',
        borderTop: 'none',
        borderBottom: `1px solid ${theme.palette.green.main}`,
        borderRight: `1px solid ${theme.palette.green.main}`,
        borderLeft: `1px solid ${theme.palette.green.main}`,
      },
    },
  }),
);
