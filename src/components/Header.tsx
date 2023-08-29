import styles from "@/styles/Header.module.css";

const Header = () => (
  <header className={styles.container}>
    <span className={styles.title}>ARMAGEDDON 2023</span>
    <span className={styles.description}>
      ООО “Команда им. Б. Уиллиса”.
      <br />
      Взрываем астероиды с 1998 года.
    </span>
  </header>
);

export default Header;
