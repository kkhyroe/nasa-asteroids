import styles from "@/styles/Header.module.css";
import Link from "next/link";

const Header = () => (
  <header className={styles.container}>
    <Link href="/" className={styles.title}>
      ARMAGEDDON 2023
    </Link>
    <span className={styles.description}>
      ООО “Команда им. Б. Уиллиса”.
      <br />
      Взрываем астероиды с 1998 года.
    </span>
  </header>
);

export default Header;
