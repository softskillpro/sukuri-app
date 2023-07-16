import TokenCard from '@/components/v2/Common/TokenCard';
import { TokenCardGroupContainer } from './styles';

export interface TokenCardGroupProps {
  variant?: 'Horizontal' | 'Vertical';
}

const TokenCardGroup = ({ variant = 'Vertical' }: TokenCardGroupProps) => {
  return (
    <TokenCardGroupContainer variant={variant}>
      <TokenCard className='ETH-token'>ETH</TokenCard>
      <TokenCard active>usdc</TokenCard>
    </TokenCardGroupContainer>
  );
};

export default TokenCardGroup;
