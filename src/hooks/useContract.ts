import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import type { Contract } from 'ethers';
import primeAbi from '@/contract/primeAbi.json';

const primeContractAddress = process.env.NEXT_PUBLIC_PRIME_CONTRACT as string;

const useContract = () => {
  const [primeContract, setPrimeContract] = useState<Contract | null>(null);

  useEffect(() => {
    const initSigner = async () => {
      try {
        if (
          typeof window !== 'undefined' &&
          typeof window.ethereum !== 'undefined'
        ) {
          const provider = new ethers.BrowserProvider(window.ethereum);

          const signer = await provider.getSigner();

          const contract = new ethers.Contract(
            primeContractAddress,
            primeAbi,
            signer,
          );

          setPrimeContract(contract);
        }
      } catch (error) {
        // Handle the error here, and consider retrying after a delay
        console.error('Error getting signer:', error);
      }
    };

    initSigner();
  }, []);

  return { primeContract };
};

export default useContract;
