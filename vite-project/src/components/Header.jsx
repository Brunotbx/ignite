import { Alien } from "phosphor-react";
import styles from "./Heades.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <Alien size={32} />
      <strong>
        Feed
      </strong>
    </header>
  );
}
