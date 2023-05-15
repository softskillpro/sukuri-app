import React, { useState } from 'react';

interface ImageUploadProps {
  onImageChange: (image: string | null) => void;
}

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
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageData && (
        <div>
          <img src={imageData} alt="Uploaded" style={{ width: '100px', height: '100px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;