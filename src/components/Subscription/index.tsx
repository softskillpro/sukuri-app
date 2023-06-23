import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import { Layout1, Layout2 } from '@/components/common/PageLayout';
import TierCard from '@/components/common/TierCard';
import FlexBox from '@/components/common/FlexBox';
import type { NFTType } from '@/interface/Nft.interface';
import axios from 'axios';

interface SubscriptionProps {
  project?: NFTType;
}

const Subscription = ({ project }: SubscriptionProps) => {
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const fetchData = async (_projectId: string) => {
      try {
        const response = await fetch(`/api/subscribe?projectId=${_projectId}`);
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data = await response.json();
        setIsSubscribed(data.isSubscribed);
      } catch (error) {
        console.log(error);
      }
    };

    if (project) {
      fetchData(project.id);
    }
  }, [project]);

  const handleClick = useCallback(
    (tierId: number | undefined) => {
      // Make a POST request to your subscription API
      if (!tierId) return;

      const tierIdNum = Number(tierId);

      setLoading(true);

      const subscription = axios
        .post('/api/subscribe', {
          projectId: project?.id,
          tierId: tierIdNum,
        })
        .then((response) => {
          setIsSubscribed(true);
          console.log(response.data); // log the server response
        })
        .catch((error) => {
          console.error(error); // log any error
        })
        .finally(() => {
          setLoading(false);
        });

      toast.promise(subscription, {
        pending: 'Processing now...',
        success: 'Subscription completed successfully!',
        error: 'Subscription failed!',
      });
    },
    [project?.id],
  );

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
          {project &&
            project.tiers.map((tier) =>
              tier.id ? (
                <TierCard
                  key={tier.id}
                  tier={tier}
                  loading={loading}
                  isSubscribed={isSubscribed}
                  handleClick={() => handleClick(tier.id)}
                />
              ) : null,
            )}
        </FlexBox>
      </Layout1>
    </>
  );
};

export default Subscription;
