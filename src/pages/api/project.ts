
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../server/db'
import { NFTType } from '@/interface/Nft.interface';

/** CHAT GPT Gen Doc Strings
 * POST handler for /api/project endpoint.
 * It creates a new Project with associated Tiers and Features in a single operation.
 * @param {NextApiRequest} req - The incoming request, should contain Project, Tier and Feature data.
 * @param {NextApiResponse} res - The outgoing response.
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body = req.body as NFTType;
    try {
      // create project with associated tiers and features
      const projectWithTiers = await prisma.project.create({
        data: {
          name: body.name,
          short_description: body.short_description,
          long_description: body.long_description,
          thumbnail_image: body.thumbnail_image,
          large_image: body.large_image,
          chain_id: body.chain_id,
          member_count: body.member_count,
          is_erc721: body.is_erc721,
          status: 'ACTIVE',
          creatorId: "TESTUSERID",
          acceptedPayment: body.accepted_payment
            ? {
              create: body.accepted_payment.map(payment => ({
                token: payment.token,
                name: payment.name,
                symbol: payment.symbol,
                is_eth: payment.is_eth,
              })),
            }
            : undefined,
          tiers: body.tiers
            ? {
              create: body.tiers.map(tier => ({
                name: tier.name,
                price: parseFloat(tier.price),
                unit: tier.unit,
                supply: tier.supply,
                filled: tier.filled,
                subscription_length: tier.subscription_length,
                subscription_length_unit: tier.subscription_length_unit,
                descripton: tier.descripton,
                Feature: {
                  create: tier.features.map(feature => ({
                    feature: feature,
                  })),
                },
              })),
            }
            : undefined,
        },
      });


      return res.status(200).json({ message: 'Project created successfully', projectWithTiers });
    } catch (error) {
      console.error('Error creating project:', error);
      return res.status(500).json({ message: 'Error creating project' });
    }
  }

  // Handle any other HTTP method
  return res.status(405).json({ message: 'Method not allowed' });
}
