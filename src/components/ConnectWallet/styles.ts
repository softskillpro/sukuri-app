import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const ConnectWalletContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  width: 350,
  marginLeft: 'auto',
  background: theme.palette.primary.main,
  boxShadow: theme.palette.shadow1.main,
  borderRadius: 5,

  '.wallet-helper': {
    flexDirection: 'column',
    width: '100%',
    marginTop: 24,
    padding: '14px 20px 12px',
    background: theme.palette.text1.main,
    borderRadius: '0px 0px 5px 5px',
  },
}));

export const StyledButton = styled('button')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: 280,
  padding: '10px 12.5px',
  background: theme.palette.bgGradient.main,
  boxShadow: theme.palette.shadow.contrastText,
  color: theme.palette.primary.main,
  borderRadius: 10,
  border: 'none',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: 20,
  lineHeight: '24px',

  ':not(:last-of-type)': {
    marginBottom: 14,
  },

  ':hover': {
    opacity: 0.8,
  },
}));
