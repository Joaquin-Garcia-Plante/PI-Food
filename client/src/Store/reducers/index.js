const initialState = {
  recipes: [],
  //Copia de todas las recetas para realizar los filtrados
  allRecipes: [],
  recipe: {},
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
    case "GET_RECIPE":
      return {
        ...state,
        recipe: action.payload,
      };
    case "ORDER_BY_TITLE":
      let sortedArrByTitle =
        action.payload === "alph_asc"
          ? state.recipes.sort(function (a, b) {
              if (a.title > b.title) {
                return 1;
              }
              if (b.title > a.title) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.title > b.title) {
                return -1;
              }
              if (b.title > a.title) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: sortedArrByTitle,
      };
    case "ORDER_BY_SCORE":
      let sortedArrByScore =
        action.payload === "score_asc"
          ? state.recipes.sort(function (a, b) {
              if (a.spoonacularScore > b.spoonacularScore) {
                return 1;
              }
              if (b.spoonacularScore > a.spoonacularScore) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.spoonacularScore > b.spoonacularScore) {
                return -1;
              }
              if (b.spoonacularScore > a.spoonacularScore) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: sortedArrByScore,
      };
    default:
      return state;
  }
}

export default rootReducer;
