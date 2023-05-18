import { formatEther } from 'ethers'

const formatUnits = (price?: string, unit?: string) => {
  if (!price || !unit) return

  if (unit === 'wei') {
    const etherValue = formatEther(price)
    return etherValue
  }

  return price
}

export default formatUnits
