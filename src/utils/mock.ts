import { NFTType } from '@/interface/Nft.interface'

const mock: NFTType[] = [
  {
    id: '1afb19ba-9e01-4a7d-b5c7-9e9943693232',
    name: 'Nifty Island Battle Pass',
    short_description: 'A battle pass for Nifty Island games.',
    long_description:
      'With the Nifty Island Battle Pass, you are able to gain extra rewards in game every week, take part in battle pass only minigames, and more!',
    thumbnail_image:
      'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1',
    large_image:
      'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1',
    chain_id: 1,
    member_count: 5422,
    tiers: [
      {
        address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
        id: 1,
        name: 'Bronze Battle Pass',
        price: '25000000000000000000',
        unit: 'wei',
        subscription_length: 90,
        subscription_length_unit: 'days',
      },
      {
        address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
        id: 2,
        name: 'Silver Battle Pass',
        price: '40000000000000000000',
        unit: 'wei',
        subscription_length: 90,
        subscription_length_unit: 'days',
      },
      {
        address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
        id: 3,
        name: 'Gold Battle Pass',
        price: '55000000000000000000',
        unit: 'wei',
        subscription_length: 90,
        subscription_length_unit: 'days',
      },
    ],
    accepted_payment: [
      {
        token: '0x0000000000000000000000000000000000000000',
        name: 'Ethereum',
        symbol: 'ETH',
        is_eth: true,
      },
      {
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        name: 'USD Coin',
        symbol: 'USDC',
        is_eth: false,
      },
    ],
  },
  {
    id: 'e7971323-9781-461b-b34a-bdd588dc6ff9',
    name: 'Resell Calendar VIP',
    short_description: 'Gain access to the #1 reselling group!',
    long_description:
      'Resell Calendar VIP status offers existing and new RC users access to advanced tools for finding the cheapest deals, price glitches, and drops. Join today and increase your revenue! ',
    thumbnail_image: 'https://example.com',
    large_image:
      'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1',
    chain_id: 1,
    member_count: 1572,
    tiers: [
      {
        address: '0x7686BcC557327825B643f0c29F0857489CfC274E',
        name: 'Resell Calendar VIP',
        price: '25000000000000000000',
        unit: 'wei',
        subscription_length: 90,
        subscription_length_unit: 'days',
      },
    ],
    accepted_payment: [
      {
        token: '0x0000000000000000000000000000000000000000',
        name: 'Ethereum',
        symbol: 'ETH',
        is_eth: true,
      },
      {
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        name: 'USD Coin',
        symbol: 'USDC',
        is_eth: false,
      },
    ],
  },
  {
    id: '7263849a-b234-496d-97a2-987654321011',
    name: 'Bored Ape Yacht Club Membership',
    short_description: 'Gain access to the Bored Ape Yacht Club community.',
    long_description:
      'The Bored Ape Yacht Club is a collection of 10,000 unique NFTs. Members of the club have access to exclusive benefits, such as early access to new projects, discounts on merchandise, and more.',
    thumbnail_image: 'https://example.com',
    large_image:
      'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1',
    chain_id: 1,
    member_count: 12400,
    tiers: [
      {
        address: '0x7686BcC557327825B643f0c29F0857489CfC274E',
        name: 'Bored Ape Yacht Club Membership',
        price: '50000000000000000000',
        unit: 'wei',
        subscription_length: 365,
        subscription_length_unit: 'days',
      },
    ],
    accepted_payment: [
      {
        token: '0x0000000000000000000000000000000000000000',
        name: 'Ethereum',
        symbol: 'ETH',
        is_eth: true,
      },
      {
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        name: 'USD Coin',
        symbol: 'USDC',
        is_eth: false,
      },
    ],
  },
  {
    id: '3c97d7b2-5647-4c1a-87d7-2fbfc97b5f0c',
    name: 'Exclusive DAO Alpha Group',
    short_description: 'Premium access to DAO Alpha strategies and insights.',
    long_description:
      'Get exclusive access to the DAO Alpha Group. It offers insights, strategies, and discussions around DAOs. Make informed decisions and leverage the collective knowledge of the group!',
    thumbnail_image: 'https://example.com',
    large_image:
      'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1',
    chain_id: 1,
    member_count: 2345,
    tiers: [
      {
        address: '0x7A7e6d4A4f2B1f9C946d57D14E6f052A5B7eeB9d',
        id: 1,
        name: 'Insight Tier',
        price: '10000000000000000000',
        unit: 'wei',
        subscription_length: 30,
        subscription_length_unit: 'days',
      },
      {
        address: '0x7A7e6d4A4f2B1f9C946d57D14E6f052A5B7eeB9d',
        id: 2,
        name: 'Strategy Tier',
        price: '20000000000000000000',
        unit: 'wei',
        subscription_length: 60,
        subscription_length_unit: 'days',
      },
      {
        address: '0x7A7e6d4A4f2B1f9C946d57D14E6f052A5B7eeB9d',
        id: 3,
        name: 'Elite Tier',
        price: '50000000000000000000',
        unit: 'wei',
        subscription_length: 90,
        subscription_length_unit: 'days',
      },
    ],
    accepted_payment: [
      {
        token: '0x0000000000000000000000000000000000000000',
        name: 'Ethereum',
        symbol: 'ETH',
        is_eth: true,
      },
      {
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        name: 'USD Coin',
        symbol: 'USDC',
        is_eth: false,
      },
    ],
  },
  {
    id: '54321011-9876-5432-1011-7263849a-b234',
    name: 'Axie Infinity Scholarship Program',
    short_description: 'Earn money by playing Axie Infinity.',
    long_description:
      'The Axie Infinity Scholarship Program is a way for people to earn money by playing the game Axie Infinity. Players who are accepted into the program are given a team of Axies, which are digital pets that can be used to battle, earn rewards, and more. Players can then use their Axies to earn Smooth Love Potion (SLP), which can be converted into real money.',
    thumbnail_image: 'https://example.com',
    large_image:
      'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1',
    chain_id: 1,
    member_count: 100000,
    tiers: [
      {
        address: '0x7686BcC557327825B643f0c29F0857489CfC274E',
        name: 'Axie Infinity Scholarship Program',
        price: '0.05 ETH',
        unit: 'wei',
        subscription_length: 30,
        subscription_length_unit: 'days',
      },
    ],
    accepted_payment: [
      {
        token: '0x0000000000000000000000000000000000000000',
        name: 'Ethereum',
        symbol: 'ETH',
        is_eth: true,
      },
    ],
  },
  {
    id: '456789ab-cdef-4567-89ab-cdef01234567',
    name: 'Blockchain Gaming Club',
    short_description: 'A gaming platform for blockchain gamers.',
    long_description:
      'Blockchain Gaming Club is a gaming platform for blockchain gamers. We offer a variety of games to choose from, all of which are powered by blockchain technology. Our members have access to exclusive features, such as early access to new games, discounts on in-game items, and more. Join today and start gaming on the blockchain! ',
    thumbnail_image: 'https://example.com',
    large_image:
      'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1',
    chain_id: 1,
    member_count: 1000,
    tiers: [
      {
        address: '0x7686BcC557327825B643f0c29F0857489CfC274E',
        name: 'Basic Membership',
        price: '10000000000000000000',
        unit: 'wei',
        subscription_length: 30,
        subscription_length_unit: 'days',
      },
      {
        address: '0x7686BcC557327825B643f0c29F0857489CfC274E',
        name: 'Premium Membership',
        price: '20000000000000000000',
        unit: 'wei',
        subscription_length: 90,
        subscription_length_unit: 'days',
      },
    ],
    accepted_payment: [
      {
        token: '0x0000000000000000000000000000000000000000',
        name: 'Ethereum',
        symbol: 'ETH',
        is_eth: true,
      },
      {
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        name: 'USD Coin',
        symbol: 'USDC',
        is_eth: false,
      },
    ],
  },
  {
    id: '789abced-def0-4567-89ab-cdef01234567',
    name: 'The Crypto Guy',
    short_description:
      'The most informative and entertaining cryptocurrency YouTuber on the internet.',
    long_description:
      'The Crypto Guy is your one-stop shop for all things cryptocurrency. He covers the latest news, provides in-depth analysis, and teaches you how to make money in the crypto market. His videos are informative and entertaining, and he has a large following of subscribers. Join his Patreon today and get access to exclusive content, such as early access to new videos, behind-the-scenes content, and more. ',
    thumbnail_image: 'https://example.com/the-crypto-guy.jpg',
    large_image:
      'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1',
    chain_id: 1,
    member_count: 10000,
    tiers: [
      {
        address: '0x7686BcC557327825B643f0c29F0857489CfC274E',
        name: 'Bronze Tier',
        price: '5000000000000000000',
        unit: 'wei',
        subscription_length: 30,
        subscription_length_unit: 'days',
      },
      {
        address: '0x7686BcC557327825B643f0c29F0857489CfC274E',
        name: 'Silver Tier',
        price: '10000000000000000000',
        unit: 'wei',
        subscription_length: 90,
        subscription_length_unit: 'days',
      },
      {
        address: '0x7686BcC557327825B643f0c29F0857489CfC274E',
        name: 'Gold Tier',
        price: '15000000000000000000',
        unit: 'wei',
        subscription_length: 180,
        subscription_length_unit: 'days',
      },
    ],
    accepted_payment: [
      {
        token: '0x0000000000000000000000000000000000000000',
        name: 'Ethereum',
        symbol: 'ETH',
        is_eth: true,
      },
      {
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        name: 'USD Coin',
        symbol: 'USDC',
        is_eth: false,
      },
    ],
  },
]

export default mock
