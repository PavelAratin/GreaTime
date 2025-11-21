import Link from "next/link";
import styles from "./Header.module.css";
import Container from "../../UI/Container";
import Nav from "../../Common/Nav";
import { Button } from "../../UI/Button/Button";
import { Logo } from "../../Common/logo/Logo";
import { WhatsAppIcon } from "../../icons/WhatsAppIcon/WhatsAppIcon";
import { TelegrammIcon } from "../../icons/TelegrammIcon/TelegrammIcon";
import { BurgerMenuIcon } from "../../icons/BurgerMenuIcon/WhatsAppIcon";
const Header = () => {
  return (
    <header>
      <div className={styles.headerTop}>
        <Container>
          <div className={styles.HeaderTopInner}>
            <span className={styles.region}>Москва</span>
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
                  <Link className={styles.link} href="#">
                    О компании
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link className={styles.link} href="#">
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
          <Button icon={<BurgerMenuIcon></BurgerMenuIcon>}>Каталог</Button>
        </Container>
      </div>
    </header>
  );
};

export default Header;
