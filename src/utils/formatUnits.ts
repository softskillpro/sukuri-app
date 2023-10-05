import { formatEther } from 'ethers';

const formatUnits = (price?: string, unit?: string, newCurrency?: string) => {
  if (!price || !unit) return;

  if (unit === 'wei') {
    const etherValue = formatEther(price);
    if (!newCurrency) return `${etherValue}Ξ`;
    else {
      if (newCurrency === 'USD') {
        return `$${Number(etherValue) * 1930}`;
      } else {
        return `${etherValue}Ξ`;
      }
    }
  }

  return price;
};

export default formatUnits;
