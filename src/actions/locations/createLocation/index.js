
const insertLocation = require("./queries/insertLocation");
  
const createLocation = async ({ name, description, photo, country }) => {
    const locationId = await insertLocation({ name, country, photo, description});
    return { locationId };
};

module.exports = createLocation;