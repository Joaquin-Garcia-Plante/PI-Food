import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../Store/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
function Home() {
  //Me traigo el dispatch para poder ir despachando las acciones
  const dispatch = useDispatch();
  //Obtengo las recetas del estado
  const allRecipes = useSelector((state) => state.recipes);
  //Hook para que cuando se monte el componente me traiga todas las recetas
  //En el arreglo irian las dependencias
  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  function handleClick(e) {
    //Para que no se rompa y no se recargue la pagina
    e.preventDefault();
    dispatch(getRecipes());
  }
  return (
    <div>
      <Link to={"/recipe"}>Crear Receta</Link>
      <h1>Welcome to Recipes</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a cargar todas las recetas
      </button>
      <div>
        <select>
          {/* <h3>Filter by alphabetical order</h3> */}
          <option value="alph_asc">Ascendent</option>
          <option value="alph_desc">Descendent</option>
        </select>
        <select>
          {/* <h3>Filter by score</h3> */}
          <option value={"score_asc"}>Ascendent</option>
          <option value={"score_desc"}>Descendent</option>
        </select>
        <select>
          {/* <h3>Filter by type of diet</h3> */}
          <option value={"gluten free"}>gluten free</option>
          <option value={"ketogenic"}>ketogenic</option>
          <option value={"vegetarian"}>vegetarian</option>
          <option value={"lacto vegetarian"}>lacto vegetarian</option>
          <option value={"ovo vegetarian"}>ovo vegetarian</option>
          <option value={"vegan"}>vegan</option>
          <option value={"pescetarian"}>pescetarian</option>
          <option value={"paleo"}>paleo</option>
          <option value={"primal"}>primal</option>
          <option value={"low FODMAP"}>low FODMAP</option>
          <option value={"whole30"}>whole30</option>
        </select>
        {allRecipes &&
          allRecipes.map((e) => {
            return (
              <Link key={e.id} to={"/recipes/" + e.id}>
                <Card
                  key={e.id}
                  title={e.title}
                  image={e.image}
                  diets={e.diets}
                ></Card>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
