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
