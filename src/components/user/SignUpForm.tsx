import React, { useState} from 'react';
import ColorPalette from './ColorPalette';
import ImageUpload from './ImageUpload';
import ReuseableButton from '../common/ReuseableButton';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import UserNameRandom from './UserNameRandom';

type FormProps =  {
  onClick: () => void;
};

const customButtonStyles = {
  backgroundColor: 'pink',
  color: 'white',
  fontWeight: 'bold',
  height:  '100px',
};


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
    <div>
      <><div>
       <UserNameRandom onInputChange={handleInputChange} />
       <p>Username: {username}</p>
      </div>
      <div>
        <ColorPalette colors={colorsTrim} onColorSelect={handleColorSelectTrim} />
        <p>Trim Selected color: {selectedColorTrim}</p>
      </div>
      <div>
        <ColorPalette colors={colorsBase} onColorSelect={handleColorSelectBase} />
        <p>Base Selected color: {selectedColorBase}</p>
      </div>
      <div>
        <ColorPalette colors={colorsFoil} onColorSelect={handleColorSelectFoil} />
        <p>Foil Selected color: {selectedColorFoil}</p>
      </div>
      <div>
        <ImageUpload onImageChange={handleSubmit} />
        <p></p>
      </div>
      <div>
      <ReuseableButton onClick={handleClick} isLoading={isLoading} label="Submit!" buttonStyles={customButtonStyles}/>
      </div>
          </>
    </div>
  );
};


export default SignUpForm;