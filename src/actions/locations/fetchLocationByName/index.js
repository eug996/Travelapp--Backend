const selectLocationByName = require("./queries/selectLocationByName");

const fetchLocationByName = async ({name}) => {
  const locations = await selectLocationByName({name});

  return { locations }
};

module.exports = fetchLocationByName;