import { CheckGreenIcon } from "../../icons/CheckGreenIcon/CheckGreenIcon";
import styles from "./SuccessRegistrationContent.module.css";

export const SuccessRegistrationContent = () => {
  return (
    <>
      <CheckGreenIcon></CheckGreenIcon>
      <p className={styles.modalText}>Пользователь успешно зарегистрирован</p>
    </>
  );
};
