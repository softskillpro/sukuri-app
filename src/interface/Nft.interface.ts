export interface TierType {
  address: string
  id?: number
  name: string
  price: string
  unit: string
  subscription_length: number
  subscription_length_unit: string
}

export interface PaymentType {
  token: string
  name: string
  symbol: string
  is_eth: boolean
}

export interface NFTType {
  id: string
  name: string
  short_description: string
  long_description: string
  thumbnail_image: string
  large_image: string
  chain_id: number
  member_count: number
  tiers: TierType[]
  accepted_payment: PaymentType[]
}
