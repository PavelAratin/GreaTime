import { Button } from "@/app/components/UI/Button/Button";
import styles from "./RegistrationTypeSelector.module.css";
import { USER_TYPES } from "@/app/constans/forms";
import LocalFont from "next/font/local";

const GTEestiProDisplayFontLight = LocalFont({
  src: "./../../../../assets/fonts/GTEestiProDisplay/woff2/gteestiprodisplay_light.woff2",
  weight: "350",
});

export const RegistrationTypeSelector = ({
  activeButtonUserType,
  onClickHandler,
}) => {
  console.log(activeButtonUserType);
  return (
    <>
      <Button
        className={`${styles.AuthFormLayoutLink} ${
          GTEestiProDisplayFontLight.className
        } ${
          activeButtonUserType === USER_TYPES.INDIVIDUAL ? styles.active : ""
        }`}
        onClick={() => onClickHandler(USER_TYPES.INDIVIDUAL)}>
        Физ.лицо
      </Button>
      <Button
        className={`${styles.AuthFormLayoutLink} ${
          GTEestiProDisplayFontLight.className
        } ${activeButtonUserType === USER_TYPES.LEGAL ? styles.active : ""}`}
        onClick={() => onClickHandler(USER_TYPES.LEGAL)}>
        Юр.лицо
      </Button>
    </>
  );
};
