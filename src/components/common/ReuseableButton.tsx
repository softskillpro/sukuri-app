import React, { useState} from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

type ButtonProps =  {
  onClick: () => void;
  isLoading: boolean;
  label?: string;
  buttonStyles?: React.CSSProperties;
};


const CustomButton = styled(Button)(({ theme }) => ({
  width: '100px',
  height: '40px',
  borderRadius: '10%',
  backgroundColor: "pink", //theme.palette.primary.main, MUI styling
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ReuseableButton: React.FC<ButtonProps> = ({ onClick, isLoading, label, buttonStyles }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setIsClicked(false);
  };


  return (
    <CustomButton onClick={handleClick} disabled={isLoading || isClicked} style={buttonStyles}>
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

export default ReuseableButton;