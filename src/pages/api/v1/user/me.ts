import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/db';

/**
 * Handles the API request.
 * @param {NextApiRequest} req - The API request.
 * @param {NextApiResponse} res - The API response.
 * @returns {Promise<void>}
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method === 'GET') {
    const {
      query: { key },
    } = req;

    if (typeof key !== 'string')
      return res.status(401).json('Key should be string.');

    try {
      // Fetch all projects
      const user = await prisma.user.findMany({
        where: {
          OR: [{ email: key }, { username: key }, { address: key }],
        },
      });

      return res.send(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'An error occurred while processing your request.' });
    }
  } else if (req.method === 'PUT') {
    const { id, name, email, username, address } = req.body;

    if (!id) return res.status(401).json('User info is required');

    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
        username,
        address,
      },
    });

    return res.status(200).json(updateUser);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
