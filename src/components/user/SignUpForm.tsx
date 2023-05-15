import React, { useState} from 'react';
import ColorPalette from './ColorPalette';
import ImageUpload from './ImageUpload';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

type FormProps =  {
  onClick: () => void;
};


const SignUpForm: React.FC<FormProps> = ({ onClick }) => {

  const colorsTrim = ['yellow', 'blue', 'gray', 'white'];
  const colorsBase = ['yellow', 'blue', 'red', 'green', 'orange', 'pink', 'purple', 'black'];
  const colorsFoil = ['yellow', 'blue', 'red', 'green'];

  const [selectedColorTrim, setSelectedColorTrim] = useState<string | null>(null);
  const [selectedColorBase, setSelectedColorBase] = useState<string | null>(null);
  const [selectedColorFoil, setSelectedColorFoil] = useState<string | null>(null);

  const handleColorSelectTrim = (color: string) => {
    setSelectedColorTrim(color);
  };
  const handleColorSelectBase = (color: string) => {
    setSelectedColorBase(color);
  };
  const handleColorSelectFoil = (color: string) => {
    setSelectedColorFoil(color);
  };

  return (
    <div>
      <>
      <div>
        <ColorPalette colors={colorsTrim} onColorSelect={handleColorSelectTrim} />
        <p>Selected color: {selectedColorTrim}</p>
      </div>
      <div>
        <ColorPalette colors={colorsBase} onColorSelect={handleColorSelectBase} />
        <p>Selected color: {selectedColorBase}</p>
      </div>
      <div>
        <ColorPalette colors={colorsFoil} onColorSelect={handleColorSelectFoil} />
        <p>Selected color: {selectedColorFoil}</p>
      </div>
      {/*<ImageUpload onSubmit={handleSubmit} />*/}
          </>
    </div>
  );
};


export default SignUpForm;