import { GetServerSideProps } from "next";
import { axiosNasa, useCart } from "@/components/utils";
import Layout from "@/components/Layout";
import Scroll from "@/components/Scroll";
import { AsteroidData, FeedData } from "@/types/types";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import CartCard from "@/components/CartCard";
import axios from "axios";

const Home = ({ initialData }: { initialData: FeedData }) => {
  const { cart, addToCart, setCart } = useCart();
  const [next, setNext] = useState<string>(initialData.links.next);
  const [asteroids, setAsteroids] = useState<[string, AsteroidData[]][]>(
    Object.entries(initialData.near_earth_objects),
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(next.replace(/^http:\/\//i, "https://"))
      .then((res: { data: FeedData }) => {
        const nextLink = res.data.links.next;
        setNext(nextLink);
        setAsteroids((prevData) => {
          const newData = Object.entries(res.data.near_earth_objects);

          if (!prevData.map((item) => item[0]).includes(newData[0][0])) {
            return [...prevData, ...newData];
          } else return prevData;
        });
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 200 &&
        !isLoading
      )
        fetchData();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) setCart(JSON.parse(cartData));
  }, []);

  useEffect(() => {
    if (cart.length) localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Layout>
      <div className={styles.container}>
        <Scroll data={asteroids} cart={cart} addToCart={addToCart} />
        <div>
          <CartCard cart={cart} />
        </div>
      </div>
    </Layout>
  );
};

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
