// pages/api/project.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../server/db'

/** ChatGPT Generated Docs
 * This function handles the API endpoint for creating projects.
 *
 * @param {NextApiRequest} req - The incoming request object. 
 * The body of POST requests should include 'name' and 'description' for the new project.
 *
 * @param {NextApiResponse} res - The outgoing response object.
 * It will return the newly created project object for successful POST requests, 
 * and relevant error messages for erroneous requests.
 *
 * @returns {Promise<void>}
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    const { name, description } = req.body;
    const creatorId = 'TESTUSER1'; // When user auth is working we need to use some sort of context to get this.

    try {
      // Check if the user exists
      let user = await prisma.user.findUnique({ where: { id: creatorId } });

      // If the user doesn't exist, create a new user
      if (!user) {
        user = await prisma.user.create({ data: { id: creatorId } });
      }

      // Create a new project and associate it with the user
      const project = await prisma.project.create({
        data: {
          name,
          description,
          status: 'ACTIVE',
          creatorId
        },
      })

      // Return the newly created project
      res.status(200).json(project)
    } catch (error) {
      // Return an error message in case of any failure
      res.status(500).json({ error: `Something went wrong: ${error}` })
    }
  } else {
    // Set header for allowed methods and return a 'Method Not Allowed' message for non-POST requests
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
