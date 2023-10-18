import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  return res.status(200).json({
    name: 'Sukuri Prime Pass',
    description:
      'The Sukuri Prime pass is an all-access membership to the Sukuri Protocol Beta where you can level up, earn rewards and receive alpha before anyone else! Built on account abstraction, Sukuri Protocol will change the way you view subscriptions, forever.',
    image: 'https://mbcdn.sfo2.digitaloceanspaces.com/Frame%202910.png',
    external_link: 'https://sukuri.io',
  });
}
