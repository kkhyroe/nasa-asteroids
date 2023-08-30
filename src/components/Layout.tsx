import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";
import Header from "@/components/Header";
import EarthPic from "@/public/earth.png";
import Image from "next/image";

const Layout = ({ children }: { children?: ReactNode }) => (
  <div className={styles.container}>
    <Header />

    <div>
      <Image src={EarthPic} alt="" className={styles.image} />
      {children}
    </div>
  </div>
);

export default Layout;
