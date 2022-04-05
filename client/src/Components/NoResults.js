import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NoResults.css";
function NoResults() {
  return (
    <div>
      <a href="/home">Volver atras</a>
      <h1>No se encontraron recetas</h1>
    </div>
  );
}

export default NoResults;
