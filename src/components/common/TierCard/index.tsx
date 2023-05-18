import Web3 from 'web3'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FlexBox from '@/components/common/FlexBox'
import { StateButton } from '@/components/common/StyledButton'
import type { NFTType } from '@/interface/Nft.interface'
import { TierCardContainer, PriceCard } from './styles'

interface TierCardProps {
  nft?: NFTType
  handleClick: () => void
}

const TierCard = ({ nft, handleClick }: TierCardProps) => {
  return (
    <FlexBox sx={{ flexDirection: 'column', width: 'fit-content' }}>
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
          {nft?.tiers[0]?.name}
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
            {nft?.tiers[0]?.descripton}
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
            {nft?.tiers[0]?.features.map((content, id) => (
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
        {nft?.tiers[0]?.unit === 'wei' ? (
          <Typography
            variant='h2'
            color='text.secondary'
            mt={5}
            textAlign='center'
          >
            {nft?.tiers[0]?.price && Web3.utils.fromWei(nft?.tiers[0]?.price)}Ξ
          </Typography>
        ) : (
          <>
            <Typography
              variant='h3'
              color='text.secondary'
              mt={3}
              textAlign='center'
            >
              {nft?.tiers[0]?.price}
            </Typography>
            <Typography
              variant='custom1'
              color='text.secondary'
              fontWeight={700}
              textAlign='center'
              mb={1}
            >
              {nft?.tiers[0]?.unit}
            </Typography>
          </>
        )}

        <Typography variant='custom1' color='text.secondary' textAlign='center'>
          per month
        </Typography>

        <StateButton sx={{ marginTop: 1.5 }} onClick={handleClick}>
          Subscribe
        </StateButton>
      </PriceCard>
    </FlexBox>
  )
}

export default TierCard
