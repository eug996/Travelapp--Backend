const { submitQuery } = require("~root/lib/database");

const selectAllLocations = () => submitQuery`
    SELECT * FROM locations;
`;

module.exports = selectAllLocations;