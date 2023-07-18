import Image from 'next/image';
import Typography from '@mui/material/Typography';

import { TwitterCTAContainer, ContentWrapper } from './styles';
import { Button } from '@mui/material';
import { StyledButton } from '../Common/StyledButton';

const TwitterCTA = () => {
  return (
    <TwitterCTAContainer>
      <Typography variant='h4' align="center">
        Become an early adopter for rewards and perks.
      </Typography>
      <Typography variant="paragraph" align="center">
        For 1Ξ, mint a vip pass.
      </Typography>
      <StyledButton>
        Mint your VIP Pass
      </StyledButton>
      <Typography variant='paragraph' align="center">
        Follow on Twitter for updates.
      </Typography>
    </TwitterCTAContainer>
  );
};

export default TwitterCTA;
