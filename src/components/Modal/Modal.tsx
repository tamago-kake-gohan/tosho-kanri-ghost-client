import "./Modal.css";

interface ModalProps {
  closeModal: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ closeModal, message }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-content">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
