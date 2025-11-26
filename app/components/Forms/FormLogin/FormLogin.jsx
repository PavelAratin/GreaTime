import Link from "next/link";
import { EmailInput } from "../Fields/EmailInput/EmailInput";
import { PasswordInput } from "../Fields/PasswordInput/PasswordInput";
import styles from "./FormLogin.module.css";
import { Button } from "../../UI/Button/Button";

export const FormLogin = () => {
  return (
    <div className={styles.FormLogin}>
      <div className={styles.FormLoginHeader}>
        <Link className={`${styles.FormLoginLink} ${styles.active}`} href="#">
          Вход
        </Link>
        <Link className={styles.FormLoginLink} href="#">
          Регистрация
        </Link>
      </div>
      <form className={styles.form} action="">
        <EmailInput></EmailInput>
        <PasswordInput></PasswordInput>
        <Button type="submit">Войти на сайт</Button>
      </form>
    </div>
  );
};
