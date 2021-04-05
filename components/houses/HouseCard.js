import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function HouseCard(props) {
  return (
    <li className="house-card">
      <Link href={`/properties/${props.property.id}`}>
        <a>
          <Image
            className="house-card__image"
            src={props.property.featuredImage.node.sourceUrl}
            alt={props.property.featuredImage.node.altText}
            width="450"
            height="296"
          ></Image>

          <div className="house-card__text">
            <h4 className="house-card__text--bold">{props.property.acfPropertyInfos.location}</h4>
            <div className="house-card__sub-data">
              <span>€ {props.property.acfPropertyInfos.price}</span>
              <span>{props.property.acfPropertyInfos.livingArea} m²</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default HouseCard;
