"use client";
import styles from "./search.module.css";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  //le debounce permet de trigger la recherche uniquement 300ms après la fin de la saisie
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

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
