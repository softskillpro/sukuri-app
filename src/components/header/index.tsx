import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import FlexBox from '@/components/common/FlexBox';
import LogoIcon from '@/components/svgs/LogoIcon';
import HambergerMenuIcon from '@/components/svgs/HambergerMenuIcon';
import { HeaderContainer, StyledDrawer } from './styles';

const navs = [
  {
    title: 'Marketplace',
    link: '/marketplace',
  },
  {
    title: 'Resources',
    link: '/resources',
  },
  {
    title: 'Affiliates',
    link: '/affiliates',
  },
  {
    title: 'Start Selling',
    link: '/start-selling',
  },
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
}

const HeaderBody = ({ handleClose }: HeaderBodyProps) => (
  <FlexBox className='header-body'>
    {navs.map((nav) => (
      <Link key={nav.link} href={nav.link} onClick={handleClose}>
        <Typography
          variant='custom2'
          fontWeight={700}
          color='text.primary'
          mr={5}
        >
          {nav.title}
        </Typography>
      </Link>
    ))}

    <Image
      src='/images/avatar.png'
      width={40}
      height={40}
      className='avatar'
      alt='Avatar'
    />
  </FlexBox>
);

const Header = () => {
  const matches = useMediaQuery('(min-width:900px)');

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <HeaderContainer>
        <Link href='/'>
          <LogoIcon sx={{ fontSize: 50 }} />
          <Typography variant='body1' color='text.primary' ml={2}>
            Sukuri <span style={{ fontWeight: 400 }}>Protocol</span>
          </Typography>
        </Link>

        {matches ? (
          <HeaderBody handleClose={handleClose} />
        ) : (
          <IconButton onClick={handleOpen}>
            <HambergerMenuIcon />
          </IconButton>
        )}
      </HeaderContainer>

      <HeaderDrawer open={open} handleClose={handleClose}>
        <Link href='/'>
          <LogoIcon sx={{ fontSize: 50 }} />
          <Typography variant='body1' color='text.primary' ml={2}>
            Sukuri <span style={{ fontWeight: 400 }}>Protocol</span>
          </Typography>
        </Link>

        <HeaderBody handleClose={handleClose} />
      </HeaderDrawer>
    </>
  );
};

export default Header;
