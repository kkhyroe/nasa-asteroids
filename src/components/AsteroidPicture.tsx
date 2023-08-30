import asteroidPic from "@/public/asteroid.png";
import Image from "next/image";

const AsteroidPicture = ({ isBig }: { isBig: boolean }) => (
  <Image
    src={asteroidPic}
    alt="Asteroid picture"
    width={isBig ? 36.67 : 22}
    height={isBig ? 40 : 24}
  />
);

export default AsteroidPicture;
