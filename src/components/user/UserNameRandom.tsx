import React, { useState } from 'react';
import { Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

type FormProps = {
  onInputChange: (value: string) => void;
};

const CustomButton = styled(Button)(({ theme }) => ({
  width: '216px',
  height: '41px',
  borderRadius: '1%',
  color: 'rgba(255, 192, 203, 1)',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid rgba(255, 192, 203, 1)`,
  '&:hover': {
    backgroundColor: '#F88497', // Replace with your desired hover styles
  },
  '&:hover, &:focus': {
    outline: `2px solid rgba(255, 192, 203, 1)`,
    outlineOffset: '-2px',
    backgroundColor: 'transparent',
  },
}));

const UserNameRandom: React.FC<FormProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  const handleRandomizeClick = () => {
    const randomString = generateRandomString(); // Replace this with your own random string generation logic
    setInputValue(randomString);
    onInputChange(randomString);
  };

  const generateRandomString = () => {
    // Replace this with your own random string generation logic
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  return (
  <Grid container spacing={1}>
    <Grid item xs={12} sm={6}>
      <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <CustomButton onClick={handleRandomizeClick}>Randomize</CustomButton>
      </Box>
    </Grid>
  </Grid>
  );
};

export default UserNameRandom;