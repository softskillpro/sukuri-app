import Typography from '@mui/material/Typography';
import { ProductContentCardContainer } from './styles';

interface ProductContentCardProps {
  title: string;
  children: React.ReactNode;
}

const ProductContentCard = ({ title, children }: ProductContentCardProps) => {
  return (
    <ProductContentCardContainer>
      <Typography
        variant='subHeading'
        textAlign='center'
        component='div'
        className='product-content-card-header'
      >
        {title}
      </Typography>

      <div className='product-content-card-body'>{children}</div>
    </ProductContentCardContainer>
  );
};

export default ProductContentCard;
