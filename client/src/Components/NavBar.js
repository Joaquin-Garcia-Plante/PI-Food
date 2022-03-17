import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
function NavBar({ handleClick, handleSearch, searchRecipe }) {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search recipe..."
          onChange={handleSearch}
        />
        <button type="submit" className="searchButton" onClick={searchRecipe}>
          <i>Ok</i>
        </button>
      </div>
      <x className="button" onClick={(e) => handleClick(e)}>
        Reload recipes
      </x>
      <Link to={"/recipe"} style={{ textDecoration: "none" }}>
        <y href="#" className="button">
          Create recipe
        </y>
      </Link>
    </div>
  );
}

export default NavBar;
