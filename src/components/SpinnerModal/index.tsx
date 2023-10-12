import { memo, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Typography } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FlexBox } from '@/components/Common/FlexBox';
import {
  CloseIcon,
  SpinnerIcon,
  CopyIcon,
  TwitterIcon2,
} from '@/components/Icons';
import { SpinnerModalContainer } from './styles';

const inter = Inter({
  subsets: ['latin'],
  variable: '--Inter',
});

interface SpinnerModalProps {
  open: boolean;
  state: number;
  code: string;
  name: string;
  txHash?: `0x${string}`;
  handleClose: () => void;
}

const SpinnerModal = ({
  open,
  state,
  code,
  name,
  txHash,
  handleClose,
}: SpinnerModalProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(state);
  }, [state]);

  const handleClick = () => {
    setStep(3);
  };

  const handleTweetIntent = useCallback(() => {
    const text =
      encodeURIComponent(`I just purchased Sukuri Prime to gain early access to @sukuriprotocol 🌸
    
Use my referral link to get 10% off!
`);
    const url = encodeURIComponent(`https://app.sukuri.io/?ref=${name}`);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}&related=twitter%3Asukuriprotocol`,
      '_blank',
    );
  }, [name]);

  return (
    <SpinnerModalContainer
      open={open}
      onClose={handleClose}
      aria-labelledby='spinner-modal-title'
      aria-describedby='spinner-modal-description'
    >
      <FlexBox className='modal-wrapper'>
        <FlexBox className={`${inter.className} spinner-body`}>
          <div
            role='button'
            tabIndex={0}
            className='close-btn'
            onClick={handleClose}
            onKeyDown={handleClose}
          >
            <CloseIcon sx={{ fontSize: 13 }} />
          </div>

          {step === 1 ? (
            <>
              <Typography variant='h4' mb={1.5} textAlign='center'>
                Your purchase is processing...
              </Typography>

              <div className='spinner-animation'>
                <SpinnerIcon sx={{ fontSize: 108 }} />
              </div>

              <Link href={`https://etherscan.io/tx/${txHash}`} target='_blank'>
                <Typography variant='bodyBoldMobile'>
                  {'View transaction on explorer >'}
                </Typography>
              </Link>

              <Typography
                variant='body5'
                mt={1}
                textAlign='center'
                maxWidth='70%'
              >
                Please wait. This will only take a few seconds to complete.
              </Typography>
            </>
          ) : step === 2 ? (
            <>
              <Typography variant='h4' mb={1.5} textAlign='center'>
                Your purchase is complete!
              </Typography>

              <Image
                src='/images/mint_hero.png'
                width={300}
                height={500}
                alt='Mint Hero'
                className='mint-hero-bg'
              />

              <Typography
                variant='bodyBoldMobile'
                sx={{ cursor: 'pointer', color: 'ABD2FF' }}
                onClick={handleClick}
              >
                {'Share your referral link >'}
              </Typography>

              <Typography
                variant='body5'
                mt={1}
                textAlign='center'
                maxWidth='70%'
              >
                Share your link to get extra points and earn ETH
              </Typography>
            </>
          ) : (
            <>
              <div className='intro'>
                <Typography variant='body3'>
                  I just purchased Sukuri Prime to gain early access to
                  @sukuriprotocol.
                  <br />
                  Use my referral link to receive 10% off!
                  https://app.sukuri.io/?ref=
                  {name}
                </Typography>

                <Image
                  src='/images/soon.png'
                  width={300}
                  height={500}
                  alt='Mint Hero'
                  className='soon-bg'
                />
              </div>

              <FlexBox my={3} gap={2} className='button-list'>
                <CopyToClipboard text={`https://app.sukuri.io/?ref=${name}`}>
                  <button className='spinner-btn'>
                    Copy Ref{' '}
                    <CopyIcon
                      sx={{ marginLeft: 1, fontSize: 20, fill: 'transparent' }}
                    />
                  </button>
                </CopyToClipboard>

                <button className='spinner-btn' onClick={handleTweetIntent}>
                  Share on{' '}
                  <TwitterIcon2
                    sx={{ marginLeft: 1, fontSize: 20, fill: 'transparent' }}
                  />
                </button>
              </FlexBox>

              <Typography variant='body5' textAlign='center' maxWidth='70%'>
                Show off your Sukuri Prime Pass on X to get extra points and
                earn ETH
              </Typography>
            </>
          )}
        </FlexBox>
      </FlexBox>
    </SpinnerModalContainer>
  );
};

export default memo(SpinnerModal);
