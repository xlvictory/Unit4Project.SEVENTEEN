const client = require("../client");
const util = require('../util');

// THIS FILE IS RELATED TO MY STRETCH GOAL-- WILL BE COMPLETING AT A LATER DATE

async function createUser({ first_name, username, email, password }) {
    try {
        const {
            rows: [carat],
        } = await client.query(`
            INSERT INTO carat(first_name, username, email, password)
            VALUES ($1, $2, $3)
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
        WHERE carat.username = ${username};
        `)
return carat;
    } catch(error) {
        throw error;
    }

}

module.exports = { createUser, getCaratByUsername }