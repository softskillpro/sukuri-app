import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useAccount } from 'wagmi';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import HambergerMenuIcon from '@/components/v2/svgs/HambergerMenuIcon';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import { montserrat } from '@/components/v2/Common/CustomFont';
import ConnectWallet from '@/components/v2/ConnectWallet';
import formatAddress from '@/utils/formatAddress';

import {
  HeaderContainer,
  StyledDrawer,
  HeaderBodyContainer,
  HeaderPopper,
} from './styles';

interface NavsProps {
  title: string;
  link: string;
}

const navs: NavsProps[] = [
  {
    title: 'Marketplace',
    link: '/marketplace',
  },
  {
    title: 'My Subscriptions',
    link: '/subscription-overview',
  },
  {
    title: 'Docs',
    link: 'https://sukuri.notion.site/Sukuri-Protocol-c254d45224b14afabbd9e79d1e05d035',
  },
  // {
  //   title: 'Start Selling',
  //   link: '/start-selling',
  // },
];

interface HeaderDrawerProps {
  open: boolean;
  children: React.ReactNode;
  handleClose: () => void;
}

const HeaderDrawer = ({ open, children, handleClose }: HeaderDrawerProps) => (
  <StyledDrawer anchor='left' open={open} onClose={handleClose}>
    {children}
  </StyledDrawer>
);

interface HeaderBodyProps {
  handleClose: () => void;
  handleConnect: () => void;
}

const HeaderBody = ({ handleClose, handleConnect }: HeaderBodyProps) => {
  const matches = useMediaQuery('(min-width:1024px)');
  const mobile = useMediaQuery('(min-width:600px)');
  const { address, isConnected } = useAccount();

  const [clicked, setClicked] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setClicked((prev) => !prev);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleCloseChange = () => {
    setClicked(false);
    setAnchorEl(null);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'header-popper' : undefined;

  return (
    <>
      <HeaderBodyContainer className='header-body'>
        {matches || !mobile ? (
          navs.map((nav) => (
            <Link key={nav.link} href={nav.link} onClick={handleClose}>
              <Typography
                variant='labelMd'
                fontWeight={700}
                color='text.primary'
                textTransform='uppercase'
              >
                {nav.title}
              </Typography>
            </Link>
          ))
        ) : (
          <>
            <Link href={navs[0]?.link ?? ''} onClick={handleClose}>
              <Typography
                variant='labelMd'
                fontWeight={700}
                color='text.primary'
                textTransform='uppercase'
              >
                {navs[0]?.title}
              </Typography>
            </Link>

            <button
              aria-describedby={id}
              type='button'
              className='header-more-button'
              onClick={handleClick}
            >
              More
              <Image
                src={
                  clicked
                    ? '/images/v2/arrow_back.png'
                    : '/images/v2/arrow_down.png'
                }
                width={14}
                height={14}
                alt='Arrow'
              />
            </button>
          </>
        )}

        <StyledButton
          variants='sm'
          sx={{ ml: 2.5, fontSize: '12px !important' }}
          disabled={isConnected}
          onClick={handleConnect}
        >
          {isConnected ? formatAddress(address) : 'Connect'}
        </StyledButton>
      </HeaderBodyContainer>

      <HeaderPopper id={id} open={open} anchorEl={anchorEl}>
        {navs.map((nav, idx) => {
          return (
            idx !== 0 && (
              <Link key={nav.link} href={nav.link} onClick={handleCloseChange}>
                <Typography
                  variant='labelMd'
                  fontWeight={700}
                  color='text.primary'
                  textTransform='uppercase'
                  sx={{ fontFamily: montserrat.style.fontFamily }}
                >
                  {nav.title}
                </Typography>
              </Link>
            )
          );
        })}
      </HeaderPopper>
    </>
  );
};

const Header = () => {
  const matches = useMediaQuery('(min-width:600px)');

  const [open, setOpen] = useState(0);

  const handleDrawerOpen = () => {
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
      <header>
        <HeaderContainer>
          <Link href='/'>
            <Image
              src='/images/v2/logo.png'
              width={35}
              height={35}
              alt='Logo'
            />

            <Typography
              variant='wordmarkHeader'
              color='text.primary'
              textTransform='uppercase'
              ml={2}
            >
              Sukuri <span style={{ fontWeight: 400 }}>Protocol</span>
            </Typography>
          </Link>

          {matches ? (
            <HeaderBody
              handleClose={handleClose}
              handleConnect={handleConnect}
            />
          ) : (
            <IconButton onClick={handleDrawerOpen}>
              <HambergerMenuIcon />
            </IconButton>
          )}
        </HeaderContainer>

        <HeaderDrawer open={open === 1} handleClose={handleClose}>
          <Link href='/'>
            <Image
              src='/images/v2/logo.png'
              priority
              width={30}
              height={30}
              alt='Logo'
            />
            <Typography
              variant='h4'
              color='text.primary'
              ml={2}
              textTransform='uppercase'
            >
              Sukuri <span style={{ fontWeight: 400 }}>Protocol</span>
            </Typography>
          </Link>

          <HeaderBody handleClose={handleClose} handleConnect={handleConnect} />
        </HeaderDrawer>
      </header>

      <ConnectWallet open={open === 2} onClose={handleClose} />
    </>
  );
};

export default Header;
