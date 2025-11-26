import styles from "./EmailInput.module.css";
import { Input } from "../Input/Input";

export const EmailInput = () => {
  return (
    <Input type="email" placeholder="Введите ваш E-mail" name="email"></Input>
  );
};
