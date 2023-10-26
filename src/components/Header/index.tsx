import { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { useAccount, useDisconnect } from 'wagmi';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import HeaderModal from './HeaderModal';
import { MenuIcon, CloseIcon, LogoutIcon } from '@/components/Icons';
// import LinearDeterminate from '@/components/LinearDeterminate';
import ConnectWalletModal from '@/components/ConnectWalletModal';
// import useRuntimeContext from '@/hooks/useRuntimeContext';
import { HeaderContainer, ConnectButton, DisconnectButton } from './styles';
import { navs } from '@/constants';
import formatAddress from '@/utils/formatAddress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--Inter',
});

const Header = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  // const { isLoading, fetchHandler } = useRuntimeContext();

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = useState(0);

  const handleClick = (url: string) => {
    console.log(url);
    setOpen(0);
    if (url == '/leaderboard' || url == '/affiliates') {
      router.push(url);
    }
    // fetchHandler(true);
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

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <>
      {/* {isLoading && <LinearDeterminate />} */}

      <header style={{ width: '100%' }}>
        <HeaderContainer>
          <Link href={'https://sukuri.io'} className='logo-navigation'>
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
          </Link>

          {matches ? (
            <FlexBox className='header-body'>
              {navs.map((nav) => (
                <FlexBox
                  key={nav.title}
                  // href={nav.link}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    cursor: 'pointer',
                    color: theme.palette.text.primary,
                  }}
                  onClick={() => handleClick(nav.link)}
                >
                  {nav.title !== 'Leaderboard' &&
                    nav.title !== 'Affiliates' && (
                      <Typography variant='body7' color='accent.light'>
                        Coming soon
                      </Typography>
                    )}
                  <Typography variant='h4Mobile'>{nav.title}</Typography>
                </FlexBox>
              ))}

              <FlexBox>
                <ConnectButton
                  variant='Secondary'
                  disabled={isConnected}
                  sx={{ fontSize: isConnected ? 20 : 14 }}
                  onClick={handleConnect}
                >
                  {!isConnected ? 'Connect' : formatAddress(address)}
                </ConnectButton>

                {isConnected && (
                  <DisconnectButton sx={{ ml: 0.5 }} onClick={handleDisconnect}>
                    <LogoutIcon sx={{ fontSize: 20, fill: 'transparent' }} />
                  </DisconnectButton>
                )}
              </FlexBox>
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
            <Link href={'https://sukuri.io'} className='logo-navigation'>
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
            </Link>

            <button className='close-btn' onClick={handleClose}>
              <CloseIcon sx={{ fontSize: 16 }} />
            </button>
          </FlexBox>

          <FlexBox className='header-body'>
            {navs.map((nav) => (
              <FlexBox
                key={nav.title}
                // href={nav.link}
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  cursor: 'pointer',
                  color: theme.palette.text.primary,
                }}
                onClick={() => handleClick(nav.link)}
              >
                {nav.title !== 'Leaderboard' && nav.title !== 'Affiliates' && (
                  <Typography variant='body7' color='accent.light'>
                    Coming soon
                  </Typography>
                )}
                <Typography variant='h4Mobile'>{nav.title}</Typography>
              </FlexBox>
            ))}
          </FlexBox>

          <div className='connect-btn-wrapper'>
            <ConnectButton
              disabled={isConnected}
              onClick={handleConnect}
              className='connect-btn'
              sx={{
                fontSize: '16px !important',
                height: isConnected ? 54.5 : 'auto',
              }}
            >
              {!isConnected ? 'Connect' : formatAddress(address)}
            </ConnectButton>

            {isConnected && (
              <DisconnectButton sx={{ ml: 0.5 }} onClick={handleDisconnect}>
                <LogoutIcon sx={{ fontSize: 20, fill: 'transparent' }} />
              </DisconnectButton>
            )}
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
