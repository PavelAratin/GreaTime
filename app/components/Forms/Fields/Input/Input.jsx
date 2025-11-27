import styles from "./Input.module.css";

export const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      className={styles.Input}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}></input>
  );
};
