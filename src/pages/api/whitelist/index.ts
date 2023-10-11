import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Wallet, ethers, getAddress } from 'ethers';

const wallet = new Wallet(`${process.env.SIGNER_PRIVATE_KEY}`);

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const prisma = new PrismaClient();

  if (req.method == 'GET') {
    const { address } = req.query;
    if (typeof address != 'string') {
      return res.status(401).json('id should be an address');
    }

    const whitelisted = await prisma.whitelist.findUnique({
      where: {
        address: address,
      },
    });
    if (whitelisted !== null && whitelisted !== undefined) {
      return res.status(200).json({
        result: true,
      });
    } else {
      return res.status(200).json({
        result: false,
      });
    }
  }

  if (req.method == 'POST') {
    console.log(req.body);
    const { address, name, referral } = req.body;

    // Strip leading and trailing spaces
    let _name = name.trim();

    // Remove special characters, allowing only A-Z and 0-9
    _name = _name.replace(/[^A-Za-z0-9]/g, '');

    // Convert to uppercase
    _name = _name.toUpperCase();

    // Limit the name to 12 characters
    _name = _name.slice(0, 12);

    if (typeof address != 'string' || typeof name != 'string') {
      return res.status(401).json('address and name should be string');
    }

    const whitelisted = await prisma.whitelist.findUnique({
      where: {
        address: address,
      },
    });

    if (whitelisted !== undefined && whitelisted !== null) {
      const msg = ethers.getBytes(
        ethers.keccak256(
          ethers.AbiCoder.defaultAbiCoder().encode(
            ['address', 'string', 'string'],
            [getAddress(address), _name, referral],
          ),
        ),
      );
      const sig = await wallet.signMessage(msg);
      return res.status(200).json({
        name: _name,
        referral: referral,
        signature: sig,
      });
    } else {
      return res.status(403).json('must be whitelisted!');
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
