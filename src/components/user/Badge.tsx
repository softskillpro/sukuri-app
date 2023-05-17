import React, { FC } from 'react';
import { styled } from '@mui/system';

interface BadgeProps {
  file?: string | null;
  name?: string | null;
  badgeColor?: string;
  borderColor?: string;
  fontColor?: string;
  username?: string;
  walletAddress?: string;
}

const BadgeContainer = styled('div')<{ badgeColor?: string; borderColor?: string }>`
  width: 300px;
  height: 500px;
  border: 2px solid ${(props) => props.borderColor || '#000'};
  background-color: ${(props) => props.badgeColor || '#ccc'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled('img')`
  width: 200px;
  height: 200px;
`;

const Text = styled('div')<{ fontColor?: string }>`
  color: ${(props) => props.fontColor || '#000'};
  font-size: 20px;
  margin-top: 20px;
`;

const Badge: FC<BadgeProps> = ({
  file,
  name = '',
  badgeColor = '#ccc',
  borderColor = '#000',
  fontColor = '#000',
  username = '',
  walletAddress = '',
}) => {
  return (
    <BadgeContainer badgeColor={badgeColor} borderColor={borderColor}>
      <Text fontColor={fontColor}>Wallet Address:</Text>
      <Text fontColor={fontColor}>{walletAddress}</Text>
      {file && <Image src={file} />}
      <Text fontColor={fontColor}>{name}</Text>
      <Text fontColor={fontColor}>{username}</Text>
    </BadgeContainer>
  );
};

export default Badge;
