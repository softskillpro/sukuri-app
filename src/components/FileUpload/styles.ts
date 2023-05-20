import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const FileUploadContainer = styled(Box)(({ theme }) => ({
  '.upload-img-thumbnail': {
    justifyContent: 'center',
    padding: 50,
    background: theme.palette.white.main,
    boxShadow: theme.palette.shadow2.light,
    borderRadius: 5,
    cursor: 'pointer',
  },

  '.upload-img-preview': {
    width: '100%',
    height: 'auto',
    boxShadow: theme.palette.shadow2.light,
    borderRadius: 5,
  },
}));
