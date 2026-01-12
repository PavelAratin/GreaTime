import Link from "next/link";
import styles from "./Logo.module.css";
// import LocalFont from "next/font/local";
import LocalFont from "next/font/local";

const OrbitronRegularFont = LocalFont({
  src: "../../../../assets/fonts/Orbitron/woff/Orbitron.woff",
  weight: "400",
});

export const Logo = () => {
  return (
    <Link
      className={`${styles.logo} ${styles.logoHeader} ${OrbitronRegularFont.className}`}
      href="/">
      GreaTime
    </Link>
  );
};
