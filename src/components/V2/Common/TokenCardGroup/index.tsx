import TokenCard from '@/components/v2/Common/TokenCard';
import { TokenCardGroupContainer } from './styles';

export interface TokenCardGroupProps {
  variant?: 'Horizontal' | 'Vertical';
  className?: string;
}

const TokenCardGroup = ({
  variant = 'Vertical',
  className = 'token-card-group',
}: TokenCardGroupProps) => {
  return (
    <TokenCardGroupContainer variant={variant} className={className}>
      <TokenCard className='ETH-token'>ETH</TokenCard>
      <TokenCard active>usdc</TokenCard>
    </TokenCardGroupContainer>
  );
};

export default TokenCardGroup;
