import { StyledModalContainer } from './styles';

interface StyledModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactElement;
}

const StyledModal = ({ open, handleClose, children }: StyledModalProps) => (
  <StyledModalContainer
    open={open}
    onClose={handleClose}
    aria-labelledby='common-modal-title'
    aria-describedby='common-modal-description'
  >
    {children}
  </StyledModalContainer>
);

export default StyledModal;
