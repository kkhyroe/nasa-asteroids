import axios from "axios";
import { useState } from "react";
import { AsteroidData } from "@/types/types";

export const axiosNasa = axios.create({
  baseURL: "https://api.nasa.gov/neo/rest/v1/",
  params: { api_key: "yxkve9I6rnE1C9ev57MB3OIvwWM5mmKKFlEamaXW" },
});

export const declination = (
  number: number,
  titles: [string, string, string],
) => {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const useCart = () => {
  const [cart, setCart] = useState<AsteroidData[]>([]);

  const addToCart = (asteroid: AsteroidData | AsteroidData[]) =>
    setCart([...cart].concat(asteroid));
  const clearCart = () => setCart([]);

  return { cart, addToCart, clearCart, setCart };
};
