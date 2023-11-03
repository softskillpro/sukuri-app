import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import { StyledFormControlLabel } from './style';
import { categories } from '@/constants';

interface State {
  trading: boolean;
  'sports-betting': boolean;
  'e-commerce': boolean;
  gaming: boolean;
  business: boolean;
  daos: boolean;
}

export default function CheckboxesGroup() {
  const [state, setState] = React.useState<State>({
    trading: false,
    'sports-betting': false,
    'e-commerce': false,
    gaming: false,
    business: false,
    daos: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormGroup>
        {categories.map((category, index) => {
          return (
            <StyledFormControlLabel
              key={index}
              control={
                <Checkbox
                  sx={{
                    [`&, &.${checkboxClasses.checked}`]: {
                      color: 'grey',
                    },
                    '& .MuiSvgIcon-root': {
                      width: 22,
                      height: 22,
                    },
                  }}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  checked={state[category.value]}
                  onChange={handleChange}
                  name={category.value}
                />
              }
              label={category.title}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
}
