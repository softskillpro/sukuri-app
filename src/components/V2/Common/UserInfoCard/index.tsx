import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import FlexBox from '@/components/v2/Common/FlexBox';
import { StyledDivider } from '@/components/v2/Common/StyledDivider';
import TokenCardGroup from '@/components/v2/Common/TokenCardGroup';
import { UserInfoCardContainer } from './styles';

interface UserInfoCardProps {
  className?: string;
}

const UserInfoCard = ({ className = 'user-info-card' }: UserInfoCardProps) => {
  const matches = useMediaQuery('(min-width:1400px)');
  const mobile = useMediaQuery('(min-width:600px)');

  return (
    <UserInfoCardContainer className={className}>
      <FlexBox className='user-info-item'>
        <Typography
          variant='labelMd'
          lineHeight={1}
          textTransform='uppercase'
          mb='5px'
        >
          welcome
        </Typography>

        <Typography variant='labelLg' lineHeight={1} textTransform='uppercase'>
          spuro
        </Typography>
      </FlexBox>

      {matches && <StyledDivider sx={{ my: '10px' }} />}

      <FlexBox className='user-info-item'>
        <Typography
          variant='labelMd'
          lineHeight={1}
          textTransform='uppercase'
          textAlign='center'
          mb='5px'
        >
          active subscriptions
        </Typography>

        <Typography variant='userBar' lineHeight={1} textTransform='uppercase'>
          5
        </Typography>
      </FlexBox>

      {matches && <StyledDivider sx={{ my: '10px' }} />}

      <FlexBox className='user-info-item'>
        <Typography
          variant='labelMd'
          lineHeight={1}
          textTransform='uppercase'
          mb='5px'
        >
          monthly spend
        </Typography>

        <Typography
          variant='userBar'
          lineHeight={1}
          textTransform='uppercase'
          my='5px'
        >
          0.3Ξ
        </Typography>

        {mobile && (
          <TokenCardGroup
            variant='Horizontal'
            className='user-info-token-card-group'
          />
        )}
      </FlexBox>
    </UserInfoCardContainer>
  );
};

export default UserInfoCard;
