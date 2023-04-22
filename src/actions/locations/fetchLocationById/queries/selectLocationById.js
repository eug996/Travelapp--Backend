const { submitQuery} = require("~root/lib/database");

const selectLocationById = ({ locationId }) => submitQuery`
    SELECT * FROM locations WHERE location_id
         = ${locationId};
`;

module.exports = selectLocationById;