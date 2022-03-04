const mainRouteDb = (infoDb) => {
  let respuesta = infoDb.map((r) => {
    var diets = r.diets.map((d) => d.name);
    return {
      title: r.title,
      diets,
      id: r.id,
    };
  });
  return respuesta;
};

const detailRouteDb = (infoDb) => {
  let formatByDetail = function (r) {
    return {
      title: r.title,
      diets: r.diets,
      summary: r.summary,
      spoonacularScore: r.spoonacularScore,
      healthScore: r.healthScore,
      instructions: r.instructions,
    };
  };
  let respuesta = formatByDetail(infoDb);
  return respuesta;
};
module.exports = {
  mainRouteDb,
  detailRouteDb,
};
