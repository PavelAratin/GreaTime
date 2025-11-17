import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
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
            className={`${styles.navLink} ${styles.telephone}`}
            href="tel:+7(999)99-99-99">
            +7 (999) 99-99-99
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
