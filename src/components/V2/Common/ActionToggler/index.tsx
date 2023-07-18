import type { Action } from '@/interface/action.interface';
import { ActionTogglerContainer, ActionTogglerButton } from './styles';

interface ActionTogglerProps {
  action: Action;
  onClick: (_action: Action) => void;
}

const ActionToggler = ({ action, onClick }: ActionTogglerProps) => {
  return (
    <ActionTogglerContainer>
      {['Active', 'Cancelling'].map((item) => (
        <ActionTogglerButton
          key={item}
          active={`${item === action}`}
          onClick={() => onClick(item as Action)}
        >
          {item}
        </ActionTogglerButton>
      ))}
    </ActionTogglerContainer>
  );
};

export default ActionToggler;
