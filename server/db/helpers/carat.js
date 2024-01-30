const client = require("../client");
const util = require('../../api/utils');

// THIS FILE IS RELATED TO MY STRETCH GOAL-- WILL BE COMPLETING AT A LATER DATE

async function getAllCarats() {
    try {
        const { rows }
         = await client.query(`
         SELECT * FROM carat;
         `) 
         return rows;
    } catch(error) {
        console.error(error);
    }
};

async function createUser({ first_name, username, email, password }) {
    try {
        const {
            rows: [carat],
        } = await client.query(`
            INSERT INTO carat(first_name, username, email, password)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `, [first_name, username, email, password]
        )
        return carat;
    } catch(error) {
        throw error;
    }
};

async function getCaratByUsername(username) {
    try {
        const { rows: [carat]} = await client.query(`
        SELECT *
        FROM carat
        WHERE carat.username = '${username}';
        `)
return carat;
    } catch(error) {
        throw error;
    }

}

async function getCaratById(carat_id) {
    try { 
        const { rows: [carat] }
            = await client.query(`
            SELECT *
            FROM carat
            WHERE "carat_id" =${carat_id};
            `)
            return carat;
    } catch(error) {
        console.error(error);
    }
};

module.exports = { getAllCarats, createUser, getCaratByUsername, getCaratById }