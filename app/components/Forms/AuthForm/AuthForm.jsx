import styles from "./AuthForm.module.css";

export const AuthForm = ({ children, onSubmit }) => {
  return (
    <form className={styles.AuthForm} action="" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
