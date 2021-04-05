import React, { useEffect } from "react";

// components import
import HouseCard from "./HouseCard";

function HouseCardList(props) {
  return (
    <ul className="house-card-list">
      {props.properties.map(property => {
        return <HouseCard key={property.id} property={property} />;
      })}
    </ul>
  );
}

export default HouseCardList;
