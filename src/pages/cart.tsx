import Layout from "@/components/Layout";
import { AsteroidData } from "@/types/types";
import styles from "@/styles/Scroll.module.css";
import Asteroid from "@/components/Asteroid";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState<AsteroidData[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    localStorage.removeItem("cart");
    if (cartData) setCart(JSON.parse(cartData));
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Заказ отправлен!</h1>
        {cart.map((asteroid) => (
          <Asteroid key={asteroid.id} asteroid={asteroid} measure="lunar" />
        ))}
      </div>
    </Layout>
  );
};

export default Cart;
