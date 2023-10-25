import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { AlchemyProvider, Contract } from 'ethers';
import ABI from '@/contract/primeAbi.json';

const provider = new AlchemyProvider(
  'mainnet',
  process.env.NEXT_PUBLIC_ALCHEMY_KEY,
);

const contract = new Contract(
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
    '0x1A97A257917640319EBe6D8f773Fd2888E80291B',
  ABI,
  provider,
);
const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> {
  if (req.method == 'GET') {
    const { address } = req.query;
    if (typeof address != 'string') {
      return res.status(401).json('');
    }

    const leaderboard = await prisma.leaderboardPosition.findMany({
      take: 10000,
      orderBy: {
        points: 'desc',
      },
    });

    const position = leaderboard.find((entry) => entry.address === address);
    const index = leaderboard.findIndex((entry) => entry.address === address);

    if (position === undefined || position === null) {
      return res.status(200).json({
        exists: false,
        points: 0,
        last_updated: 0,
      });
    } else {
      return res.status(200).json({
        exists: true,
        rank: index,
        points: parseInt(position.points.toString()),
        last_updated: position.last_updated.toString(),
        should_update:
          parseInt(position.last_updated) <= new Date().getTime() - 3600,
      });
    }
  } else if (req.method === 'POST') {
    const { address } = req.body;

    if (!address) {
      return res.status(404);
    }

    console.log('Fetching Leaderboard...');

    const leaderboard = await prisma.leaderboardPosition.findUnique({
      where: {
        address: address,
      },
    });

    if (
      leaderboard &&
      contract &&
      BigInt(leaderboard?.last_updated) <= BigInt(new Date().getTime() - 3600)
    ) {
      console.log('Leaderboard Exists and we are going to update');
      const availableClaim = (await contract.checkClaim?.(address)) as bigint;
      console.log(`Available to claim: ${availableClaim}`);
      const balance = (await contract.balanceOf?.(address)) as bigint;
      console.log(`Balance of tokens: ${balance}`);
      let balancePoints;
      if (balance > 1) {
        const baseBalancePoints = BigInt(150);
        const extraPoints = (balance - BigInt(1)) * BigInt(50);
        balancePoints = baseBalancePoints + extraPoints;
      } else {
        balancePoints = BigInt(150);
      }
      const referralPoints =
        (availableClaim / BigInt(845000000000000)) * BigInt(15);
      const totalPoints = balancePoints + referralPoints;
      console.log(`Total Points: ${totalPoints}`);
      console.log(`Existing Points: ${leaderboard.points}`);
      if (
        totalPoints != BigInt(leaderboard.points) &&
        totalPoints >= BigInt(leaderboard.points)
      ) {
        const _updatedLB = await prisma.leaderboardPosition.update({
          where: {
            address: address,
          },
          data: {
            points: totalPoints.toString(),
            last_updated: new Date().getTime().toString(),
          },
        });
        res.status(200).json({
          exists: true,
          points: totalPoints.toString(),
          last_updated: _updatedLB.last_updated.toString(),
        });
        return;
      } else {
        res.status(200).json({
          exists: true,
          points: totalPoints.toString(),
          last_updated: leaderboard.last_updated.toString(),
        });
      }
    } else if (!leaderboard && contract) {
      console.log('Leaderboard does not exist...');
      const availableClaim = (await contract.checkClaim?.(address)) as bigint;
      const balance = (await contract.balanceOf?.(address)) as bigint;
      const balancePoints = balance * BigInt(150);
      const referralPoints =
        (availableClaim / BigInt(710000000000000)) * BigInt(15);
      const totalPoints = balancePoints + referralPoints;
      const _newLB = await prisma.leaderboardPosition.create({
        data: {
          address: address,
          points: totalPoints.toString(),
          last_updated: new Date().getTime().toString(),
        },
      });
      res.status(200).json({
        exists: true,
        points: totalPoints.toString(),
        last_updated: _newLB.last_updated.toString(),
      });
      return;
    } else {
      res.status(404).json('Whoops');
      return;
    }
  }
  res.status(200);
  return;
}
