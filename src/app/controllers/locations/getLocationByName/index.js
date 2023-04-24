const handleAPIError = require("~root/utils/handleAPIError");
const fetchLocationByName = require("~root/actions/locations/fetchLocationByName");


const getLocationByName = async (req, res) => {
    const name = req.query.q;
  try {
    const { locations } = await fetchLocationByName({name});

    res.status(201).send({
      locations
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getLocationByName;