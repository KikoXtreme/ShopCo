import { useState } from "react";
import "./LeftNav.css";

export const LeftNav = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  const handleFilterInput = (event) => {
    setFilter(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div className="navigation" style={{ flex: '15' }}>
      <input
        className="filter"
        type="text"
        placeholder="Filter by title"
        value={filter}
        onChange={handleFilterInput}
      />
    </div>
  );
}