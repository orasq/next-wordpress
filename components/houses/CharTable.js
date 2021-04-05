function CharTable(props) {
  return (
    <div className="char-table">
      <div className="char-table__row">
        <span className="char-table__key">Type of property</span>
        <span className="char-table__value">{props.characteristics.typeOfProperty}</span>
      </div>
      <div className="char-table__row">
        <span className="char-table__key">Living area</span>
        <span className="char-table__value">{props.characteristics.livingArea} m²</span>
      </div>
      <div className="char-table__row">
        <span className="char-table__key">Lot surface area</span>
        <span className="char-table__value">{props.characteristics.lotSurfaceArea} m²</span>
      </div>
      <div className="char-table__row">
        <span className="char-table__key">Year of construction</span>
        <span className="char-table__value">{props.characteristics.yearOfConstruction}</span>
      </div>
      <div className="char-table__row">
        <span className="char-table__key">Bedrooms</span>
        <span className="char-table__value">{props.characteristics.bedrooms}</span>
      </div>
      <div className="char-table__row">
        <span className="char-table__key">Bathrooms</span>
        <span className="char-table__value">{props.characteristics.bathrooms}</span>
      </div>
      <div className="char-table__row">
        <span className="char-table__key">Garages</span>
        <span className="char-table__value">{props.characteristics.garageCapacity}</span>
      </div>
    </div>
  );
}

export default CharTable;
