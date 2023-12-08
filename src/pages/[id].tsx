import Layout from "@/components/Layout";
import { GetServerSideProps } from "next";
import { AsteroidData } from "@/types/types";
import { axiosNasa } from "@/components/utils";
import styles from "@/styles/Asteroid.module.css";
import Approach from "@/components/Approach";
import AsteroidPicture from "@/components/AsteroidPicture";

const AsteroidLookup = ({ lookupData }: { lookupData: AsteroidData }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <section>
          <AsteroidPicture
            isBig={
              lookupData.estimated_diameter.meters.estimated_diameter_max > 100
            }
          />
          <div>
            <h2 className={styles.name}>
              {lookupData.name.split("(")[1].split(")")[0]}
            </h2>
            <div className={styles.diameter}>
              Ø{" "}
              {
                lookupData.estimated_diameter.meters.estimated_diameter_max
                  .toString()
                  .split(".")[0]
              }{" "}
              м
            </div>
          </div>
        </section>
        {lookupData.is_potentially_hazardous_asteroid && (
          <div className={styles.warning}>⚠️Опасен</div>
        )}
        <h2>Сближения:</h2>
        {lookupData.close_approach_data.map((item, index) => (
          <Approach key={index} approach={item} />
        ))}
      </div>
    </Layout>
  );
};

export default AsteroidLookup;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id) return { notFound: true };

  const lookupData: AsteroidData | null = await axiosNasa
    .get(`neo/${params.id}`)
    .then((res) => res.data)
    .catch(() => null);

  if (!lookupData) return { notFound: true };

  return {
    props: {
      lookupData,
    },
  };
};
