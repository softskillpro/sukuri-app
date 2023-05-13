import React, { useState } from 'react';
import ReuseableButton from '../common/ReuseableButton';

interface ImageUploadProps {
  onSubmit: (image: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onSubmit }) => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (imageData) {
      onSubmit(imageData);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageData && (
        <div>
          <img src={imageData} alt="Uploaded" />
        </div>
      )}
      {imageData && <ReuseableButton onClick={handleSubmit} isLoading={isLoading} label='Submit'/>}
    </div>
  );
};

export default ImageUpload;