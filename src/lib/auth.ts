import { ethers } from 'ethers';

/**
 * Verifies the Ethereum signature for authentication.
 *
 * @param {string} signature - The signature provided by the user.
 * @param {string} ethAddress - The Ethereum address of the user.
 * @param {string} timestamp - The timestamp at which the user signed.
 * @param {string} nonce - The unique nonce for the request.
 * @returns {Promise<boolean>} Returns true if the signature is valid, otherwise false.
 * @throws Will throw an error if the timestamp is too old.
 */
export async function verifyEthereumSignature(
  signature: string,
  ethAddress: string,
  timestamp: string,
  nonce: string,
): Promise<boolean> {
  // Concatenate the timestamp with the nonce for verification
  const dataToVerify = timestamp + nonce;

  // Check that the timestamp is within an acceptable range (e.g., 2 minutes)
  const currentTime = Date.now();
  const timeDifference = currentTime - parseInt(timestamp, 10);

  if (timeDifference > 120000) {
    // 120,000 milliseconds = 2 minutes
    throw new Error('Timestamp is too old');
  }

  // Get the signer's address from the signature
  const signingAddress = ethers.verifyMessage(dataToVerify, signature);

  return signingAddress.toLowerCase() === ethAddress.toLowerCase();
}
