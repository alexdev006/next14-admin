import styles from "./search.module.css";

import { Search as SearchIcon } from "lucide-react";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <SearchIcon />
      <input type="text" className={styles.input} placeholder={placeholder} />
    </div>
  );
};
export default Search;
