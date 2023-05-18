import React, { useState } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

type ButtonProps = {
  onClick: () => void;
  isLoading: boolean;
  label?: string;
  buttonStyles?: React.CSSProperties;
  customButtonStyles?: any; // Add customButtonStyles prop
};

const CustomButton = styled(Button)(({ theme }) => ({
  width: '322px',
  height: '61px',
  borderRadius: '3%',
  color: '#0F172A',
  backgroundColor: 'rgba(255, 192, 203, 1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#F88497', // Replace with your desired hover styles
  },
}));

const ReusableButton: React.FC<ButtonProps> = ({
  onClick,
  isLoading,
  label,
  buttonStyles,
  customButtonStyles, // Add customButtonStyles prop to destructured props
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setIsClicked(false);
  };

  return (
    <CustomButton
      onClick={handleClick}
      disabled={isLoading || isClicked}
      style={{ ...buttonStyles, ...customButtonStyles }} // Merge buttonStyles and customButtonStyles
    >
      {isLoading ? <Spinner /> : label}
    </CustomButton>
  );
};

const Spinner = () => {
  // CSS styles for the spinner
  const spinnerStyle = {
    // Add your spinner styles here
  };

  return <div style={spinnerStyle}>Loading...</div>;
};

export default ReusableButton;