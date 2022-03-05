const filterByName = function (info, name) {
  let respuesta = info.filter((r) => r.title.includes(name));
  return respuesta;
};

module.exports = {
  filterByName,
};
