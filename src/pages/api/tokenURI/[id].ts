import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import ABI from '@/contract/primeAbi.json';

const provider = new ethers.AlchemyProvider(
  'mainnet',
  'ZpRfPqogCZIdExCpjRLv9jdq28SyTteR',
);
const contract = new ethers.Contract(
  `${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`,
  ABI,
  provider,
);

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { id } = req.query;

  if (req.method === 'GET') {
    if (typeof id !== 'string') {
      return res.status(401).json('id should be one number');
    }

    try {
      if (contract !== undefined) {
        const totalSupply: bigint = await contract.getFunction?.(
          'totalSupply',
        )();

        if (id) {
          if (totalSupply < BigInt(parseInt(id))) {
            res.status(200).json({
              animation_url: `https://mbcdn.sfo2.cdn.digitaloceanspaces.com/PrimePreview.png`,
              name: `SUKURI PRIME PASS`,
              image_url:
                'https://mbcdn.sfo2.cdn.digitaloceanspaces.com/PrimePreview.png',
              description:
                'The Sukuri Prime pass is an all-access membership to the Sukuri Protocol Beta where you can level up, earn rewards and receive alpha before anyone else! Built on account abstraction, Sukuri Protocol will change the way you view subscriptions, forever.',
              attributes: [
                {
                  display_type: 'number',
                  trait_type: 'Badges',
                  value: 0,
                  max_value: 5,
                },
              ],
              background_color: '020202',
            });
            return;
          }
          const name: string = await contract.namespace?.(parseInt(id));
          res.status(200).json({
            animation_url: `https://app.sukuri.io/api/animation/${id}`,
            name: `SUKURI PRIME PASS: ${name.toUpperCase()}`,
            image:
              'https://mbcdn.sfo2.cdn.digitaloceanspaces.com/PrimePreview.png',
            description:
              'The Sukuri Prime pass is an all-access membership to the Sukuri Protocol Beta where you can level up, earn rewards and receive alpha before anyone else! Built on account abstraction, Sukuri Protocol will change the way you view subscriptions, forever.',
            attributes: [
              {
                display_type: 'number',
                trait_type: 'Badges',
                value: 0,
                max_value: 5,
              },
            ],
            background_color: '020202',
          });
          return;
        }
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({
        error: 'An error occurred while trying to process your request.',
      });
    }
  }
}
