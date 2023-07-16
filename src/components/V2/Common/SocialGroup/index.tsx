import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  SocialGroupContainer,
  SocialGroupWrapper,
  SocialGroupPopper,
} from './styles';

const socials = [
  {
    name: 'discord',
    link: '',
  },
  {
    name: 'github',
    link: '',
  },
  {
    name: 'twitter',
    link: '',
  },
  {
    name: 'instagram',
    link: '',
  },
  {
    name: 'medium',
    link: '',
  },
  {
    name: 'website',
    link: '',
  },
];

export interface SocialGroupProps {
  variant?: 'sm' | 'md';
}

const SocialWrapper = ({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) => {
  return (
    <SocialGroupWrapper open={open}>
      {socials.map((social) => (
        <Link key={social.name} href={social.link} onClick={onClick}>
          <Image
            src={`/images/v2/${social.name}.png`}
            width={19}
            height={19}
            alt='Social'
          />
        </Link>
      ))}
    </SocialGroupWrapper>
  );
};

const SocialGroup = ({ variant = 'md' }: SocialGroupProps) => {
  const [clicked, setClicked] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setClicked((prev) => !prev);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setClicked(false);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'social-popper' : undefined;

  console.log(open);

  return (
    <>
      <SocialGroupContainer variant={variant}>
        {variant === 'sm' && (
          <button
            aria-describedby={id}
            type='button'
            className='link-button'
            onClick={handleClick}
          >
            Links
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
        )}

        {variant === 'md' && (
          <SocialWrapper open={open} onClick={handleClose} />
        )}
      </SocialGroupContainer>

      <SocialGroupPopper id={id} open={open} anchorEl={anchorEl}>
        <SocialWrapper open={open} onClick={handleClose} />
      </SocialGroupPopper>
    </>
  );
};

export default SocialGroup;
