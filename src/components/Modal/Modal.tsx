import Styles from "@/components/Modal/Modal.module.scss";

interface ModalProps {
  closeModal: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ closeModal, message }) => {
  return (
    <div className={Styles.wrapper}>
      M{" "}
      <div className={Styles.modal}>
        <button className={Styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        <div className={Styles.modalContent}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
