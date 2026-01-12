import Link from "next/link";
import styles from "./AuthLinks.module.css";
import LocalFont from "next/font/local";

const GTEestiProDisplayFontLight = LocalFont({
  src: "./../../../../assets/fonts/GTEestiProDisplay/woff2/gteestiprodisplay_light.woff2",
  weight: "350",
});

export const AuthTabs = ({ isLogin }) => {
  return (
    <ul
      className={`${styles.AuthLinksHeader} ${GTEestiProDisplayFontLight.className}`}>
      <li>
        <Link
          className={`${styles.AuthLinksLink} ${isLogin ? styles.active : ""}`}
          href="/auth/login">
          Вход
        </Link>
      </li>
      <li>
        <Link
          className={`${styles.AuthLinksLink} ${!isLogin ? styles.active : ""}`}
          href="/auth/registration">
          Регистрация
        </Link>
      </li>
    </ul>
  );
};
