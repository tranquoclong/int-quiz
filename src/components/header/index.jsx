import React from "react";
import "./header.css";
import logo from "../assets/Logo_Unitz.png";

function Header({ setView, view, handleFilter, setStatus }) {
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <header>
      <div className="header">
        <div className="headerLogo">
          <div>
            <img alt="logo" src={logo} />
          </div>
        </div>
        <div>
          <button onClick={() => setView(!view)}>
            {view ? "Horizontal" : "Vertical"}
          </button>
          <select onChange={handleChange}>
            <option value="">all</option>
            <option value="online">online</option>
            <option value="offline">offline</option>
          </select>
          <input
            type="text"
            name="search"
            placeholder="search..."
            onChange={handleFilter}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
