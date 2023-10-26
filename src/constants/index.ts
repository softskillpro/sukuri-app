import {
  DiscordIcon,
  TwitterIcon,
  MediumIcon,
  LinkIcon,
  WebsiteIcon,
} from '@/components/Icons';
import type {
  Social,
  FooterLink,
  Explorer,
  CategoryOfSubscription,
  Subscription,
  Transaction,
  Wallet,
} from '@/types';

export const navs = [
  {
    title: 'Leaderboard',
    link: '/leaderboard',
  },
  {
    title: 'Affiliates',
    link: '/partnerships',
  },
  {
    title: 'Marketplace',
    link: '/',
  },
  {
    title: 'Subscription',
    link: '/subscription',
  },
  // {
  //   title: 'Mint NFT',
  //   link: '/mint-nft',
  // },
  {
    title: 'Start Selling',
    link: '/start-selling',
  },
];

export const socials: Social[] = [
  {
    asset: DiscordIcon,
    href: 'https://discord.gg/2PNxNZVG6N',
  },
  {
    asset: TwitterIcon,
    href: 'https://twitter.com/sukuriprotocol',
  },
];

export const links: FooterLink[] = [
  {
    title: 'Marketplace',
    href: '/marketplace',
  },
  {
    title: 'Affiliates',
    href: '/affiliates',
  },
];

export const resources: FooterLink[] = [
  {
    title: 'Guides',
    href: '/guide',
  },
  {
    title: 'Tutorials',
    href: '/tutorials',
  },
];

export const company: FooterLink[] = [
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    title: 'Terms of Service',
    href: '/terms-of-service',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const currencies = ['USD', 'ETH'];

export const explorers: Explorer[] = [
  {
    title: 'TRADING',
    asset: '/images/trading.jpeg',
  },
  {
    title: 'GAMING',
    asset: '/images/gaming.png',
  },
  {
    title: 'ALPHA',
    asset: '/images/alpha.jpeg',
  },
  {
    title: 'DAOS',
    asset: '/images/daos.jpeg',
  },
];

export const categories = [
  { title: 'Trading', width: 77 },
  { title: 'Sports Betting', width: 121 },
  { title: 'E-commerce', width: 111 },
  { title: 'Gaming', width: 78 },
  { title: 'Business', width: 87 },
  { title: 'DAOS', width: 39 },
];

export const categoriesOfSubscription: CategoryOfSubscription[] = [
  {
    name: 'Active',
    value: 'active',
  },
  {
    name: 'Inactive',
    value: 'inactive',
  },
  {
    name: 'Ending Soon',
    value: 'ending -soon',
  },
  {
    name: 'View All',
    value: 'view-all',
  },
];

export const subscriptions: Subscription[] = [
  {
    address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
    tier_id: 1,
    name: 'Bronze Battle Pass',
    price: '250000000000000000',
    unit: 'wei',
    supply: 5000,
    filled: 1222,
    subscription_length: 90,
    subscription_length_unit: 'days',
    description: 'Basic Bronze Battle Pass',
    features: ['Online Membership Access', '5 Star Points per Month'],
  },
  {
    address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
    tier_id: 2,
    name: 'Silver Battle Pass',
    price: '400000000000000000',
    unit: 'wei',
    supply: 1000,
    filled: 254,
    subscription_length: 90,
    subscription_length_unit: 'days',
    description: 'Upgraded Silver Battle Pass',
    features: [
      'Online Membership Access',
      '10 Star Points per Month',
      'Unique Island Rental',
    ],
  },
  {
    address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
    tier_id: 3,
    name: 'Gold Battle Pass',
    price: '550000000000000000',
    unit: 'wei',
    supply: 500,
    filled: 246,
    subscription_length: 90,
    subscription_length_unit: 'days',
    description: 'Ultra Gold Battle Pass',
    features: [
      'Online Membership Access',
      '25 Star Points per Month',
      'Unique Island Rental',
      'Unique House Rental',
    ],
  },
];

export const txTableHeader = ['TIER', 'AMOUNT', 'DATE', 'TRANSACTION'];

export const txData: Transaction[] = [
  {
    tier: '1',
    amount: '$22',
    date: '28/09/2023',
    tx: '0x1234567891234567891234567...',
  },
  {
    tier: '2',
    amount: '$22',
    date: '28/09/2023',
    tx: '0x1234567891234567891234567...',
  },
  {
    tier: '3',
    amount: '$22',
    date: '28/09/2023',
    tx: '0x1234567891234567891234567...',
  },
  {
    tier: '4',
    amount: '$22',
    date: '28/09/2023 ',
    tx: '0x1234567891234567891234567...',
  },
  {
    tier: '5',
    amount: '$22',
    date: '28/09/2023',
    tx: '0x1234567891234567891234567...',
  },
  {
    tier: '6',
    amount: '$22',
    date: '28/09/2023',
    tx: '0x1234567891234567891234567...',
  },
];

export const numberEn = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

export const socialList: Social[] = [
  {
    asset: LinkIcon,
    href: 'https://discord.gg/2PNxNZVG6N',
  },
  {
    asset: TwitterIcon,
    href: 'https://twitter.com/sukuriprotocol',
  },
  {
    asset: DiscordIcon,
    href: 'https://discord.gg/2PNxNZVG6N',
  },
  {
    asset: MediumIcon,
    href: 'https://discord.gg/2PNxNZVG6N',
  },
  {
    asset: WebsiteIcon,
    href: 'https://sukuri.io',
  },
];

// export const tiers: TierInfo[] = [
//   {
//     title: 'Basic',
//     description: 'For newbies ',
//     price: '0',
//     btn: 'Subscribe for free',
//     features: ['Team support', 'Fleet loan', 'Exclusive chat access'],
//   },
//   {
//     title: 'Tier One',
//     description: 'For starters',
//     price: '9',
//     btn: 'Subscribe to Tier 1',
//     features: ['Team support', 'Fleet loan', 'Exclusive chat access'],
//   },
//   {
//     title: 'Tier Two',
//     description: 'For pros',
//     price: '19.99',
//     btn: 'Subscribe to Tier 2',
//     features: ['Everything in Tier One', 'Unlimited access', 'Daily calls'],
//   },
//   {
//     title: 'Tier Three',
//     description: 'Legends are here',
//     price: '29.99',
//     btn: 'Subscribe to Tier 3',
//     features: ['Everything in Tier Two', '24h support', 'VIP Tips'],
//   },
// ];

export const productImgs = ['product_badge', 'carousel1', 'carousel2'];

export const wallets: Wallet[] = [
  {
    name: 'Metamask',
    icon: '/images/metamask.png',
  },
  {
    name: 'WalletConnect',
    icon: '/images/walletconnect.png',
  },
  {
    name: 'Coinbase Wallet',
    icon: '/images/coinbase.png',
  },
  {
    name: 'OKX Wallet',
    icon: '/images/okx.png',
  },
];

export const leaderboardHeader = ['Rank', 'Display name', 'Points'];

export const rowsPerPage = 10;
