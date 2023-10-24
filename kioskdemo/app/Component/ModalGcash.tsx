import React, { ReactNode } from "react";
import styles from "../Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalGcash: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <p>Close</p>
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalGcash;
