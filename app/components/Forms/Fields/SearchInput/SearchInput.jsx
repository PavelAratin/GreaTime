import styles from "./SearchInput.module.css";

export const SearchInput = () => {
  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="Найти любимые товары"
      name="serach"></input>
  );
};
