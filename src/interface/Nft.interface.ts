export interface TierType {
  address: string;
  id?: number;
  name: string;
  price: string;
  projectId: string;
  unit: string;
  supply: number;
  tier_id: number;
  filled: number;
  subscription_length: number;
  subscription_length_unit: string;
  description: string;
  features: string[];
}

export interface PaymentType {
  token: string;
  name: string;
  symbol: string;
  is_eth: boolean;
}

export interface NFTType {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
  thumbnail_image: string;
  large_image: string;
  chain_id: number;
  member_count: number;
  is_erc721: boolean;
  tiers: TierType[];
  accepted_payment: PaymentType[];
}
