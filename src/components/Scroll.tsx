import styles from "@/styles/Scroll.module.css";
import { useState } from "react";
import { FeedData, Measure } from "@/types/types";
import Asteroid from "@/components/Asteroid/Asteroid";

const Scroll = ({ data }: { data: FeedData }) => {
  const [measure, setMeasure] = useState<Measure>("km");
  console.log(data);

  return (
    <div className={styles.container}>
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
      {Object.entries(data.near_earth_objects).map((item) =>
        item[1].map((asteroid) => (
          <Asteroid
            key={asteroid.id}
            date={item[0]}
            asteroid={asteroid}
            measure={measure}
          />
        )),
      )}
    </div>
  );
};

export default Scroll;
