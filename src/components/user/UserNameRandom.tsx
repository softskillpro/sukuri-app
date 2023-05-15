import React, { useState } from 'react';

type FormProps = {
  onInputChange: (value: string) => void;
};

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
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleRandomizeClick}>Randomize</button>
    </div>
  );
};

export default UserNameRandom;