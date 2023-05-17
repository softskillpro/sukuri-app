import React, { useState} from 'react';
import ColorPalette from './ColorPalette';
import ImageUpload from './ImageUpload';
import ReuseableButton from '../common/ReuseableButton';
import Badge from './Badge';
import { Grid, Paper, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import UserNameRandom from './UserNameRandom';


type FormProps =  {
  onClick: () => void;
};

const containerStyle = {
  width: '100%',
  aspectRatio: '1388/673',
  backgroundColor: '#020617',
  padding: '16px',
  paddingTop: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const WhiteFont = styled('p')({
  color: 'white',
});


const customButtonStyle = ({
  width: '322px',
  height: '61px',
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
});

const SignUpForm: React.FC<FormProps> = ({ onClick }) => {

  const colorsTrim = ['yellow', 'blue', 'gray', 'white'];
  const colorsBase = ['yellow', 'blue', 'red', 'green', 'orange', 'pink', 'purple', 'black'];
  const colorsFoil = ['yellow', 'blue', 'red', 'green'];

  const [selectedColorTrim, setSelectedColorTrim] = useState<string | null>(null);
  const [selectedColorBase, setSelectedColorBase] = useState<string | null>(null);
  const [selectedColorFoil, setSelectedColorFoil] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleColorSelectTrim = (color: string) => {
    setSelectedColorTrim(color);
  };
  const handleColorSelectBase = (color: string) => {
    setSelectedColorBase(color);
  };
  const handleColorSelectFoil = (color: string) => {
    setSelectedColorFoil(color);
  };

  const handleInputChange = (value: string) => {
    setUsername(value)
    // You can perform any actions with the input value here
  };

  const handleSubmit = (image: string | null) => {
    // Handle the uploaded image data here
    if (image) {
      console.log('Image uploaded:', image);
    } else {
      console.log('Image cleared');
    }
    setProfilePicture(image)
    console.log('Image submitted:', image);
  };

  const handleClick = () => {
    setIsLoading(true);
    console.log("add data to database here - make async function ")
    // Simulating an asynchronous action
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };


  return (
    <Box sx={containerStyle}>
    <Grid container spacing={{ xs: 2, md: 3 }} sx={{ justifyContent: 'space-between', padding: '0 16px' }}>
      <Grid item xs={12} md={6}>
      <div><WhiteFont>Username: {username}</WhiteFont>
       <UserNameRandom onInputChange={handleInputChange} />
      </div>
      <div>
      <WhiteFont>Profile Picture</WhiteFont>
        <ImageUpload onImageChange={handleSubmit} />
        <p></p>
      </div>
      </Grid>
      <Grid item xs={12} md={3}>
      <div>
        <ColorPalette colors={colorsTrim} onColorSelect={handleColorSelectTrim} />
        <WhiteFont>Trim Selected color: {selectedColorTrim}</WhiteFont>
      </div>
      <div>
        <ColorPalette colors={colorsBase} onColorSelect={handleColorSelectBase} />
        <WhiteFont>Base Selected color: {selectedColorBase}</WhiteFont>
      </div>
      <div>
        <ColorPalette colors={colorsFoil} onColorSelect={handleColorSelectFoil} />
        <WhiteFont>Foil Selected color: {selectedColorFoil}</WhiteFont>
      </div>
      </Grid>
      <Grid item xs={12} md={3}>
      <Badge
        file={profilePicture}
        name={username}
        badgeColor={selectedColorBase}
        borderColor={selectedColorTrim}
        fontColor={selectedColorFoil}
        walletAddress="0x15DRFGqwewe9235g23..."
      />
      </Grid>
    </Grid>
    <div>
      <ReuseableButton onClick={handleClick} isLoading={isLoading} customButtonStyles={customButtonStyle} label="Submit!" />
      </div>
    </Box>
  );
};


export default SignUpForm;