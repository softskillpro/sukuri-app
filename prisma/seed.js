import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const project = {
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
    member_count: 1722,
    is_erc721: false,
    accepted_payments: [
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
  }

  const newProject = await prisma.project.create({ data: project });

  // Create tiers for the project
  const tiers = [
    {
      address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
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
      projectId: newProject.id
    },
    {
      address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
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
      projectId: newProject.id
    },
    {
      address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
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
      projectId: newProject.id
    },
  ];

  for (let tier of tiers) {
    await prisma.projectTier.create({ data: tier });
  }

  // Creating a test user
  const user = {
    id: 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e',
    name: 'Test User',
    email: 'testuser@domain.com',
    username: 'test_user',
    address: '0xe7A5839F8F978037B72bd48d3777E58Aa6093588',
  }

  const newUser = await prisma.user.create({ data: user });

  console.log("Seeding Complete");
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
