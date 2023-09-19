import { HeaderModalContainer } from './styles';

interface HeaderModalProps {
  open: boolean;
  children: React.ReactElement;
  handleClose: () => void;
}

const HeaderModal = ({ open, handleClose, children }: HeaderModalProps) => {
  return (
    <HeaderModalContainer
      open={open}
      onClose={handleClose}
      aria-labelledby='header-modal-title'
      aria-describedby='header-modal-description'
    >
      {children}
    </HeaderModalContainer>
  );
};

export default HeaderModal;
