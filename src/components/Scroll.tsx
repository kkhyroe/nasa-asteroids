import styles from "@/styles/Scroll.module.css";
import { useState } from "react";
import { AsteroidData, Measure } from "@/types/types";
import Asteroid from "@/components/Asteroid";

const Scroll = ({
  data,
  cart,
  addToCart,
}: {
  data: [string, AsteroidData[]][];
  cart: AsteroidData[];
  addToCart: (asteroid: AsteroidData) => void;
}) => {
  const [measure, setMeasure] = useState<Measure>("km");

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Ближайшие подлёты астероидов</h1>
        <menu>
          <li>
            <input
              id="km"
              type="radio"
              name="measure"
              checked={measure === "km"}
              onChange={() => setMeasure("km")}
            />
            <label htmlFor="km">в километрах</label>
          </li>
          <li>
            <input
              id="lunar"
              type="radio"
              name="measure"
              checked={measure === "lunar"}
              onChange={() => setMeasure("lunar")}
            />
            <label htmlFor="lunar">в лунных орбитах</label>
          </li>
        </menu>
      </div>
      {data.map((item) =>
        item[1].map((asteroid) => (
          <Asteroid
            key={asteroid.id}
            asteroid={asteroid}
            measure={measure}
            addToCart={addToCart}
            inCart={cart.map((item) => item.id).includes(asteroid.id)}
          />
        )),
      )}
    </section>
  );
};

export default Scroll;
