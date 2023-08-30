import styles from "@/styles/Approach.module.css";
import { ApproachData } from "@/types/types";

const Approach = ({ approach }: { approach: ApproachData }) => {
  const dateString = new Date(approach.close_approach_date_full);

  return (
    <div className={styles.container}>
      <h3>
        {dateString.getDate()}{" "}
        {
          dateString
            .toLocaleDateString("ru", {
              month: "short",
            })
            .split(".")[0]
        }{" "}
        {dateString.getFullYear()}{" "}
        {dateString.toLocaleString("ru", { hour: "2-digit" }).split(".")[0]}:
        {
          dateString
            .toLocaleDateString("ru", { minute: "2-digit" })
            .split(".")[0]
        }
      </h3>
      <span>
        {parseInt(
          approach.relative_velocity.kilometers_per_hour,
        ).toLocaleString("ru")}{" "}
        км/ч
      </span>
      <span>
        До Земли:{" "}
        {parseInt(approach.miss_distance.kilometers).toLocaleString("ru")} км
      </span>
      <span>Орбита: {approach.orbiting_body}</span>
    </div>
  );
};

export default Approach;
