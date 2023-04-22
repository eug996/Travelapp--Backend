const { submitQuery} = require("~root/lib/database");

const insertLocation = ({  name, country, photo, description}) => submitQuery`
  INSERT INTO locations(name, country, photo, description)
  VALUES ( ${name}, ${country}, ${photo}, ${description});
`;


module.exports = insertLocation;