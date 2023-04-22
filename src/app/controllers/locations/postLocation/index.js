const handleAPIError = require("~root/utils/handleAPIError");
  const createLocation = require("~root/actions/locations/createLocation");
  
  const postLocation = async (req, res) => {
      const { name, photo, description, country } = req.body;

  
      try {
          const { locationId } = await createLocation({ name, photo, description, country });
  
          res.status(201).send({
              locationId
          });
      } catch (err) {
          handleAPIError(res, err);
      }
  };
  
  module.exports = postLocation;
