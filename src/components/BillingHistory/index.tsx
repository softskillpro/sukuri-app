import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { BillingHistoryContainer } from './styles';
import { txTableHeader, txData } from '@/constants';
import type { Transaction } from '@/types';

const BillingHistory = () => {
  return (
    <BillingHistoryContainer>
      <HeroGlow />

      <Typography variant='h5'>Billing History</Typography>

      <section className='tx-table-wrapper'>
        <FlexBox className='tx-table'>
          <div className='tx-th'>
            {txTableHeader.map((header) => (
              <Typography key={header} variant='bodyBoldMobile'>
                {header}
              </Typography>
            ))}
          </div>

          <div className='tx-tb'>
            {txData.map((tx: Transaction) => (
              <div key={`tx-${tx.tier}`} className='tx-tr'>
                <Typography variant='body3'>{tx.tier}</Typography>
                <Typography variant='body3'>{tx.amount}</Typography>
                <Typography variant='body3'>{tx.date}</Typography>
                <Typography variant='body3'>{tx.tx}</Typography>
              </div>
            ))}
          </div>
        </FlexBox>
      </section>

      <Typography
        variant='bodyBoldMobile'
        component='div'
        textAlign='center'
        className='view-more-btn'
      >
        View more
      </Typography>
    </BillingHistoryContainer>
  );
};

export default BillingHistory;
