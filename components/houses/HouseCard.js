import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function HouseCard() {
  return (
    <li className="house-card">
      <Link href="/offer/id">
        <a>
          <Image
            className="house-card__image"
            src="/images/house-1.jpeg"
            alt="..."
            width="450"
            height="296"
          ></Image>

          <div className="house-card__text">
            <h4 className="house-card__text--bold">Woluwe-Saint-Pierre</h4>
            <div className="house-card__sub-data">
              <span>€ 2.150.000</span>
              <span>500 m²</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default HouseCard;
