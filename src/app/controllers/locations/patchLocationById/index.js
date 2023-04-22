const handleAPIError = require("~root/utils/handleAPIError");
const modifyLocationById = require("~root/actions/locations/modifyLocationById");

  
  const patchLocationById = async (req, res) => {
    const { locationId } = req.params;
    const { name, country, places, photo, description } = req.body;

  
    try {
      const { location } = await modifyLocationById({
        country,
        locationId,
        name,
        description,
        photo
      });
  
      res.status(201).send({
        location,
      });
    } catch (err) {
      handleAPIError(res, err);
    }
  };
  
  module.exports = patchLocationById;