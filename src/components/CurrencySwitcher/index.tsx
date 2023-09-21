import { useState } from 'react';
import { CurrencySwitcherContainer, CurrencyButton } from './styles';
import { currencies } from '@/constants';

const CurrencySwitcher = () => {
  const [selected, setSelected] = useState(currencies[0]);

  const handleClick = (_currency: string) => {
    setSelected(_currency);
  };

  return (
    <CurrencySwitcherContainer>
      <div className='currency-switcher-glow' />

      {currencies.map((currency) => (
        <CurrencyButton
          key={currency}
          active={selected === currency}
          onClick={() => handleClick(currency)}
        >
          {currency}
        </CurrencyButton>
      ))}
    </CurrencySwitcherContainer>
  );
};

export default CurrencySwitcher;
