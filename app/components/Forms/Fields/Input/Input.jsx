import LocalFont from "next/font/local";
import styles from "./Input.module.css";
const GTEestiProDisplayFontLight = LocalFont({
  src: "../../../../../assets/fonts/GTEestiProDisplay/woff2/gteestiprodisplay_light.woff2",
  weight: "350",
});

export const Input = ({ type, placeholder, name, value, onChange }) => {
  const error = true;
  return (
    <div
      className={`${styles.InputWrapper} ${error ? styles.InputError : ""} ${
        GTEestiProDisplayFontLight.className
      }`}>
      <input
        className={styles.Input}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}></input>
      {error && (
        <div className={styles.InputErrorBox}>
          <span className={styles.InputErrorText}>
            Поле обязательно для заполнения
          </span>
        </div>
      )}
    </div>
  );
};
