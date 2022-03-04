const mainRouteApi = (apiInfo) => {
  let respuesta = apiInfo.map((r) => {
    image = r.image;
    title = r.title;
    diets = r.diets;
    id = r.id;
    dishTypes = r.dishTypes;
    if (r.vegetarian && !diets.includes("vegetarian")) {
      diets.push("vegetarian");
    }
    if (r.vegan && !diets.includes("vegan")) {
      diets.push("vegan");
    }
    if (r.glutenFree && !diets.includes("gluten free")) {
      diets.push("gluten free");
    }
    return {
      image,
      title,
      diets,
      id,
      dishTypes,
    };
  });
  return respuesta;
};

const detailRouteApi = function (apiInfo) {
  let formatByDetail = function (r) {
    image = r.image;
    title = r.title;
    diets = r.diets;
    id = r.id;
    dishTypes = r.dishTypes;
    summary = r.summary;
    spoonacularScore = r.spoonacularScore;
    healthScore = r.healthScore;
    instructions = r.instructions;
    if (r.vegetarian && !diets.includes("vegetarian")) {
      diets.push("vegetarian");
    }
    if (r.vegan && !diets.includes("vegan")) {
      diets.push("vegan");
    }
    if (r.glutenFree && !diets.includes("gluten free")) {
      diets.push("gluten free");
    }
    return {
      image,
      title,
      diets,
      id,
      dishTypes,
      summary,
      spoonacularScore,
      healthScore,
      instructions,
    };
  };
  let respuesta = formatByDetail(apiInfo);
  return respuesta;
};

module.exports = {
  mainRouteApi,
  detailRouteApi,
};
