"use client";
import styles from "./search.module.css";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <SearchIcon />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};
export default Search;
