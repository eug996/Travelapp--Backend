const removeLocation = require("./queries/removeLocationById");

const removeLocationById = async ({locationId}) => {
  const response = await removeLocation({locationId});

  return { response };
  
};

module.exports = removeLocationById;