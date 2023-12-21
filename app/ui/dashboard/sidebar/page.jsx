import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";

import {
  Gauge,
  Users,
  ShoppingCart,
  BadgeEuro,
  UserRound,
  Wallet,
  BarChart4,
  HelpCircle,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <Gauge /> },
      { title: "Users", path: "/dashboard/users", icon: <UserRound /> },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingCart />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <BadgeEuro />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/dashboard/revenue", icon: <Wallet /> },
      { title: "Reports", path: "/dashboard/reports", icon: <BarChart4 /> },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "User",
    list: [
      { title: "Settings", path: "/dashboard.settings", icon: <Gauge /> },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <HelpCircle />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Alex G</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <LogOut />
        Logout
      </button>
    </div>
  );
};
export default Sidebar;
