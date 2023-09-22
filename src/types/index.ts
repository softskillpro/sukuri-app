export interface Partner {
  name: string;
  logo: string;
}

export interface NFT {
  group: string;
  membership: string;
  asset: string;
  title: string;
  price: string;
}

export interface Product {
  asset: string;
  name: string;
  membership: string;
  sub: string;
  price: string;
}

export interface Social {
  asset: any;
  href: string;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface Tier {
  id: string;
  address: string;
  tier_id: number;
  name: string;
  price: string;
  unit: string;
  supply: number;
  filled: number;
  subscription_length: number;
  subscription_length_unit: string;
  description: string;
  features: string[];
  projectId: string;
}

export interface NFT {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
  thumbnail_image: string;
  large_image: string;
  chain_id: number;
  member_count: number;
  is_erc721: boolean;
  is_featured: boolean;
  userId: string;
  tiers: Tier[];
}
