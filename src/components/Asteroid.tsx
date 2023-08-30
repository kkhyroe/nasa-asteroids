import { AsteroidData, Measure } from "@/types/types";
import styles from "@/styles/Asteroid.module.css";
import { declination } from "@/components/utils";
import button from "@/styles/Button.module.css";
import Link from "next/link";
import AsteroidPicture from "@/components/AsteroidPicture";

const Asteroid = ({
  asteroid,
  measure,
  addToCart,
  inCart,
}: {
  asteroid: AsteroidData;
  measure: Measure;
  addToCart?: (asteroid: AsteroidData) => void;
  inCart?: boolean;
}) => {
  const lunar = parseInt(
    asteroid.close_approach_data[0].miss_distance.lunar.split(".")[0],
  );
  const dateString = new Date(
    asteroid.close_approach_data[0].close_approach_date,
  );

  return (
    <Link href={`/${asteroid.id}`}>
      <div className={styles.container}>
        <h2>
          {dateString.getDate()}{" "}
          {
            dateString
              .toLocaleDateString("ru", {
                month: "short",
              })
              .split(".")[0]
          }{" "}
          {dateString.getFullYear()}
        </h2>
        <div>
          <div className={styles.distance}>
            {measure === "km" ? (
              <span>
                {parseInt(
                  asteroid.close_approach_data[0].miss_distance.kilometers,
                ).toLocaleString("ru")}{" "}
                км
              </span>
            ) : (
              <span>
                {lunar}{" "}
                {declination(lunar, [
                  "лунная орбита",
                  "лунныe орбиты",
                  "лунных орбит",
                ])}
              </span>
            )}
            <div className={styles.arrow} />
          </div>
          <AsteroidPicture
            isBig={
              asteroid.estimated_diameter.meters.estimated_diameter_max > 100
            }
          />
          <div className={styles.size}>
            <span className={styles.name}>
              {asteroid.name.split("(")[1].split(")")[0]}
            </span>
            <span className={styles.diameter}>
              Ø{" "}
              {
                asteroid.estimated_diameter.meters.estimated_diameter_max
                  .toString()
                  .split(".")[0]
              }{" "}
              м
            </span>
          </div>
        </div>
        {(asteroid.is_potentially_hazardous_asteroid || addToCart) && (
          <div>
            {addToCart && (
              <button
                type="button"
                disabled={inCart}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(asteroid);
                }}
                className={button.container}
              >
                {inCart ? "В КОРЗИНЕ" : "ЗАКАЗАТЬ"}
              </button>
            )}
            {asteroid.is_potentially_hazardous_asteroid && (
              <span className={styles.warning}>⚠️Опасен</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Asteroid;
