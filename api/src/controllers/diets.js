const { getDbDiets } = require("../data/db");

const types = async (req, res) => {
  let dbInfo = await getDbDiets();
  res.status(200).send(dbInfo);
};
module.exports = {
  types,
};
