import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { inter } from '@/components/v2/Common/CustomFont';
import EtherscanIcon from '@/components/v2/svgs/EtherscanIcon';
import { StyledPaper, StyledTableCell, StyledTableRow } from './styles';

const headers = ['Amount', 'Tier', 'Date', 'Transaction'];

const transactions = [
  {
    id: '0',
    amount: '0.005Ξ',
    tier: '1',
    date: '03/01/2023',
    transaction: '0x1234567891234567891234567...',
  },
  {
    id: '1',
    amount: '0.005Ξ',
    tier: '1',
    date: '03/01/2023',
    transaction: '0x1234567891234567891234567...',
  },
  {
    id: '2',
    amount: '0.005Ξ',
    tier: '1',
    date: '03/01/2023',
    transaction: '0x1234567891234567891234567...',
  },
  {
    id: '3',
    amount: '0.005Ξ',
    tier: '1',
    date: '03/01/2023',
    transaction: '0x1234567891234567891234567...',
  },
  {
    id: '4',
    amount: '0.005Ξ',
    tier: '1',
    date: '03/01/2023',
    transaction: '0x1234567891234567891234567...',
  },
  {
    id: '5',
    amount: '0.005Ξ',
    tier: '1',
    date: '03/01/2023',
    transaction: '0x1234567891234567891234567...',
  },
];

export default function TransactionTable() {
  return (
    <TableContainer component={StyledPaper}>
      <Table sx={{ minWidth: 500 }} aria-label='transaction table'>
        <TableHead>
          <TableRow>
            {headers.map((header, id) => (
              <StyledTableCell
                key={`head-cell-${id}`}
                align={id === 0 ? 'left' : 'right'}
              >
                <Typography variant='labelMd' textTransform='uppercase'>
                  {header}
                </Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map((transaction) => (
            <StyledTableRow key={`transaction-${transaction.id}`}>
              <StyledTableCell component='th' scope='row'>
                <Typography
                  variant='paragraph'
                  style={{
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {transaction.amount}
                </Typography>
              </StyledTableCell>

              <StyledTableCell align='right'>
                <Typography
                  variant='paragraph'
                  style={{
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {transaction.tier}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Typography
                  variant='paragraph'
                  style={{
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {transaction.date}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Link
                  href={`https://etherscan.io/${transaction.transaction}`}
                  target='_blank'
                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Typography
                    variant='caption'
                    style={{
                      fontStyle: 'italic',
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {transaction.transaction}
                  </Typography>

                  <EtherscanIcon sx={{ ml: 1.25, fontSize: 17 }} />
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
