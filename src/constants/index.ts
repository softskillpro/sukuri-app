import { DiscordIcon, TwitterIcon } from '@/components/Icons';
import type {
  Social,
  FooterLink,
  Explorer,
  CategoryOfSubscription,
} from '@/types';

export const navs = [
  {
    title: 'Marketplace',
    link: '/',
  },
  {
    title: 'Subscription',
    link: '/subscription',
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
