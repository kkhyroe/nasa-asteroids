import styles from "@/styles/CartCard.module.css";
import { AsteroidData } from "@/types/types";
import { declination } from "@/components/utils";
import Link from "next/link";
import button from "@/styles/Button.module.css";

const CartCard = ({ cart }: { cart: AsteroidData[] }) =>
  !!cart.length && (
    <section>
      <div className={styles.container}>
        <div>
          <h3>Корзина</h3>
          <span>
            {cart.length}{" "}
            {declination(cart.length, ["астероид", "астероида", "астероидов"])}
          </span>
        </div>
        <Link href="/cart">
          <button type="button" className={button.container}>
            Отправить
          </button>
        </Link>
      </div>
    </section>
  );

export default CartCard;
