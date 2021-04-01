import React, { useEffect } from "react";
import Select from "react-select";

import { FaSearch } from "react-icons/fa";

function HeroSearch() {
  const optionsLocation = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];
  const optionsProperty = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];
  const optionsSell = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  return (
    <div className="hero-search">
      <Select
        placeholder="Location"
        classNamePrefix="hero-search"
        className="hero-search__select"
        options={optionsLocation}
      />
      <Select
        placeholder="Type of Property"
        classNamePrefix="hero-search"
        className="hero-search__select"
        options={optionsProperty}
      />
      <Select
        placeholder="status"
        classNamePrefix="hero-search"
        className="hero-search__select"
        options={optionsSell}
      />
      <button class="hero-search__button">
        <FaSearch />
      </button>
    </div>
  );
}

export default HeroSearch;
