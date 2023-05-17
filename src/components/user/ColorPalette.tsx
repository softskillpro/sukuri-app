import React, { useState } from 'react';
import { styled } from '@mui/system';

interface ColorSwatchProps {
  colors: string[];
  onColorSelect: (color: string) => void;
}

const ColorPalette: React.FC<ColorSwatchProps> = ({ colors, onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  const PaletteContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0',
    width: '230px',
    borderRadius: '5px',
    overflow: 'hidden',
  });

  const ColorSwatch = styled('div')(({ color }: { color: string }) => ({
    backgroundColor: color,
    width: '50px',
    height: '50px',
    position: 'relative',
    borderRadius: '5px',
    cursor: 'pointer',
  }));

  const Checkmark = styled('span')({
    position: 'absolute',
    top: '0',
    right: '0',
    fontSize: '20px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px',
  });

  return (
    <PaletteContainer>
      {colors.map((color) => (
        <ColorSwatch
          key={color}
          color={color}
          onClick={() => handleColorClick(color)}
        >
          {selectedColor === color && <Checkmark>&#10003;</Checkmark>}
        </ColorSwatch>
      ))}
    </PaletteContainer>
  );
};

export default ColorPalette;