import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> {
  if (req.method == 'GET') {
    const { address } = req.query;

    const leaderboard = await prisma.leaderboardPosition.findMany({
      take: 1000,
      orderBy: {
        points: 'desc',
      },
    });
    res.status(200).json({
      results: leaderboard,
    });
    return;
  }
  res.status(401).json('Method not allowed');
  return;
}
