import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/v2/Common/FlexBox';

interface TokenCardProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

const TokenCard = ({
  children,
  active = false,
  className = 'token-card',
}: TokenCardProps) => {
  return (
    <FlexBox
      className={className}
      sx={{
        justifyContent: 'space-between',
        width: '90px',
        padding: '6px',
        borderRadius: '5px',
        border: (theme) => `1px solid ${theme.palette.border.main}`,
        background: (theme) => theme.palette.secondary.main,
      }}
    >
      <Typography variant='labelMd' textTransform='uppercase' lineHeight={1}>
        {children}
      </Typography>

      <FlexBox
        sx={{
          justifyContent: 'center',
          width: 17,
          height: 17,
          backgroundColor: (theme) => theme.palette.unavailableBg.main,
          borderRadius: '3px',
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            backgroundColor: (theme) =>
              active
                ? theme.palette.green.contrastText
                : theme.palette.unavailableBg.main,
            borderRadius: '2px',
          }}
        />
      </FlexBox>
    </FlexBox>
  );
};

export default TokenCard;
