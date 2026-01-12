import Link from "next/link";
import styles from "./Header.module.css";
import Container from "../../UI/Container";
import Nav from "../../Common/Nav";
import { Button } from "../../UI/Button/Button";
import { Logo } from "../../Common/logo/Logo";
import { WhatsAppIcon } from "../../icons/WhatsAppIcon/WhatsAppIcon";
import { TelegrammIcon } from "../../icons/TelegrammIcon/TelegrammIcon";
import { BurgerMenuIcon } from "../../icons/BurgerMenuIcon/WhatsAppIcon";
import { SearchInput } from "../../Forms/Fields/SearchInput/SearchInput";
import { Form } from "../../Forms/FormSearch/FormSearch";
import { UserIcon } from "../../icons/UserIcon/UserIcon";
import { FavoritesIcon } from "../../icons/FavoritesIcon/FavoritesIcon";
import { BasketIcon } from "../../icons/BasketIcon/BasketIcon";
import LocalFont from "next/font/local";
const GTEestiProDisplayFontRegular = LocalFont({
  src: "./../../../../assets/fonts/GTEestiProDisplay/woff2/gteestiprodisplay_regular.woff2",
  weight: "400",
});
const Header = () => {
  return (
    <header>
      <div className={styles.headerTop}>
        <Container>
          <div className={styles.HeaderTopInner}>
            <span
              className={`${styles.region} ${GTEestiProDisplayFontRegular.className}`}>
              Москва
            </span>
            <Nav></Nav>
          </div>
        </Container>
      </div>
      <div className={styles.headerMiddle}>
        <Container>
          <div className={styles.headerMiddleInner}>
            <div className={styles.social}>
              <Link href="#">
                <WhatsAppIcon></WhatsAppIcon>
              </Link>
              <Link href="#">
                <TelegrammIcon></TelegrammIcon>
              </Link>
            </div>
            <Logo></Logo>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link
                    className={`${styles.link} ${GTEestiProDisplayFontRegular.className}`}
                    href="#">
                    О компании
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link
                    className={`${styles.link} ${GTEestiProDisplayFontRegular.className}`}
                    href="#">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
      <div className={styles.headerBottom}>
        <Container>
          <div className={styles.headerBottomInner}>
            <Button
              className={styles.buttonCatalog}
              icon={<BurgerMenuIcon></BurgerMenuIcon>}>
              Каталог
            </Button>
            <Form className={styles.headerForm}>
              <SearchInput></SearchInput>
              <Button>Найти</Button>
            </Form>
            <div className={styles.headerActions}>
              <Link className={styles.headerLink} href="/auth/login">
                <UserIcon></UserIcon>
                <span>Вход</span>
              </Link>
              <Link className={styles.headerLink} href="/auth/login">
                <FavoritesIcon></FavoritesIcon>
                <span>Избранное</span>
              </Link>
              <Link className={styles.headerLink} href="/auth/login">
                <BasketIcon></BasketIcon>
                <span>Корзина</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
