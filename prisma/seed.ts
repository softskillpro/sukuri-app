import { Prisma, PrismaClient, User, Project } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

interface ProjectData {
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
}

interface ProjectTierData {
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

function csvToObject(filePath: string) {
  const csv = fs.readFileSync(filePath, 'utf-8');

  if (!csv) return [];

  const lines = getCSVLines(csv);  // We'll use a new utility function here

  if (!lines || lines.length === 0) return [];

  const headers = parseCSVLine(lines[0] ?? '');

  if (!headers || headers.length === 0) return [];

  const data: any[] = [];

  for (let i = 1; i < lines.length; i++) {
    const currentline = parseCSVLine(lines[i] ?? '');

    if (!currentline || currentline.length === 0) continue;

    const obj: any = {};

    for (let j = 0; j < headers.length; j++) {
      const ind: any = headers[j];
      obj[ind] = currentline[j];
    }

    data.push(obj);
  }

  return data;
}

// A utility function to parse a CSV line, considering quoted values
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let startValueIndex = 0;
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') {
      insideQuotes = !insideQuotes;
    } else if (line[i] === ',' && !insideQuotes) {
      result.push(line.substring(startValueIndex, i).trim().replace(/^"|"$/g, ''));
      startValueIndex = i + 1;
    }
  }
  result.push(line.substring(startValueIndex).trim().replace(/^"|"$/g, ''));

  return result;
}

// A utility function to split CSV into lines, considering multiline data inside double quotes
function getCSVLines(csv: string): string[] {
  const lines: string[] = [];
  let buffer = '';
  let insideQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    if (csv[i] === '"') {
      insideQuotes = !insideQuotes;
    }

    buffer += csv[i];

    if (csv[i] === '\n' && !insideQuotes) {
      lines.push(buffer.trim());
      buffer = '';
    }
  }

  if (buffer) {
    lines.push(buffer.trim());
  }

  return lines;
}

const projectCsvPath = './prisma/Mock_Project_rows.csv';
const projectTiersCsvPath = './prisma/Mock_ProjectTier_rows.csv';

const projectData = csvToObject(projectCsvPath);
const projectTiersData = csvToObject(projectTiersCsvPath);

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
const projects = (_user: User): Prisma.ProjectCreateInput[] => {
  return projectData.map(project => ({
    id: project.id,
    name: project.name,
    short_description: project.short_description,
    long_description: project.long_description,
    thumbnail_image: project.thumbnail_image,
    large_image: project.large_image,
    chain_id: parseInt(project.chain_id)??1,
    member_count: parseInt(project.member_count)??0,
    is_erc721: project.is_erc721.toLowerCase() === 'true',
    is_featured: project.is_featured.toLowerCase() === 'true',
    User: { connect: { id: _user.id } }
  }));
};

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
): Prisma.ProjectTierCreateInput[] => {
  return projectTiersData.map(tier => ({
    address: tier.address,
    tier_id: Number.isNaN(parseInt(tier.tier_id)) ? 1 : parseInt(tier.tier_id),
    name: tier.name,
    price: tier.price,
    unit: tier.unit,
    supply: Number.isNaN(parseInt(tier.supply))?0:parseInt(tier.supply),
    filled: Number.isNaN(parseInt(tier.filled)) ? 0 :parseInt(tier.filled),
    subscription_length: Number.isNaN(parseInt(tier.subscription_length)) ? 0 : parseInt(tier.subscription_length),
    subscription_length_unit: tier.subscription_length_unit,
    description: tier.description,
    features: tier.features.split('-').filter(Boolean),
    Project: { connect: { id: tier.projectId } }
  }));
};

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
