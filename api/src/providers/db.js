const mainRouteDb = (infoDb) => {
  let respuesta = infoDb.map((r) => {
    return {
      title: r.title,
      diets: r.diets,
      id: r.id,
      createdInDB: r.createdInDB,
    };
  });
  return respuesta;
};

const detailRouteDb = (infoDb) => {
  let formatByDetail = function (r) {
    return {
      title: r.title,
      diets: r.diets,
      id: r.id,
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
