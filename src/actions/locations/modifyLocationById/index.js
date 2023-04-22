const updateLocationById = require("./queries/updateLocationById");

const modifyLocationById = async ({ locationId, country, name, photo, description }) => {
    const location = await updateLocationById ({
        locationId,
        name,
        country,
        photo,
        description
    });
    return { location };
};

module.exports = modifyLocationById;

