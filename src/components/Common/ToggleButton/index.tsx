import { memo } from 'react';
import { CircleIcon } from '@/components/Icons';
import { ToggleButtonContainer } from './styles';

interface ToggleButtonProps {
  active: boolean;
  handleActiveChange: () => void;
}

const ToggleButton = ({ active, handleActiveChange }: ToggleButtonProps) => {
  return (
    <ToggleButtonContainer active={`${active}`} onClick={handleActiveChange}>
      <CircleIcon sx={{ fontSize: 17.5 }} />
    </ToggleButtonContainer>
  );
};

export default memo(ToggleButton);
