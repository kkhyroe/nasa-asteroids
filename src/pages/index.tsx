import { GetServerSideProps } from "next";
import { axiosNasa } from "@/components/utils";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Scroll from "@/components/Scroll";
import { FeedData } from "@/types/types";
import Image from "next/image";
import EarthPic from "@/public/earth.png";

const Home = ({ initialData }: { initialData: FeedData }) => (
  <Layout>
    <Header />
    <div style={{ display: "flex", gap: "58px" }}>
      <Image src={EarthPic} alt="" />
      <Scroll data={initialData} />
    </div>
  </Layout>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const date = new Date().toISOString().split("T")[0];

  const initialData: FeedData = await axiosNasa
    .get("feed", {
      params: {
        start_date: date,
        end_date: date,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });

  return {
    props: {
      initialData,
    },
  };
};

// <div className={styles.container}>
//   <Head>
//     <title>Create Next App</title>
//     <meta name="description" content="Generated by create next app" />
//     <link rel="icon" href="/favicon.ico" />
//   </Head>
//
//   <main className={styles.main}>
//     <h1 className={styles.title}>
//       Welcome to <a href="https://nextjs.org">Next.js!</a>
//     </h1>
//
//     <p className={styles.description}>
//       Get started by editing{' '}
//       <code className={styles.code}>pages/index.js</code>
//     </p>
//
//     <div className={styles.grid}>
//       <a href="https://nextjs.org/docs" className={styles.card}>
//         <h2>Documentation &rarr;</h2>
//         <p>Find in-depth information about Next.js features and API.</p>
//       </a>
//
//       <a href="https://nextjs.org/learn" className={styles.card}>
//         <h2>Learn &rarr;</h2>
//         <p>Learn about Next.js in an interactive course with quizzes!</p>
//       </a>
//
//       <a
//         href="https://github.com/vercel/next.js/tree/master/examples"
//         className={styles.card}
//       >
//         <h2>Examples &rarr;</h2>
//         <p>Discover and deploy boilerplate example Next.js projects.</p>
//       </a>
//
//       <a
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//         className={styles.card}
//       >
//         <h2>Deploy &rarr;</h2>
//         <p>
//           Instantly deploy your Next.js site to a public URL with Vercel.
//         </p>
//       </a>
//     </div>
//   </main>
//
//   <footer className={styles.footer}>
//     <a
//       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Powered by{' '}
//       <span className={styles.logo}>
//         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//       </span>
//     </a>
//   </footer>
// </div>

// export default Home
