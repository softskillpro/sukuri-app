import React, { useState} from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

type FormProps =  {
  onClick: () => void;
};


const PlaceHolderDashBoard: React.FC<FormProps> = ({ onClick }) => {

  return (
    <div>
    </div>
  );
};


export default PlaceHolderDashBoard;