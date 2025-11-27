import Link from "next/link";
import { EmailInput } from "../Fields/EmailInput/EmailInput";
import { PasswordInput } from "../Fields/PasswordInput/PasswordInput";
import styles from "./AuthFormLayout.module.css";
import { Button } from "../../UI/Button/Button";
import { AuthForm } from "../AuthForm/AuthForm";
import { TextInput } from "../Fields/TextInput/TextInput";
import { PhoneInput } from "../Fields/PhoneInput/PhoneInput";

export const AuthFormLayout = ({ isLogin }) => {
  console.log(isLogin);
  return (
    <div className={styles.AuthFormLayout}>
      <div className={styles.AuthFormLayoutHeader}>
        <Link
          className={`${styles.AuthFormLayoutLink} ${
            isLogin ? styles.active : ""
          }`}
          href="/auth/login">
          Вход
        </Link>
        <Link
          className={`${styles.AuthFormLayoutLink} ${
            !isLogin ? styles.active : ""
          }`}
          href="/auth/registration">
          Регистрация
        </Link>
      </div>
      {!isLogin && (
        <div className={styles.AuthFormLayoutHeader}>
          <Link className={styles.AuthFormLayoutLink} href="#">
            Физ.лицо
          </Link>
          <Link
            className={`${styles.AuthFormLayoutLink} ${styles.active}`}
            href="#">
            Юр.лицо
          </Link>
        </div>
      )}
      <AuthForm>
        {!isLogin && <TextInput placeholder="ФИО контактного лица"></TextInput>}
        {!isLogin && (
          <PhoneInput placeholder="Телефон контактного лица"></PhoneInput>
        )}
        <EmailInput
          placeholder={
            isLogin ? "Введите ваш E-mail" : "E-mail организации"
          }></EmailInput>
        {isLogin && (
          <PasswordInput placeholder="Введите ваш пароль"></PasswordInput>
        )}
        {!isLogin && (
          <TextInput placeholder="Инн организации" name="inn"></TextInput>
        )}
        <Button type="submit">
          {isLogin ? "Войти на сайт" : "Зарегистрироваться"}
        </Button>
      </AuthForm>
    </div>
  );
};
