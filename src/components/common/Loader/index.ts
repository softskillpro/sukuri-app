import { styled, CircularProgress } from '@mui/material';

const Loader = styled(CircularProgress)<{ small?: string }>(({ small }) => ({
  width: small === 'true' ? '18px !important' : 40,
  height: small === 'true' ? '18px !important' : 40,
  marginLeft: small === 'true' ? 8 : 0,
}));

export default Loader;
