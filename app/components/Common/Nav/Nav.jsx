import Link from "next/link";
import styles from "./Nav.module.css";
import LocalFont from "next/font/local";

const GTEestiProDisplayFontMedium = LocalFont({
  src: "./../../../../assets/fonts/GTEestiProDisplay/woff2/gteestiprodisplay_light.woff2",
  weight: "350",
});
const GTEestiProDisplayFontRegular = LocalFont({
  src: "./../../../../assets/fonts/GTEestiProDisplay/woff2/gteestiprodisplay_regular.woff2",
  weight: "400",
});

const Nav = () => {
  return (
    <nav className={`${styles.nav} ${GTEestiProDisplayFontMedium.className}`}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link className={styles.navLink} href="/">
            Оптовым покупателям
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.navLink} href="/">
            Розничным покупателям
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.navLink} href="/">
            Регистрация для юр.лиц
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.navLink} href="/">
            Регистрация для физ.лиц
          </Link>
        </li>
        <li className={`${styles.listItem} ${styles.listItemTelephone}`}>
          <Link
            className={`${styles.navLink} ${styles.telephone} ${GTEestiProDisplayFontRegular.className}`}
            href="tel:+7(999)99-99-99">
            +7 (999) 99-99-99
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
