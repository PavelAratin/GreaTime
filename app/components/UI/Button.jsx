import styles from "./Button.module.css";

export const Button = ({ icon, children }) => {
  return (
    <button className={styles.button}>
      {icon}
      {children}
    </button>
  );
};
