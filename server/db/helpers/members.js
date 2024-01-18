const client = require("../client");
// const util = require('../util');

async function getAllMembers() {
    try { 
        const { rows }
        = await client.query(`
            SELECT * FROM svtMembers;
        `)
        return rows;
    } catch(error) {
        console.error(error);
    }
};

async function getMemberById(mem_id) {
    try { 
        const { rows: [svtMembers] }
            = await client.query(`
            SELECT *
            FROM svtMembers
            WHERE "mem_id" =${mem_id};
            `)
            return svtMembers;
    } catch(error) {
        console.error(error);
    }
};

module.exports = { getAllMembers, getMemberById }