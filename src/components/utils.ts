import axios from "axios";

export const axiosNasa = axios.create({
  baseURL: "https://api.nasa.gov/neo/rest/v1/",
  params: { api_key: "DEMO_KEY" },
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
