const handleAPIError = require("~root/utils/handleAPIError");
const removeLocationById = require("~root/actions/locations/removeLocationById");


const deleteLocationById = async (req, res) => {
    const{locationId} = req.params;
  try {
    const {response} = await removeLocationById({locationId});

    res.status(201).send({
      response
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteLocationById;