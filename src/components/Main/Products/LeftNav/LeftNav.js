import { useState } from "react";
import "./LeftNav.css";

export const LeftNav = ({ onTitleFilter, onPriceFilter }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");

  const handleTitleFilterInput = (event) => {
    setTitleFilter(event.target.value);
    onTitleFilter(event.target.value);
  };

  const handleMinPriceFilterInput = (event) => {
    setMinPriceFilter(event.target.value);
    onPriceFilter(event.target.value, maxPriceFilter);
  };

  const handleMaxPriceFilterInput = (event) => {
    setMaxPriceFilter(event.target.value);
    onPriceFilter(minPriceFilter, event.target.value);
  };

  return (
    <div className="navigation" style={{ flex: '15' }}>
      <input
        className="filter"
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleFilterInput}
      />
      <input
        className="filter"
        type="number"
        placeholder="Min Price"
        value={minPriceFilter}
        onChange={handleMinPriceFilterInput}
      />
      <input
        className="filter"
        type="number"
        placeholder="Max Price"
        value={maxPriceFilter}
        onChange={handleMaxPriceFilterInput}
      />
    </div>
  );
}