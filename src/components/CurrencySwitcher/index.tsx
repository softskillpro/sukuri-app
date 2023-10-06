import { CurrencySwitcherContainer, CurrencyButton } from './styles';
import { currencies } from '@/constants';

interface CurrencySwitcher {
  currency: string;
  handleCurrencyChange: (_currency: string) => void;
}

const CurrencySwitcher = ({
  currency,
  handleCurrencyChange,
}: CurrencySwitcher) => {
  return (
    <CurrencySwitcherContainer>
      <div className='currency-switcher-glow' />

      {currencies.map((item) => (
        <CurrencyButton
          key={item}
          active={item === currency}
          onClick={() => handleCurrencyChange(item)}
        >
          {item}
        </CurrencyButton>
      ))}
    </CurrencySwitcherContainer>
  );
};

export default CurrencySwitcher;
