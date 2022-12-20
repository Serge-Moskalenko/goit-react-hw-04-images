
import { ModalStyled } from './Modal.styled';
import { Modal } from '@mui/material';

export const Modals = ({ closeModal,children}) => {
  return (
    <Modal open={true} onClose={closeModal}>
      <div onClick={closeModal} className="Overlay">
        <ModalStyled>{children}</ModalStyled>
      </div>
    </Modal>
  );
};