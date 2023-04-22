const { submitQuery} = require("~root/lib/database");

const insertLocation = ({ locationId, name, place, country, photo, description, date_created}) => submitQuery`
  INSERT INTO locations(name, country, photo, description)
  VALUES (${locationId}, ${name}, ${place}, ${country}, ${photo}, ${description});
`;


module.exports = insertLocation;