import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

function HouseCard(props) {
  const formattedPrice = props.property.acfPropertyInfos.price.toLocaleString("en-US");

  return (
    <li className="house-card">
      <Link href={`/properties/${props.property.id}`}>
        <a>
          <motion.div>
            <Image
              className="house-card__image"
              src={props.property.featuredImage.node.sourceUrl}
              alt={props.property.featuredImage.node.altText}
              width="450"
              height="296"
            ></Image>
          </motion.div>

          <div className="house-card__text">
            <h4 className="house-card__text--bold">{props.property.acfPropertyInfos.location}</h4>
            <div className="house-card__sub-data">
              <span>€ {formattedPrice}</span>
              <span>{props.property.acfPropertyInfos.livingArea} m²</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default HouseCard;
