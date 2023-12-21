"use client";

import { MessageCircle, Search, Globe, Bell } from "lucide-react";

import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <Search />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MessageCircle />
          <Bell />
          <Globe />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
