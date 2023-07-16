import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { StyledSelectContainer } from './styles';

export interface StyledSelectProps {
  options: {
    name: string;
    value: string;
  }[];
  value: string;
  className?: string;
  handleSelectChange: (value: string) => void;
}

const StyledSelect = ({
  options,
  value,
  className = 'select-container',
  handleSelectChange,
}: StyledSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    handleSelectChange(event.target.value as string);
  };

  return (
    <StyledSelectContainer sx={{ minWidth: 120 }} className={className}>
      <FormControl fullWidth>
        <InputLabel id='common-select-label'>Age</InputLabel>
        <Select
          labelId='common-select-label'
          id='demo-simple-select'
          value={value}
          label=''
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.name} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledSelectContainer>
  );
};

export default StyledSelect;
