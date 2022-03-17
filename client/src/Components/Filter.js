import React from "react";
import "../Styles/Filter.css";
function Filter({ handleSortByTitle, handleSortByScore, handleFilterDiets }) {
  return (
    <div>
      <label className="filterTitle">
        Filter by alphabetical order &nbsp;&nbsp;
      </label>
      <select onChange={(e) => handleSortByTitle(e)}>
        <option>Seleccionar...</option>
        <option value="alph_asc">Ascendent</option>
        <option value="alph_desc">Descendent</option>
      </select>
      <label className="filterTitle">
        &nbsp;&nbsp;Filter by score&nbsp; &nbsp;
      </label>
      <select onChange={(e) => handleSortByScore(e)}>
        <option>Seleccionar...</option>
        <option value="score_asc">Ascendent</option>
        <option value="score_desc">Descendent</option>
      </select>
      <label className="filterTitle">
        &nbsp;&nbsp;Filter by diets&nbsp;&nbsp;
      </label>
      <select onChange={(e) => handleFilterDiets(e)}>
        <option>Seleccionar...</option>
        <option value={"all"}>Todas</option>
        <option value={"gluten free"}>gluten free</option>
        <option value={"ketogenic"}>ketogenic</option>
        <option value={"vegetarian"}>vegetarian</option>
        <option value={"lacto ovo vegetarian"}>lacto ovo vegetarian</option>
        <option value={"vegan"}>vegan</option>
        <option value={"pescetarian"}>pescetarian</option>
        <option value={"paleolithic"}>paleolithic</option>
        <option value={"primal"}>primal</option>
        <option value={"low FODMAP"}>low FODMAP</option>
        <option value={"whole30"}>whole30</option>
      </select>
    </div>
  );
}

export default Filter;
