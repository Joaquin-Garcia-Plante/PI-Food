import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getRecipe } from "../Store/actions";
import "../Styles/Detail.css";
import __ from "lodash";
import Loading from "./Loading";

function Detail() {
  //Me traigo del estado la receta
  //Me traigo el dispatch para poder despachar la accion
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getRecipe(id));
  }, []);
  const recipe = useSelector((state) => state.recipe);
  function showDetail() {
    if (!__.isEmpty(recipe)) {
      return (
        <article className="recipe recipe--old-style">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <z className="button">Back to home</z>
          </Link>

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
            <div className="instructions">
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
          <h3>SpoonacularScore: {recipe.spoonacularScore}</h3>
          <h3>HealthScore: {recipe.healthScore}</h3>
        </article>
      );
    }
    if (Loading) {
      return <Loading></Loading>;
    }
  }
  return <div>{showDetail()}</div>;
}

export default Detail;
