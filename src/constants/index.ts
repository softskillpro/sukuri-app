import { DiscordIcon, TwitterIcon } from '@/components/Icons';
import type { NFT, Partner, Product, Social, FooterLink } from '@/types';

export const navs = [
  {
    title: 'Marketplace',
    link: '/',
  },
  {
    title: 'Resources',
    link: '/resources',
  },
  {
    title: 'Affiliates',
    link: '/affiliates',
  },
  {
    title: 'Start Selling',
    link: '/start-selling',
  },
];

export const partners: Partner[] = [
  {
    name: 'Polygon',
    logo: '/images/polygon.png',
  },
  {
    name: 'Arbitrum',
    logo: '/images/arbirtum.png',
  },
  {
    name: 'Resell Calendar',
    logo: '/images/resell.png',
  },
  {
    name: 'Nifty Island',
    logo: '/images/nifty_island.png',
  },
];

export const nfts: NFT[] = [
  {
    group: 'Alpha Group',
    membership: 'Membership Program',
    asset: '/images/nft1.png',
    title: 'My NFT',
    price: '15.00',
  },
  {
    group: 'Beta Group',
    membership: 'Membership Program',
    asset: '/images/nft2.jpg',
    title: 'My NFT',
    price: '9.00',
  },
  {
    group: 'Test Group',
    membership: 'Membership Program',
    asset: '/images/nft3.jpg',
    title: 'My NFT',
    price: '30.00',
  },
];

export const products: Product[] = [
  {
    asset: '/images/product1.png',
    name: 'The Sandbox',
    membership: 'Membership',
    sub: '200',
    price: '9',
  },
  {
    asset: '/images/product2.png',
    name: 'Ember Sword',
    membership: 'Membership',
    sub: '130',
    price: '19',
  },
  {
    asset: '/images/product1.png',
    name: 'Nishe Key',
    membership: 'Membership',
    sub: '200',
    price: '12',
  },
];

export const socials: Social[] = [
  {
    asset: DiscordIcon,
    href: 'https://discord.org',
  },
  {
    asset: TwitterIcon,
    href: 'https://twitter.org',
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
