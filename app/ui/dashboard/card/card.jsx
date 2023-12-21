import { Users } from "lucide-react";

import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <Users size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total users</span>
        <span className={styles.number}>10.273</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};
export default Card;
