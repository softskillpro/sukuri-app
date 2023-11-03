import { styled } from '@mui/material';
import Accordion from '@mui/material/Accordion';

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  color: 'white',
  background: 'transparent',
  padding: 0,
  '&.MuiExpansionPanel-root': {
    '&::before': {
      backgroundColor: 'red',
    },
  },
}));
