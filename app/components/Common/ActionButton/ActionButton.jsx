import styles from "./ActionButton.module.css";

export const ActionButton = ({ icon, text }) => {
  return (
    <button className={styles.ActionButton}>
      {icon} <span>{text}</span>
    </button>
  );
};
