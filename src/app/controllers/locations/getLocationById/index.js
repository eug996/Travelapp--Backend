const handleAPIError = require("~root/utils/handleAPIError");
const fetchLocationById = require("~root/actions/locations/fetchLocationById");


const getLocationById = async (req, res) => {
    const{locationId} = req.params;
  try {
    const { location } = await fetchLocationById({locationId});

    res.status(201).send({
      location
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getLocationById;