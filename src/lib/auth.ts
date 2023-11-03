import { ethers } from 'ethers';
import { EthereumProviderConfig } from './models'
import NFT_ABI from '@/contract/primeAbi.json';

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
async function verifyEthereumSignature(
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

// Default Ethereum provider configuration. Replace with actual values.
const DEFAULT_PROVIDER_CONFIG: EthereumProviderConfig = {
  endpoint: 'YOUR_ETHEREUM_RPC_ENDPOINT',
  nftContractAddress: 'YOUR_NFT_CONTRACT_ADDRESS',
};

/**
 * Checks if a given Ethereum address owns a specific NFT.
 * 
 * @param {string} address - The Ethereum address to check for NFT ownership.
 * @param {EthereumProviderConfig} [config=DEFAULT_PROVIDER_CONFIG] - Configuration for Ethereum provider and NFT contract.
 * @returns {Promise<boolean>} - True if the address owns the NFT, false otherwise.
 */
async function checkNFTOwnership(address: string, config: EthereumProviderConfig = DEFAULT_PROVIDER_CONFIG): Promise<boolean> {
  const provider = new ethers.JsonRpcProvider(config.endpoint);
  const contract = new ethers.Contract(config.nftContractAddress, NFT_ABI, provider);
  if (typeof contract.balanceOf === 'function') {
    const balance = await contract.balanceOf(address);
    return balance.gt(0);
  } else {
    throw new Error('balanceOf function does not exist on the contract');
  }
}

export { checkNFTOwnership, verifyEthereumSignature };

