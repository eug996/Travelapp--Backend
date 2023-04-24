const { submitQuery} = require("~root/lib/database");

const selectLocationByName = ({ name }) => submitQuery`
    SELECT * FROM locations WHERE name LIKE ${"%"+ name + "%"};
`;

module.exports = selectLocationByName;