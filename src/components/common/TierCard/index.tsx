import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import FlexBox from '@/components/common/FlexBox';
import { StateButton } from '@/components/common/StyledButton';
import type { TierType } from '@/interface/Nft.interface';
import { TierCardContainer, PriceCard } from './styles';
import formatUnits from '@/utils/formatUnits';

interface TierCardProps {
  tier: TierType;
  loading: boolean;
  isSubscribed: boolean;
  handleClick: (tierId: number | undefined) => void; // modify handleClick type
}

const TierCard = ({
  tier,
  loading,
  isSubscribed,
  handleClick,
}: TierCardProps) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <FlexBox
      sx={{ flexDirection: 'column', width: matches ? 'inherit' : '100%' }}
    >
      <TierCardContainer>
        <Typography
          variant='subtitle1'
          component='div'
          textAlign='center'
          mt={1.75}
          py={1.25}
          sx={{
            width: '100%',
            background: (theme) => theme.palette.white.main,
          }}
        >
          {tier.name}
        </Typography>

        <Box sx={{ width: 250, mt: 2.25 }}>
          <Typography
            variant='custom2'
            color='white.main'
            component='div'
            sx={{
              mb: 3,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            {tier.descripton}
          </Typography>

          <Typography
            variant='custom2'
            color='white.main'
            fontWeight={600}
            mb={1}
            component='div'
          >
            What’s included:
          </Typography>

          <ul style={{ margin: '9px 0 0', paddingLeft: 20 }}>
            {tier.features.map((content, id) => (
              <li
                key={`content-${id}`}
                style={{
                  fontSize: 14,
                  lineHeight: '17px',
                  color: '#fff',
                }}
              >
                <Typography
                  variant='custom2'
                  color='white.main'
                  textAlign='center'
                >
                  {content}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </TierCardContainer>

      <PriceCard>
        {tier.unit === 'wei' ? (
          <Typography
            variant='h2'
            color='text.secondary'
            mt={5}
            textAlign='center'
          >
            {formatUnits(tier.price, tier.unit)}Ξ
          </Typography>
        ) : (
          <>
            <Typography
              variant='h3'
              color='text.secondary'
              mt={3}
              textAlign='center'
            >
              {tier.price}
            </Typography>
            <Typography
              variant='custom1'
              color='text.secondary'
              fontWeight={700}
              textAlign='center'
              mb={1}
            >
              {tier.unit}
            </Typography>
          </>
        )}

        <Typography variant='custom1' color='text.secondary' textAlign='center'>
          per month
        </Typography>

        <StateButton
          disabled={loading}
          sx={{
            marginTop: 1.5,
            background: isSubscribed
              ? (theme) => theme.palette.btnGradient.dark
              : '',
          }}
          onClick={() => handleClick(tier.id)}
        >
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </StateButton>
      </PriceCard>
    </FlexBox>
  );
};

export default TierCard;
