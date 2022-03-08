import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../Store/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
function Home() {
  const allRecipes = useSelector((state) => state.recipes);

  //!Paginado

  //Primero me defino un estado local con la pagina actual
  //Empieza en uno porque siempre voy a arrancar desde la primer pagina
  const [currentPage, setCurrentPage] = useState(1);
  //Estado local que me va a indicar cuantas recetas tengo por pagina
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  //Indice de la ultima receta que yo tengo en la pagina
  //En un principio va a ser 6
  const indexOfLastRecipe = currentPage * recipesPerPage;
  //Indice de la primer receta
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  //Constante para contener las recetas que estan en la pagina actual
  //Me traigo todas las recetas y le hago un slice para recortar, solo me quedo con las recetas que esten entre el
  //indice de mi primer receta y el indice de mi utlima receta
  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  //Lo que hace esta constante es unicamente setear el estado de mi pagina actual
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //Me traigo el dispatch para poder ir despachando las acciones
  const dispatch = useDispatch();
  //Obtengo las recetas del estado
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
        <Paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
        ></Paginado>
        {currentRecipes &&
          currentRecipes.map((e) => {
            return (
              <Link key={e.id} to={"/recipes/" + e.id}>
                <Card
                  key={e.id}
                  id={e.id}
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
