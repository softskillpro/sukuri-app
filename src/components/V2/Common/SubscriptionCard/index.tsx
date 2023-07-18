import Typography from '@mui/material/Typography';
import { SubscriptionCardContainer } from './styles';

interface SubscriptionCardProps {
  price: string;
  period: string;
  variant?: 'primary' | 'secondary';
  orientation?: 'horizontal' | 'vertical';
}

const SubscriptionCard = ({
  price,
  period,
  variant = 'primary',
  orientation = 'vertical',
}: SubscriptionCardProps) => {
  return (
    <SubscriptionCardContainer variant={variant} orientation={orientation}>
      <Typography
        variant='labelMd'
        fontWeight={600}
        lineHeight={1}
        textTransform='uppercase'
        component='div'
        className='subscription-label price-label'
      >
        {variant === 'primary' ? price : period}
      </Typography>
      <Typography
        variant='labelMd'
        fontWeight={600}
        lineHeight={1}
        textTransform='uppercase'
        component='div'
        className='subscription-label period-label'
      >
        {variant === 'primary' ? period : price}
      </Typography>
    </SubscriptionCardContainer>
  );
};

export default SubscriptionCard;
