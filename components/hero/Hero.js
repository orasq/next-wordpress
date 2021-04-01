// components import
import ScrollArrow from "./ScrollArrow";

function Hero() {
  return (
    <div className="hero">
      <img className="hero__image" src="/images/hero.jpeg" alt="hero" />

      <div className="hero__content-wrap">
        <div className="hero__text-wrap">
          <h1 className="hero__title">No. 1 in exclusive properties</h1>
          <p className="hero__subtitle">Since 1988</p>
        </div>
        <div className="hero__form-wrap"></div>
      </div>
      <ScrollArrow />
    </div>
  );
}

export default Hero;
