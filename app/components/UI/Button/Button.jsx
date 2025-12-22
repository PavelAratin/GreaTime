import styles from "./Button.module.css";

export const Button = ({
  icon = null,
  children = null,
  className = "",
  type = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};
