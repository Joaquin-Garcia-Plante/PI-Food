const initialState = {
  recipes: [],
  //Copia de todas las recetas para realizar los filtrados
  allRecipes: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload, allRecipes: action.payload };
    case "FILTER_BY_RECIPES":
      //Siempre la logica en el reducer va antes del return
      const allRecipes = state.allRecipes;
      const statusFiltered =
        //Si mi payload es all me devuelve todas las recetas
        //Sino entra a las recetas y filtra las que coincidan con mi payload
        action.payload === "all"
          ? allRecipes
          : allRecipes.filter((el) => el.diets.includes(action.payload));
      return {
        ...state,
        recipes: statusFiltered,
      };
    default:
      return state;
  }
}

export default rootReducer;
