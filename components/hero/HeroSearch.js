import React, { useEffect } from "react";
import Select from "react-select";

import { FaSearch } from "react-icons/fa";

function HeroSearch() {
  const options = [
    { value: "House", label: "House" },
    { value: "Apartment", label: "Apartment" },
    { value: "Loft", label: "Loft" },
    { value: "Penthouse", label: "Penthouse" }
  ];

  return (
    <div className="hero-search">
      <Select
        instanceId="search"
        placeholder="What are you looking for ?"
        classNamePrefix="hero-search"
        className="hero-search__select"
        options={options}
      />
      <button className="hero-search__button">
        <FaSearch />
      </button>
    </div>
  );
}

export default HeroSearch;
