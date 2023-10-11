import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import ABI from '@/contract/primeAbi.json';

const provider = new ethers.AlchemyProvider(
  'goerli',
  'YEMLhQ2S7F77trGq9ARxCKBVRjxolpBR',
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
          if (totalSupply > BigInt(parseInt(id))) {
            return res.status(200).json({
              animation_url: `https://mbcdn.sfo2.digitaloceanspaces.com/Final%20Layout.png`,
              name: `Sukuri Prime Pass #${id}`,
              image_url:
                'https://mbcdn.sfo2.digitaloceanspaces.com/Final%20Layout.png',
              description:
                'The Sukuri Prime pass is an all-access membership to the Sukuri Protocol Beta where you can level up, earn rewards and receive alpha before anyone else! Built on account abstraction, Sukuri Protocol will change the way you view subscriptions, forever.',
              attributes: [
                {
                  trait_type: 'Badge Count',
                  value: '0',
                },
              ],
              background_color: '020202',
            });
          }
          return res.status(200).json({
            animation_url: `https://sukuri-app.vercel.app/api/animation/${id}`,
            name: `Sukuri Prime Pass #${id}`,
            image:
              'https://mbcdn.sfo2.digitaloceanspaces.com/Final%20Layout.png',
            description:
              'The Sukuri Prime pass is an all-access membership to the Sukuri Protocol Beta where you can level up, earn rewards and receive alpha before anyone else! Built on account abstraction, Sukuri Protocol will change the way you view subscriptions, forever.',
            attributes: [
              {
                trait_type: 'Badge Count',
                value: '0',
              },
            ],
            background_color: '020202',
          });
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
