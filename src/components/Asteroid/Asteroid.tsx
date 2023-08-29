import { Asteroid, Measure } from "@/types/types";
import styles from "@/styles/Asteroid.module.css";
import { declination } from "@/components/utils";
import Image from "next/image";
import asteroidPic from "@/public/asteroid.png";

const Asteroid = ({
  date,
  asteroid,
  measure,
}: {
  date: string;
  asteroid: Asteroid;
  measure: Measure;
}) => {
  const lunar = parseInt(
    asteroid.close_approach_data[0].miss_distance.lunar.split(".")[0],
  );
  const dateString = new Date(date);
  const isBig = asteroid.estimated_diameter.meters.estimated_diameter_max > 100;

  return (
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
        <Image
          src={asteroidPic}
          alt="Asteroid picture"
          width={isBig ? 36.67 : 22}
          height={isBig ? 40 : 24}
        />
        <div className={styles.size}>
          <span className={styles.name}>
            {asteroid.name.substring(1, asteroid.name.length - 1)}
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
      <div>
        <button>ЗАКАЗАТЬ</button>
        {asteroid.is_potentially_hazardous_asteroid && (
          <span className={styles.warning}>⚠️Опасен</span>
        )}
      </div>
    </div>
  );
};

export default Asteroid;
