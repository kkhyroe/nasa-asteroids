import { PropsWithChildren } from "react";
import styles from "@/styles/Layout.module.css";
import Header from "@/components/Header";
import EarthPic from "@/public/earth.png";
import Image from "next/image";

const Layout = ({ children }: PropsWithChildren) => (
  <div className={styles.container}>
    <Header />

    <main>
      <Image src={EarthPic} alt="Earth picture" className={styles.image} />
      {children}
    </main>
  </div>
);

export default Layout;
