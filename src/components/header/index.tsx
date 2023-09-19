import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import Button from '@/components/Common/StyledButton';
import HeaderModal from './HeaderModal';
import { MenuIcon, CloseIcon } from '@/components/Icons';
import { HeaderContainer } from './styles';
import { navs } from '@/constants';

const inter = Inter({ subsets: ['latin'] });

interface HeaderBodyProps {
  handleClose?: () => void;
  handleConnect: () => void;
}

const HeaderBody = ({ handleClose, handleConnect }: HeaderBodyProps) => (
  <FlexBox className='header-body'>
    {navs.map((nav) => (
      <Link
        key={nav.title}
        href={nav.link}
        target='_blank'
        onClick={handleClose}
      >
        <Typography variant='h4Mobile'>{nav.title}</Typography>
      </Link>
    ))}

    <Button onClick={handleConnect}>Connect</Button>
  </FlexBox>
);

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleConnect = useCallback(() => {
    handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <HeaderContainer>
          <FlexBox className='company-logo-wrapper'>
            <Image
              src='/images/logo.png'
              width={40}
              height={40}
              alt='Logo'
              className='company-logo'
            />

            <Typography
              variant='h5'
              lineHeight={1}
              ml={1}
              className='company-name'
            >
              Sukuri Protocol
            </Typography>

            <FlexBox className='beta-wrapper'>
              <Typography variant='body7' fontWeight={700}>
                BETA
              </Typography>
            </FlexBox>
          </FlexBox>

          {matches ? (
            <HeaderBody handleConnect={handleConnect} />
          ) : (
            <button className='menu-btn' onClick={handleOpen}>
              <MenuIcon sx={{ fontSize: 24 }} />
            </button>
          )}
        </HeaderContainer>
      </header>

      <HeaderModal open={open} handleClose={handleClose}>
        <div className={`${inter.className} header-body-wrapper`}>
          <FlexBox
            justifyContent='space-between'
            className='company-logo-wrapper'
          >
            <FlexBox>
              <Image
                src='/images/logo.png'
                width={40}
                height={40}
                alt='Logo'
                className='company-logo'
              />

              <Typography variant='h5' lineHeight={1} ml={1} fontWeight={700}>
                Sukuri Protocol
              </Typography>
            </FlexBox>

            <button className='close-btn' onClick={handleClose}>
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>
          </FlexBox>

          <FlexBox className='header-body'>
            {navs.map((nav) => (
              <Link
                key={nav.title}
                href={nav.link}
                target='_blank'
                onClick={handleClose}
              >
                <Typography variant='body2' fontWeight={700}>
                  {nav.title}
                </Typography>
              </Link>
            ))}
          </FlexBox>

          <div className='connect-btn-wrapper'>
            <Button
              onClick={handleConnect}
              sx={{ fontSize: '16px !important' }}
            >
              Connect
            </Button>
          </div>
        </div>
      </HeaderModal>
    </>
  );
};

export default Header;
