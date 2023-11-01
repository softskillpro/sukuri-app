import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method === 'POST') {
    const { name, email, twitter, reason } = req.body;

    try {
      const created = await prisma.affiliate.create({
        data: {
          name,
          email,
          twitter,
          description: reason,
        },
      });
      res.status(201).json({
        result: true,
        created: created,
      });
    } catch (e: any) {
      console.log(e);
      res.status(400).json('Already created');
      return;
    }
  }
  res.status(403);
  return;
}
