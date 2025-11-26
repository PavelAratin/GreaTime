import styles from "./Input.module.css";

export const Input = ({ type, placeholder, name }) => {
  return (
    <input
      className={styles.Input}
      type={type}
      placeholder={placeholder}
      name={name}></input>
  );
};
