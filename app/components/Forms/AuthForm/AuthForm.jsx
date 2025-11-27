import styles from "./AuthForm.module.css";

export const AuthForm = ({ children }) => {
  return (
    <form className={styles.AuthForm} action="">
      {children}
    </form>
  );
};
