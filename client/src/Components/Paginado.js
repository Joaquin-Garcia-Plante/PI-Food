import React from "react";
import "../Styles/Paginado.css";
//Este componente va a ser el que renderice todos los numeritos en si
function Paginado({ recipesPerPage, allRecipes, paginado }) {
  const pageNumbers = [];

  //Math.ceil me redondea el resultado para arriba
  for (var i = 0; i < Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav className="page-header">
      <ul id="pagination">
        {pageNumbers &&
          pageNumbers.map((num) => (
            <li key={num}>
              <a onClick={() => paginado(num)}>{num}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Paginado;
