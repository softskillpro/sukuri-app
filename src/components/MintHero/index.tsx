import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  useMemo,
} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { toast } from 'react-toastify';
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
  readContract,
} from '@wagmi/core';
import { Typography, setRef, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { Section } from '@/components/Common/Section';
import { FlexBox } from '@/components/Common/FlexBox';
import { StyledButton } from '@/components/Common/StyledButton';
import { Loader } from '@/components/Common/Loader';
import SpinnerModal from '@/components/SpinnerModal';
import { CircleIcon } from '@/components/Icons';
import { MintHeroContainer } from './styles';
import { getAddress, parseEther } from 'viem';
import ABI from '@/contract/primeAbi.json';
import axios from 'axios';
import { bigint } from 'zod';

const inter = Inter({
  // weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

const MintHero = () => {
  const router = useRouter();
  const { ref }: any = router.query;

  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const { isLoading: switchingChain, switchNetwork } = useSwitchNetwork({
    chainId: 1,
    throwForSwitchChainNotSupported: true,
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const inputCodeRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('');
  const [referral, setReferral] = useState(ref);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(0);
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);
  const [price, setPrice] = useState(0.018777);
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const [isFetching, setIsFetching] = useState(true);

  const isOnCorrectNetwork = useMemo(() => {
    if (!isConnected) {
      return true;
    }
    if (chain && chain.id == 1) {
      return true;
    }
    return false;
  }, [chain, isConnected]);

  useEffect(() => {
    if (ref && inputCodeRef.current) {
      inputCodeRef.current.value = ref;
    }
  }, [ref]);

  useEffect(() => {
    const fetchWhitelist = async () => {
      try {
        const response = await fetch(`/api/whitelist?address=${address}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const { result } = await response.json();
        setIsWhitelisted(result);
        const hasClaimed = await readContract({
          address: getAddress(`${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`),
          abi: ABI,
          functionName: 'wlClaim',
          args: [address],
        });
        if ((hasClaimed as bigint) > BigInt(0)) {
          setIsWhitelisted(false);
        }
        setIsFetching(false);
      } catch (error: any) {
        toast.error(error?.message || error);
        setIsFetching(false);
      }
    };

    if (address) {
      fetchWhitelist();
    } else {
      setIsWhitelisted(false);
      setIsFetching(false);
    }
  }, [address]);

  useEffect(() => {
    if (referral && referral.length > 0 && !isWhitelisted) {
      setPrice(0.0169);
      return;
    }
    if (isWhitelisted) {
      setPrice(0.0142);
      return;
    }
    setPrice(0.018777);
  }, [referral, isWhitelisted]);

  useEffect(() => {
    let _price = 0.018777;

    if (isWhitelisted) {
      _price = 0.0142;
    } else if (ref) {
      _price = 0.0169;
    }

    setPrice(_price);
  }, [isWhitelisted, ref]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    let _name = e.target.value;

    // Strip leading and trailing spaces
    _name = _name.trim();

    // Remove special characters, allowing only A-Z and 0-9
    _name = _name.replace(/[^A-Za-z0-9]/g, '');

    // Convert to uppercase
    _name = _name.toUpperCase();

    // Limit the name to 12 characters
    _name = _name.slice(0, 12);

    setName(_name);
    e.target.value = _name;
  };

  const handleRefChange = (e: ChangeEvent<HTMLInputElement>) => {
    let _referral = e.target.value;

    // Strip leading and trailing spaces
    _referral = _referral.trim();

    // Remove special characters, allowing only A-Z and 0-9
    _referral = _referral.replace(/[^A-Za-z0-9]/g, '');

    // Convert to uppercase
    _referral = _referral.toUpperCase();

    // Limit the name to 12 characters
    _referral = _referral.slice(0, 12);

    setReferral(_referral);
    e.target.value = _referral;
  };

  const purchaseButtonText = useMemo(() => {
    if (!isConnected) {
      return 'Connect Wallet';
    }
    if (isOnCorrectNetwork && isConnected) {
      return 'Purchase';
    }
    return 'Switch Networks';
  }, [isOnCorrectNetwork, isConnected]);

  const handleMint = async () => {
    if (isFetching) {
      return;
    }
    if (isConnected && !isOnCorrectNetwork && !switchingChain) {
      toast.warning('Please switch your network to mainnet to continue.', {
        position: 'top-center',
      });
      switchNetwork?.(1);
      return;
    }
    const code = inputCodeRef.current?.value || '';

    if (!name) {
      toast.error('Name is required');
      return;
    }

    if (!isConnected) {
      toast.error('Please connect Wallet!');
      return;
    }

    try {
      setLoading(true);

      let whitelistData;

      if (isWhitelisted) {
        const { data } = await axios.post('/api/whitelist', {
          address,
          name,
          referral: code,
        });

        whitelistData = [data.name, data.referral, data.signature];
      }

      const config = await prepareWriteContract({
        address: getAddress(`${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`),
        abi: ABI,
        functionName: isWhitelisted ? 'whitelistMint' : 'mint',
        args: isWhitelisted ? whitelistData : [name, code],
        value: parseEther(`${price}`),
      });

      const { hash } = await writeContract(config);

      setTxHash(hash);

      setOpen(1);

      waitForTransaction({
        chainId: 5,
        hash,
        timeout: 50000,
      }).then(() => {
        if (isWhitelisted) {
          setIsWhitelisted(false);
        }
        setOpen(2);
      });
    } catch (err: any) {
      console.error(err);
      switch (err.metaMessages?.[0]) {
        case 'Error: InvalidValue()':
          toast.error('Invalid ETH Value Provided. Please try again.');
          break;
        case 'Error: NameUsed()':
          toast.error('Name has been claimed already.');
          break;
        case 'Error: CanOnlyUseOneRef()':
          toast.error(
            'You have already used a referral code. If you wish to purchase more Prime Passes, you will have to use the same referral code.',
          );
          break;
        case 'Error: InvalidReferral()':
          toast.error(
            'You have entered an invalid referral code. Please check your code and try again.',
          );
          break;
        case 'Error: InvalidDiscountValue()':
          toast.error('Invalid Value Provided. Please try again.');
          break;
        default:
          if (err.metaMessages?.[0].contains('MustUseSameRefCode')) {
            toast.error(err.metaMessages?.[0]);
            break;
          }
          toast.error('An unknown error has occurred. Do you have enough ETH?');
          break;
      }
      setOpen(0);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = useCallback(() => {
    setOpen(0);
  }, []);

  return (
    <>
      <MintHeroContainer>
        <HeroGlow />

        <Section className='mint-section'>
          <Typography variant={matches ? 'h2' : 'h2Mobile'}>
            Sukuri Prime
          </Typography>

          <Typography variant={matches ? 'body1' : 'body1Mobile'}>
            In celebration of Sukuri&apos;s initial launch, join us in
            purchasing a Prime Pass that represents your participation in our
            off-chain beta, but that&apos;s not all...
          </Typography>

          <form className={`${inter.className}`}>
            <div className='input-glow' />

            <input
              value={name}
              required
              name='name'
              type='text'
              placeholder='Enter your display name'
              maxLength={12}
              className='input-email'
              onChange={handleNameChange}
            />
          </form>

          <form className={`${inter.className}`}>
            <div className='input-glow' />

            <input
              ref={inputCodeRef}
              onChange={handleRefChange}
              required
              name='email'
              type='text'
              placeholder='Enter a referral code (optional)'
              className='input-email'
            />
          </form>

          <FlexBox className='mint-btn-wrapper'>
            <div className='mint-btn-wrap'>
              <StyledButton
                variant='Secondary'
                className='mint-btn'
                disabled={loading}
                onClick={handleMint}
              >
                {purchaseButtonText}
                {loading && <Loader />}
              </StyledButton>
            </div>

            <Typography variant={matches ? 'h5' : 'h4Mobile'}>
              Price: {isFetching ? 'Fetching...' : <>{price} ETH</>}
            </Typography>
          </FlexBox>
        </Section>

        <Section className='mint-asset'>
          <Image
            src='/images/mint_hero.png'
            width={300}
            height={300}
            priority
            alt='Mint Hero'
            className='mint-hero-img'
          />
        </Section>
      </MintHeroContainer>

      <SpinnerModal
        open={open !== 0}
        state={open}
        name={name}
        code={referral}
        txHash={txHash}
        handleClose={handleClose}
      />
    </>
  );
};

export default memo(MintHero);
