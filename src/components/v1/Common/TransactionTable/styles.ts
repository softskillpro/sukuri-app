import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const StyledPaper = styled(Paper)(() => ({
  background: 'transparent',
  borderRadius: 10,
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: theme.palette.border.contrastText,
    backgroundBlendMode: 'overlay',
    backdropFilter: 'blur(2.5px)',
    color: theme.palette.common.white,
    boxShadow: theme.palette.shadow.main,

    ':nth-of-type(1)': {
      borderRadius: '10px 0 0 0',
    },

    ':nth-of-type': {
      borderRadius: '0 10px 0 0',
    },
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },

  '&:nth-of-type(even)': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
