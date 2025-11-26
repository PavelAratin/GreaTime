import styles from "./Button.module.css";

export const Button = ({
  icon = null,
  children = null,
  className = "",
  type = "",
}) => {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {icon}
      {children}
    </button>
  );
};
