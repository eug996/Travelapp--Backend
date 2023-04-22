const { submitQuery, getFirst } = require("~root/lib/database");

const removeLocationById = ({ locationId }) => submitQuery`
    DELETE FROM locations WHERE location_id
         = ${locationId};
`;

module.exports = removeLocationById;