import { useCallback, useState } from 'react';
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

const points = '124';
const rank = '46';
const rewards = '0.03';

const LeaderboardHero = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const { isConnected } = useAccount();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return isConnected ? (
    <LeaderboardHeroContainer>
      <HeroGlow />

      <section className='user-info'>
        <Typography variant={matches ? 'h2' : 'h1Mobile'} mb={2}>
          Hello
          <br />
          Fido
        </Typography>

        <Typography variant={matches ? 'body1' : 'body1Mobile'}>
          View your point and rank status on the leaderboard
        </Typography>
      </section>

      <section className='leaderboard-info'>
        <LeaderboardInfoGlow />

        <LeaderboardTag icon={TrophyIcon} title='Your Points' value={points} />

        {/* <LeaderboardDivider orientation='vertical' flexItem /> */}

        <LeaderboardTag icon={RankIcon} title='Your Rank' value={rank} />

        {/* <LeaderboardDivider orientation='vertical' flexItem /> */}

        <LeaderboardTag icon={StarIcon} title='Rewards'>
          <PriceTag price={rewards} />
        </LeaderboardTag>

        {/* <LeaderboardDivider orientation='vertical' flexItem /> */}

        <div className='clain-reward'>
          {matches && <PriceTag price={rewards} />}

          <TertiaryButton>Claim rewards</TertiaryButton>
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

      <ConnectWalletModal open={open} handleClose={handleClose} />
    </>
  );
};

export default LeaderboardHero;
