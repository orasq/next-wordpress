import Image from "next/image";
// components import
import ScrollArrow from "./ScrollArrow";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__image-wrap">
        <div className="hero__image-container">
          <Image src="/images/hero.jpeg" layout="fill" objectFit="cover" />
        </div>
      </div>

      {props.children}

      <ScrollArrow />
    </div>
  );
}

export default Hero;
