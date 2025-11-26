import styles from "./FormSearch.module.css";

export const Form = ({ className, children }) => {
  return (
    <form className={`${styles.FormSearch} ${className}`}>{children}</form>
  );
};
