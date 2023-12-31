import { useCallback, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { TertiaryButton } from '@/components/Common/StyledButton';
import LeaderboardTag from '@/components/LeaderboardTag';
import ConnectWalletModal from '@/components/ConnectWalletModal';
import { TrophyIcon, RankIcon, StarIcon } from '@/components/Icons';
import {
  LeaderboardHeroContainer,
  LeaderboardInfoGlow,
  // LeaderboardDivider,
  ConnectWalletNotify,
} from './styles';
import PriceTag from '../PriceTag';
import axios from 'axios';
import { readContract, writeContract } from '@wagmi/core';
import ABI from '@/contract/primeAbi.json';
import { formatEther } from 'viem';

const LeaderboardHero = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [points, setPoints] = useState<number>(0);
  const [rank, setRank] = useState<number>(0);
  const [rewards, setClaim] = useState<string>('0');

  const { isConnected, address } = useAccount();

  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (isConnected) setConnected(isConnected);
  }, [isConnected]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClaim = useCallback(() => {
    if (isConnected && address && parseFloat(rewards) > 0) {
      writeContract({
        address: `${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}` as `0x${string}`,
        abi: ABI,
        functionName: 'claimFees',
      });
    }
  }, [isConnected, address, rewards]);

  useEffect(() => {
    if (isConnected && address) {
      readContract({
        address: `${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}` as `0x${string}`,
        abi: ABI,
        functionName: 'checkClaim',
        args: [address],
      }).then((res) => {
        setClaim(formatEther(res as bigint));
      });
    }
  }, [isConnected, address]);

  useEffect(() => {
    if (isConnected && address) {
      axios
        .get('/api/leaderboard', {
          params: {
            address: address,
          },
        })
        .then((result) => {
          const data = result.data;
          if (data.exists == false || data.should_update == true) {
            axios
              .post('/api/leaderboard', {
                address: address,
              })
              .then((res) => {
                const d = res.data;
                if (d.exists) {
                  axios
                    .get('/api/leaderboard', {
                      params: {
                        address: address,
                      },
                    })
                    .then((r) => {
                      const _d = r.data;
                      setPoints(_d.points);
                      setRank(_d.rank);
                    });
                }
              });
          } else {
            setPoints(data.points);
            setRank(data.rank);
          }
        });
    }
  }, [isConnected, address]);

  return connected ? (
    <LeaderboardHeroContainer>
      <HeroGlow />

      <section className='user-info'>
        <Typography variant={matches ? 'h2' : 'h1Mobile'} mb={2}>
          Welcome
          <br />
        </Typography>

        <Typography variant={matches ? 'body1' : 'body1Mobile'}>
          View your point and rank status on the leaderboard
        </Typography>
      </section>

      <section className='leaderboard-info'>
        <LeaderboardInfoGlow />

        <LeaderboardTag
          icon={TrophyIcon}
          title='Your Points'
          value={points.toString()}
        />

        {/* <LeaderboardDivider orientation='vertical' flexItem /> */}

        <LeaderboardTag
          icon={RankIcon}
          title='Your Rank'
          value={(rank + 1).toString()}
        />

        {/* <LeaderboardDivider orientation='vertical' flexItem /> */}

        <LeaderboardTag icon={StarIcon} title='Rewards'>
          <PriceTag price={rewards} />
        </LeaderboardTag>

        {/* <LeaderboardDivider orientation='vertical' flexItem /> */}

        <div className='clain-reward'>
          {matches && <PriceTag price={rewards} />}

          <TertiaryButton onClick={handleClaim}>Claim rewards</TertiaryButton>
        </div>
      </section>
    </LeaderboardHeroContainer>
  ) : (
    <>
      <ConnectWalletNotify>
        <HeroGlow />

        <Typography variant='body2' mb={5} maxWidth={328} textAlign='center'>
          Connect your wallet to view your points and rank on the leaderboard
        </Typography>

        <TertiaryButton onClick={handleOpen}>Connect Wallet</TertiaryButton>
      </ConnectWalletNotify>

      {open && <ConnectWalletModal open={open} handleClose={handleClose} />}
    </>
  );
};

export default LeaderboardHero;
