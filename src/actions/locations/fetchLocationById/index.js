const selectLocationById = require("./queries/selectLocationById");

const fetchLocationById = async ({locationId}) => {
  const location = await selectLocationById({locationId});

  return { location }
};

module.exports = fetchLocationById;
