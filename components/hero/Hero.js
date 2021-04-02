import { useEffect, useRef } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

// components import
import ScrollArrow from "./ScrollArrow";

function Hero(props) {
  const heroImage = useRef(null);

  function imageZoom(e) {
    if (window.pageYOffset <= window.innerHeight) {
      heroImage.current.style.transform = `scale(${1 + window.pageYOffset / 2000})`;
    }
  }

  useEffect(() => {
    function scrollEvent() {
      window.addEventListener("scroll", imageZoom);
    }
    // use of setTimeout to avoid problem with ref beeing not yet defined while page transition
    setTimeout(() => {
      scrollEvent();
    }, 1000);

    return () => {
      window.removeEventListener("scroll", imageZoom);
    };
  });

  return (
    <div className="hero">
      <div className="hero__image-wrap">
        <motion.div className="hero__image-container" layoutId={props.idLayout}>
          <div ref={heroImage} className="hero__image-ref">
            <Image src={props.image} layout="fill" objectFit="cover" />
          </div>
        </motion.div>
      </div>

      {props.children}

      <ScrollArrow />
    </div>
  );
}

export default Hero;
