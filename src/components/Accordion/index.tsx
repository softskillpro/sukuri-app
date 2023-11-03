import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ArrowDownIcon } from '../Icons';
import { StyledAccordion } from './styles';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const BasicAccordion: React.FC<IProps> = ({ title, children }) => {
  return (
    <StyledAccordion defaultExpanded disableGutters>
      <AccordionSummary
        expandIcon={
          <ArrowDownIcon
            sx={{ fontSize: '14px !important', fill: 'transparent' }}
          />
        }
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography variant='h5'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default BasicAccordion;
