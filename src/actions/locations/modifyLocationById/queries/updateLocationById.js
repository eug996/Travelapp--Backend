
const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateLocationById = ({ locationId,  name = null, country = null, description=null, photo = null }) => {
    const update = [];

    if (name !== null) {
        update.push(sql`name = ${name}`);
    }

    if (country !== null) {
        update.push(sql`country = ${country}`);
    }

    if (photo !== null) {
        update.push(sql`photo = ${photo}`);
    } 
    
    if (description !== null) {
        update.push(sql`description = ${description}`);
    }



    if (update.length !== 0) {
        return submitQuery`
        UPDATE
          locations
        SET
         ${update.reduce(sqlReduce)}
        WHERE
         location_id = ${locationId};
         `;
          }
          return Promise.resolve();
};

module.exports = updateLocationById;
