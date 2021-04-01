import React, { useEffect } from "react";

// components import
import HouseCard from "./HouseCard";

function HouseCardList() {
  return (
    <ul className="house-card-list">
      <HouseCard />
      <HouseCard />
      <HouseCard />
    </ul>
  );
}

export default HouseCardList;
