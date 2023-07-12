import { Prisma, PrismaClient, User, Project } from '@prisma/client';

const prisma = new PrismaClient();

const user: Prisma.UserCreateInput = {
  id: 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e',
  name: 'Test User',
  email: 'testuser@domain.com',
  username: 'test_user',
  address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
};

const paymentOptions: Prisma.PaymentOptionCreateInput[] = [
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
];
const projects = (_user: User): Prisma.ProjectCreateInput[] => [
  {
    id: '1afb19ba-9e01-4a7d-b5c7-9e9943693232',
    name: 'Nifty Island Battle Pass',
    short_description: 'A battle pass for Nifty Island games.',
    long_description:
      'With the Nifty Island Battle Pass, you are able to gain extra rewards in game every week, take part in battle pass only minigames, and more!',
    thumbnail_image: 'https://example.com',
    large_image: 'https://example.com',
    chain_id: 1,
    member_count: 1722,
    is_erc721: false,
    is_featured: false,
    User: { connect: { id: _user.id } },
  },
  {
    id: 'e7971323-9781-461b-b34a-bdd588dc6ff9',
    name: 'Resell Calendar VIP',
    short_description: 'Gain access to the #1 reselling group!',
    long_description:
      'Resell Calendar VIP status offers existing and new RC users access to advanced tools for finding the cheapest deals, price glitches, and drops. Join today and increase your revenue! ',
    thumbnail_image: 'https://example.com',
    large_image: 'https://example.com',
    chain_id: 1,
    member_count: 1572,
    is_erc721: true,
    is_featured: true,
    User: { connect: { id: _user.id } },
  },
  {
    id: '7263849a-b234-496d-97a2-987654321011',
    name: 'Bored Ape Yacht Club Membership',
    short_description: 'Gain access to the Bored Ape Yacht Club community.',
    long_description:
      'The Bored Ape Yacht Club is a collection of 10,000 unique NFTs. Members of the club have access to exclusive benefits, such as early access to new projects, discounts on merchandise, and more.',
    thumbnail_image: 'https://example.com',
    large_image: 'https://example.com',
    chain_id: 1,
    member_count: 12400,
    is_erc721: true,
    is_featured: false,
    User: { connect: { id: _user.id } },
  },
  {
    id: '3c97d7b2-5647-4c1a-87d7-2fbfc97b5f0c',
    name: 'Exclusive DAO Alpha Group',
    short_description: 'Premium access to DAO Alpha strategies and insights.',
    long_description:
      'Get exclusive access to the DAO Alpha Group. It offers insights, strategies, and discussions around DAOs. Make informed decisions and leverage the collective knowledge of the group!',
    thumbnail_image: 'https://example.com',
    large_image: 'https://example.com',
    chain_id: 1,
    member_count: 1985,
    is_erc721: false,
    is_featured: true,
    User: { connect: { id: _user.id } },
  },
  {
    id: '54321011-9876-5432-1011-7263849a-b234',
    name: 'Axie Infinity Scholarship Program',
    short_description: 'Earn money by playing Axie Infinity.',
    long_description:
      'The Axie Infinity Scholarship Program is a way for people to earn money by playing the game Axie Infinity. Players who are accepted into the program are given a team of Axies, which are digital pets that can be used to battle, earn rewards, and more. Players can then use their Axies to earn Smooth Love Potion (SLP), which can be converted into real money.',
    thumbnail_image: 'https://example.com',
    large_image: 'https://example.com',
    chain_id: 1,
    member_count: 14600,
    is_erc721: true,
    is_featured: true,
    User: { connect: { id: _user.id } },
  },
  {
    id: '456789ab-cdef-4567-89ab-cdef01234567',
    name: 'Blockchain Gaming Club',
    short_description: 'A gaming platform for blockchain gamers.',
    long_description:
      'Blockchain Gaming Club is a gaming platform for blockchain gamers. We offer a variety of games to choose from, all of which are powered by blockchain technology. Our members have access to exclusive features, such as early access to new games, discounts on in-game items, and more. Join today and start gaming on the blockchain! ',
    thumbnail_image: 'https://example.com',
    large_image: 'https://example.com',
    chain_id: 1,
    member_count: 1000,
    is_erc721: false,
    is_featured: false,
    User: { connect: { id: _user.id } },
  },
  {
    id: '789abced-def0-4567-89ab-cdef01234567',
    name: 'The Crypto Guy',
    short_description:
      'The most informative and entertaining cryptocurrency YouTuber on the internet.',
    long_description:
      'The Crypto Guy is your one-stop shop for all things cryptocurrency. He covers the latest news, provides in-depth analysis, and teaches you how to make money in the crypto market. His videos are informative and entertaining, and he has a large following of subscribers. Join his Patreon today and get access to exclusive content, such as early access to new videos, behind-the-scenes content, and more. ',
    thumbnail_image: 'https://example.com/the-crypto-guy.jpg',
    large_image: 'https://example.com/the-crypto-guy-large.jpg',
    chain_id: 1,
    member_count: 124,
    is_erc721: false,
    is_featured: true,
    User: { connect: { id: _user.id } },
  },
];

