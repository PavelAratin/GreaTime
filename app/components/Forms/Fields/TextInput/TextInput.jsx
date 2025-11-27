import { Input } from "../Input/Input";
import styles from "./TextInput.module.css";

export const TextInput = ({ placeholder, name }) => {
  return (
    <Input
      className={styles.TextInput}
      type="text"
      placeholder={placeholder}
      name={name}></Input>
  );
};
