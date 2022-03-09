import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipe } from "../Store/actions";

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
      <h1>{recipe.title}</h1>
      <img
        src={recipe.image}
        alt="img not found"
        width={"250px"}
        height="200px"
      ></img>
      <h5>Diets</h5>
      {recipe.diets?.map((d) => {
        return <p key={`${d} + id`}>{d}</p>;
      })}
      <h5>Dish Types</h5>
      {recipe.dishTypes?.map((dt) => {
        return <p key={`${dt} + id`}>{dt}</p>;
      })}
      <h5>Summary</h5>
      <div dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
      <h5>SpoonacularScore: {recipe.spoonacularScore}</h5>
      <h5>HealthScore: {recipe.healthScore}</h5>
      <h5>Instructions</h5>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
    </div>
  );
}

export default Detail;
