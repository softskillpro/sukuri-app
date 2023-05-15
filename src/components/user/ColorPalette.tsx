import React, { useState } from 'react';

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

  return (
    <div>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => handleColorClick(color)}
          style={{
            backgroundColor: color,
            display: 'inline-block',
            width: '50px',
            height: '50px',
            margin: '5px',
            position: 'relative',
          }}
        >
          {selectedColor === color && (
            <span
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                fontSize: '20px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px',
              }}
            >
              &#10003;
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;