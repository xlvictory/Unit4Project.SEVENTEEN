const client = require("../client");
// const util = require('../util');

const getAllMv = async () => {
    try {
        const { rows } 
            = await client.query(`
            SELECT * FROM musicVids;
            `)
            return rows;
    } catch(error) {
        console.error(error);
    }
};

async function getMvById(mv_id) {
    try {
        const { rows: [musicVids] }
            = await client.query(`
            SELECT *
            FROM musicVids
            WHERE "mv_id" =${mv_id};
            `)
            return musicVids;
    } catch(error) {
        console.error(error);
    }
};

module.exports = { getAllMv, getMvById }