import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipe } from "../Store/actions";
import "../Styles/Detail.css";

function Detail() {
  //Me traigo del estado la receta
  //Me traigo el dispatch para poder despachar la accion
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getRecipe(id));
  }, []);
  const recipe = useSelector((state) => state.recipe);
  return (
    <div>
      <article class="recipe recipe--old-style">
        <h1>{recipe.title}</h1>
        <img
          src={recipe.image}
          alt="img not found"
          width={"450px"}
          height="400px"
        ></img>
        <br></br>
        <br></br>
        <main>
          <h2>Summary</h2>
          <div dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
          <br></br>
          <div class="instructions">
            <h2>Instructions</h2>
            <div
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            ></div>
          </div>
        </main>
        <h3>Diets</h3>
        {recipe.diets?.map((d) => {
          return (
            <span key={`${d}` + id}>
              {d}
              {", "}
            </span>
          );
        })}
        <h3>Dish Types</h3>
        {recipe.dishTypes?.map((dt) => {
          return (
            <span key={`${dt} + id`}>
              {dt}
              {", "}
            </span>
          );
        })}
      </article>
    </div>
  );
}

export default Detail;
