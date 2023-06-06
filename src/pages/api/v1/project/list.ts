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
    try {
      // Fetch all projects
      const projects = await prisma.project.findMany();

      return res.send(projects);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'An error occurred while processing your request.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
