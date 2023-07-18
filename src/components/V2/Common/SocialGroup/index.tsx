import { useState } from 'react';
import Link from 'next/link';
import ArrowbackIcon from '@/components/v2/svgs/ArrowbackIcon';
import ArrowdownIcon from '@/components/v2/svgs/ArrowdownIcon';
import socials from '@/utils/socials';

import {
  SocialGroupContainer,
  SocialGroupWrapper,
  SocialGroupPopper,
} from './styles';

export interface SocialGroupProps {
  variant?: 'sm' | 'md';
}

const SocialWrapper = ({
  onClick,
  variant = 'md',
}: {
  onClick: () => void;
  variant?: 'sm' | 'md';
}) => {
  return (
    <SocialGroupWrapper variant={variant}>
      {socials.map((social, id) => {
        const SocialIcon = social.icon;

        return (
          <Link key={`social-${id}`} href={social.link} onClick={onClick}>
            <SocialIcon sx={{ fontSize: 19 }} />
          </Link>
        );
      })}
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

  return (
    <>
      <SocialGroupContainer>
        {variant === 'sm' && (
          <button
            aria-describedby={id}
            type='button'
            className='link-button'
            onClick={handleClick}
          >
            Links
            {clicked ? (
              <ArrowbackIcon sx={{ fontSize: 14 }} />
            ) : (
              <ArrowdownIcon sx={{ fontSize: 14 }} />
            )}
          </button>
        )}

        {variant === 'md' && <SocialWrapper onClick={handleClose} />}
      </SocialGroupContainer>

      <SocialGroupPopper id={id} open={open} anchorEl={anchorEl}>
        <SocialWrapper variant='sm' onClick={handleClose} />
      </SocialGroupPopper>
    </>
  );
};

export default SocialGroup;
