import { useCallback } from 'react';
import Typography from '@mui/material/Typography';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import { Layout1, Layout2 } from '@/components/common/PageLayout';
import TierCard from '@/components/common/TierCard';
import FlexBox from '@/components/common/FlexBox';
import type { NFTType } from '@/interface/Nft.interface';
import axios from 'axios'; // import axios to make HTTP requests

interface SubscriptionProps {
  nft?: NFTType;
  userId: string; // add user id
}

const Subscription = ({ nft }: SubscriptionProps) => {
  const handleClick = useCallback((tierId: number) => {
    // Make a POST request to your subscription API
    axios.post('/api/subscribe', {
      projectId: nft?.id,
      tierId
    }).then((response) => {
      console.log(response.data); // log the server response
    }).catch((error) => {
      console.error(error); // log any error
    });
  }, [nft?.id]);

  if (!nft) return null;

  return (
    <>
      <Layout2>
        <HorizontalDivider />

        <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
          Subscription Options
        </Typography>
      </Layout2>

      <Layout1 sx={{ mb: 6.25 }}>
        <FlexBox sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 2.5 }}>
          {nft.tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} handleClick={() => handleClick(tier.id)} />
          ))}
        </FlexBox>
      </Layout1>
    </>
  );
};

export default Subscription;
