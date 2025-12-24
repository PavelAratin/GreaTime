import { useEffect } from "react";
import { CloseIcon } from "../../icons/CloseIcon/CloseIcon";
import { Button } from "../Button/Button";
import styles from "./Modal.module.css";

export const Modal = ({ isOpen = false, onClose, children }) => {
  const handlerOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={handlerOverlayClick}
      role="dialog"
      aria-modal="true">
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.titleH3}>Регистрация пользователя</h3>
          <Button className={styles.closeButtonIcon} onClick={onClose}>
            <CloseIcon></CloseIcon>
          </Button>
        </div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          <Button onClick={() => {}} className={styles.modalButton}>
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
};
