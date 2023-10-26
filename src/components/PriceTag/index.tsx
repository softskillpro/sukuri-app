import { Typography } from '@mui/material';
import { ETHIcon } from '@/components/Icons';
import { FlexBox } from '@/components/Common/FlexBox';

interface PriceTagProps {
  price: string;
  className?: string;
}

const PriceTag = ({ price, className }: PriceTagProps) => {
  return (
    <FlexBox className={className || 'price-tag'}>
      <ETHIcon sx={{ fontSize: 26 }} />

      <Typography variant='h3' ml={1}>
        {price}
      </Typography>
    </FlexBox>
  );
};

export default PriceTag;
