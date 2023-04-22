const selectAllLocations = require("./queries/selectAllLocations");

const fetchAllLocations = async () => {
  const locations = await selectAllLocations();

  return { locations }
};

module.exports = fetchAllLocations;
