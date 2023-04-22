const handleAPIError = require("~root/utils/handleAPIError");
const fetchAllLocations = require("~root/actions/locations/fetchAllLocations");


const getAllLocations = async (req, res) => {
  try {
    const { locations } = await fetchAllLocations();
    res.status(201).send({
      locations
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllLocations;