const projectPayments = (
  _projects: Project[],
): Prisma.ProjectPaymentUncheckedCreateInput[] => {
  const payments = [];
  for (let project of _projects) {
    for (let paymentOption of paymentOptions) {
      payments.push({
        projectId: project.id,
        token: paymentOption.token,
      });
    }
  }
  return payments;
};

const projectTiers = (
  _projects: Project[],
): Prisma.ProjectTierCreateInput[] => [
  {
    address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
    id: '1',
    tier_id: 1,
    name: 'Bronze Battle Pass',
    price: '25000000000000000000',
    unit: 'wei',
    supply: 5000,
    filled: 1222,
    subscription_length: 90,
    subscription_length_unit: 'days',
    description: 'Basic Bronze Battle Pass',
    features: ['Online Membership Access', '5 Star Points per Month'],
    Project: { connect: { id: _projects[0]?.id } },
  },
  {
    address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
    id: '2',
    tier_id: 2,
    name: 'Silver Battle Pass',
    price: '40000000000000000000',
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
    Project: { connect: { id: _projects[1]?.id } },
  },
  {
    address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
    id: '3',
    tier_id: 3,
    name: 'Gold Battle Pass',
    price: '55000000000000000000',
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
    Project: { connect: { id: _projects[1]?.id } },
  },
  {
    address: '0x7A7e6d4A4f2B1f9C946d57D14E6f052A5B7eeB9d',
    id: '4',
    tier_id: 4,
    name: 'Insight Tier',
    price: '10000000000000000000',
    unit: 'wei',
    supply: 1,
    filled: 523,
    subscription_length: 30,
    subscription_length_unit: 'days',
    description:
      'Gain valuable insights to new tokens, NFTs, and Web3 projects.',
    features: ['Private Discord Access', 'Voting Rights to DAO Alpha Group'],
    Project: { connect: { id: _projects[2]?.id } },
  },
  {
    address: '0x7A7e6d4A4f2B1f9C946d57D14E6f052A5B7eeB9d',
    id: '5',
    tier_id: 5,
    name: 'Strategy Tier',
    price: '20000000000000000000',
    unit: 'wei',
    supply: 1,
    filled: 573,
    subscription_length: 60,
    subscription_length_unit: 'days',
    description:
      'Everything Insight tier includes plus toolkits for building your own trading strategies.',
    features: [
      'Access to internal toolkits',
      '1 on 1 strategy building with experts',
    ],
    Project: { connect: { id: _projects[3]?.id } },
  },
  {
    address: '0x7A7e6d4A4f2B1f9C946d57D14E6f052A5B7eeB9d',
    id: '6',
    tier_id: 6,
    name: 'Elite Tier',
    price: '50000000000000000000',
    unit: 'wei',
    supply: 1,
    filled: 889,
    subscription_length: 90,
    subscription_length_unit: 'days',
    description: 'The all inclusive Elite tier, access to everything and more!',
    features: [
      'Access to all internal tooling and servers',
      'Seat at the table with the board.',
    ],
    Project: { connect: { id: _projects[4]?.id } },
  },
];

const main = async () => {
  const newUser = await prisma.user.create({
    data: user,
  });

  const newPaymentOptions = await Promise.all(
    paymentOptions.map((paymentOption) =>
      prisma.paymentOption.create({ data: paymentOption }),
    ),
  );

  const newProjects = await Promise.all(
    projects(newUser).map((project) =>
      prisma.project.create({ data: project }),
    ),
  );

  await Promise.all(
    projectPayments(newProjects).map((projectPayment) =>
      prisma.projectPayment.create({ data: projectPayment }),
    ),
  );

  await Promise.all(
    projectTiers(newProjects).map((projectTier) =>
      prisma.projectTier.create({ data: projectTier }),
    ),
  );

  console.log('Seeding Complete');
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
