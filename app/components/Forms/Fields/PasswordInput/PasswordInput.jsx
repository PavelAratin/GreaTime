// import styles from "./PasswordInput.module.css";
import { Input } from "../Input/Input";

export const PasswordInput = ({ placeholder }) => {
  return (
    <Input type="password" placeholder={placeholder} name="password"></Input>
  );
};
