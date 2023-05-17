import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

interface ImageUploadProps {
  onImageChange: (image: string | null) => void;
}

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
  // Added CSS to make the input visible
  '& input[type="file"]': {
    display: 'block',
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
}));

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange }) => {
  const [imageData, setImageData] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setImageData(imageData);
        onImageChange(imageData);
      };
      reader.readAsDataURL(file);
    } else {
      setImageData(null);
      onImageChange(null);
    }
  };

  return (
    <Grid container spacing={.5}>
      {imageData && (
        <Grid item xs={12} sm={5}>
          <img src={imageData} alt="Uploaded" style={{ width: '302px', height: '302px' }} />
        </Grid>
      )}
      {!imageData && (
        <Grid item xs={12} sm={5}>
          <div>
            {/* Sukuri Logo Here */}
            <div style={{ background: '#FFFFFF', width: '302px', height: '302px' }} />
          </div>
        </Grid>
      )}
      <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <CustomButton>
          Select Image
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </CustomButton>
      </Grid>
    </Grid>
  );
};

export default ImageUpload;