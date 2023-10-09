import { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { useAccount } from 'wagmi';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { StyledButton } from '@/components/Common/StyledButton';
import HeaderModal from './HeaderModal';
import { MenuIcon, CloseIcon } from '@/components/Icons';
import LinearDeterminate from '@/components/LinearDeterminate';
import ConnectWalletModal from '@/components/ConnectWalletModal';
import useRuntimeContext from '@/hooks/useRuntimeContext';
import { HeaderContainer } from './styles';
import { navs } from '@/constants';
import formatAddress from '@/utils/formatAddress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--Inter',
});

const Header = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const { isLoading, fetchHandler } = useRuntimeContext();

  const { address, isConnected } = useAccount();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = useState(0);
  const [selected, setSelected] = useState(currentUrl);

  const handleClick = (url: string) => {
    setSelected(url);
    setOpen(0);
    fetchHandler(true);
  };

  const handleOpen = () => {
    setOpen(1);
  };

  const handleClose = useCallback(() => {
    setOpen(0);
  }, []);

  const handleConnect = useCallback(() => {
    setOpen(2);
  }, []);

  return (
    <>
      {isLoading && <LinearDeterminate />}

      <header style={{ width: '100%' }}>
        <HeaderContainer>
          <FlexBox className='company-logo-wrapper'>
            <Image
              src='/images/logo.png'
              priority
              width={36}
              height={36}
              alt='Logo'
            />

            <Typography variant='body6' ml={1}>
              Sukuri Protocol
            </Typography>

            <FlexBox className='beta-wrapper'>
              <Typography variant='h4Mobile'>BETA</Typography>
            </FlexBox>
          </FlexBox>

          {matches ? (
            <FlexBox className='header-body'>
              {navs.map((nav) => (
                <Link
                  key={nav.title}
                  href={nav.link}
                  style={{
                    color:
                      selected === nav.link
                        ? theme.palette.accent.main
                        : theme.palette.text.primary,
                  }}
                  onClick={() => handleClick(nav.link)}
                >
                  <Typography variant='h4Mobile'>{nav.title}</Typography>
                </Link>
              ))}

              <StyledButton disabled={isConnected} onClick={handleConnect}>
                {!isConnected ? 'Connect' : formatAddress(address)}
              </StyledButton>
            </FlexBox>
          ) : (
            <button className='menu-btn' onClick={handleOpen}>
              <MenuIcon sx={{ fontSize: 24 }} />
            </button>
          )}
        </HeaderContainer>
      </header>

      <HeaderModal open={open === 1} handleClose={handleClose}>
        <div className={`${inter.className} header-body-wrapper`}>
          <FlexBox
            justifyContent='space-between'
            className='company-logo-wrapper'
          >
            <FlexBox>
              <Image
                src='/images/logo.png'
                width={36}
                height={36}
                priority
                alt='Logo'
                className='company-logo'
              />

              <Typography variant='body6' ml={1}>
                Sukuri Protocol
              </Typography>

              <FlexBox className='beta-wrapper'>
                <Typography variant='h4Mobile'>BETA</Typography>
              </FlexBox>
            </FlexBox>

            <button className='close-btn' onClick={handleClose}>
              <CloseIcon sx={{ fontSize: 16 }} />
            </button>
          </FlexBox>

          <FlexBox className='header-body'>
            {navs.map((nav) => (
              <Link
                key={nav.title}
                href={nav.link}
                style={{
                  color:
                    selected === nav.link
                      ? theme.palette.accent.main
                      : theme.palette.text.primary,
                }}
                onClick={() => handleClick(nav.link)}
              >
                <Typography variant='h4Mobile'>{nav.title}</Typography>
              </Link>
            ))}
          </FlexBox>

          <div className='connect-btn-wrapper'>
            <StyledButton
              disabled={isConnected}
              onClick={handleConnect}
              sx={{ fontSize: '16px !important' }}
            >
              {!isConnected ? 'Connect' : formatAddress(address)}
            </StyledButton>
          </div>
        </div>
      </HeaderModal>

      {open === 2 && (
        <ConnectWalletModal open={open === 2} handleClose={handleClose} />
      )}
    </>
  );
};

export default Header;
