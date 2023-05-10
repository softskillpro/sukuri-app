import React, { useState, ButtonHTMLAttributes } from 'react';

type ButtonProps =  ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  isLoading: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, isLoading, style }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setIsClicked(false);
  };

  const buttonStyles = {
    // Add your button styles here
    width: '100px',
    height: '40px',
    borderRadius: '15%',
    backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Add more styles as needed
    ...(style || {}),
  };

  return (
    <button onClick={handleClick} disabled={isLoading || isClicked} style={buttonStyles}>
      {isLoading ? <Spinner /> : null}
    </button>
  );
};

const Spinner = () => {
  // CSS styles for the spinner
  const spinnerStyle = {
    // Add your spinner styles here
  };

  return <div style={spinnerStyle}>Loading...</div>;
};

export default Button;