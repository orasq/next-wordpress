// components import
import ScrollArrow from "./ScrollArrow";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__image-wrap">
        <img className="hero__image" src="/images/hero.jpeg" alt="hero" />
      </div>

      {props.children}

      <ScrollArrow />
    </div>
  );
}

export default Hero;
