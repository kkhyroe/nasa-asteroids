import styles from "@/styles/Loader.module.css";

const Loader = ({ isLoading }: { isLoading: boolean }) =>
  isLoading && <div className={styles.container}>Loading...</div>;

export default Loader;
