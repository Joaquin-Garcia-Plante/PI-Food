import axios from "axios";

//En esta funcion es donde sucede toda la conexion entre el front y el back
export function getRecipes() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/recipes");
      return dispatch({
        type: "GET_RECIPES",
        payload: json.data,
      });
    } catch (e) {}
  };
}
//La accion recibe un payload que va a ser el value que me va a llegar
//Toda la logica es mejor hacerla en el reducer o en el componente en sí

export function filterRecipesByDiets(payload) {
  console.log(payload);
  return {
    type: "FILTER_BY_RECIPES",
    payload: payload,
  };
}
