import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import FlexBox from '@/components/v2/Common/FlexBox';
import StatusHinter from '@/components/v2/Common/StatusHinter';
import SubscriptionCard from '@/components/v2/Common/SubscriptionCard';
import { inter } from '@/components/v2/Common/CustomFont';
import ManageIcon from '@/components/v2/svgs/ManageIcon';
import { SubscriptionEntryCardContainer } from './styles';

const SubscriptionEntryCard = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <SubscriptionEntryCardContainer>
      <FlexBox className='subscription-entry-header'>
        <Image
          src='/images/v2/subscription.png'
          width={300}
          height={200}
          alt='Subscription Img'
          className='subscription-entry-img'
        />

        <FlexBox className='subscription-entry-info'>
          <StatusHinter action='Active' />

          <Typography
            variant='productTitle'
            fontWeight={700}
            lineHeight={1}
            mt={2.25}
            textAlign='right'
            sx={{ fontFamily: inter.style.fontFamily }}
          >
            Sukuri Bail Fund
          </Typography>
        </FlexBox>

        <FlexBox className='subscription-card-wrapper'>
          <SubscriptionCard
            price='0.05Ξ'
            period='monthly'
            orientation={matches ? 'vertical' : 'horizontal'}
          />
        </FlexBox>
      </FlexBox>

      <FlexBox className='subscription-entry-body'>
        <IconButton>
          <ManageIcon />
        </IconButton>

        <SubscriptionCard
          price='0.05Ξ'
          period='secondary'
          variant='secondary'
        />
      </FlexBox>
    </SubscriptionEntryCardContainer>
  );
};

export default SubscriptionEntryCard;
