import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe } from "../Store/actions";
import "../Styles/RecipeCreate.css";
function RecipeCreate() {
  // const [checked, setChecked] = useState({});
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",
    instructions: "",
    diet: [],
  });
  let diet = [
    "gluten free",
    "ketogenic",
    "vegetarian",
    "lacto ovo vegetarian",
    "vegan",
    "pescetarian",
    "paleolithic",
    "primal",
    "low-FODMAP",
    "whole30",
  ];
  function handleOnChange(e) {
    setData((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleChangeCheck(e) {
    //En caso de que el elemento este chequeado
    if (e.target.checked) {
      if (!data.diet.includes(e.target.value)) {
        setData((state) => {
          return {
            ...state,
            diet: [...state.diet, e.target.value],
          };
        });
      }
    } else {
      if (data.diet.includes(e.target.value)) {
        let diet = data.diet.filter((d) => d !== e.target.value);
        setData((state) => {
          return {
            ...state,
            diet: diet,
          };
        });
      }
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    for (let key in data) {
      if (data[key] === "" || data[key] === []) {
        return alert("Asegurese de llenar todos los datos del formulario");
      }
    }
    dispatch(postRecipe(data));
    alert("Receta creada correctamente");
    setData({
      title: "",
      summary: "",
      spoonacularScore: "",
      healthScore: "",
      instructions: "",
      diet: [],
    });
  }
  return (
    <div className="container-form">
      <h1>Crea tu propia receta!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Title:</p>
          <input
            type={"text"}
            id="title"
            name="title"
            value={data.title}
            onChange={handleOnChange}
          ></input>
        </div>
        <div>
          <p>Summary:</p>
          <textarea
            type={"text"}
            id="summary"
            name="summary"
            value={data.summary}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div>
          <p>Instructions</p>
          <textarea
            id="instructions"
            name="instructions"
            value={data.instructions}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="score">
          <label>Score &nbsp;</label>
          <input
            min="0"
            max="100"
            value={data.spoonacularScore}
            id="spoonacularScore"
            name="spoonacularScore"
            type={"number"}
            onChange={handleOnChange}
          ></input>
          &nbsp;
          <label>Healt Score &nbsp;</label>
          <input
            min="0"
            max="100"
            id="healthScore"
            name="healthScore"
            type={"number"}
            value={data.healthScore}
            onChange={handleOnChange}
          ></input>
        </div>
        <br></br>
        <label>Diets</label>
        <div className="container-diets">
          {diet.map((d) => {
            return (
              <div key={d}>
                <input
                  value={d}
                  type={"checkbox"}
                  id={d}
                  onChange={handleChangeCheck}
                ></input>
                <label>{d}</label>
              </div>
            );
          })}
        </div>

        <input type={"submit"} value="submit"></input>
      </form>
    </div>
  );
}

export default RecipeCreate;
