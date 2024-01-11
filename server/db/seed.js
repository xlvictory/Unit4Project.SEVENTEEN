const client = require("./client");
const { svtMembers, albums, musicVids } = require("./seedData");

// Drop Tables Function
const dropTables = async () => {
    try {
        console.log("Starting to drop tables..");
        await client.query(`
        DROP TABLE IF EXISTS svtMembers;
        DROP TABLE IF EXISTS albums;
        DROP TABLE IF EXISTS musicVids;
        `)
        console.log("Tables dropped!")
    } catch(error) {
        console.log("Error dropping tables!");
        throw error;
    }
};

//Create Tables Function
const createTables = async () => {
    console.log("Building Tables..");
    await client.query(`
        CREATE TABLE svtMembers (

        );
        CREATE TABLE svtMembers (

            );
         CREATE TABLE svtMembers (

                );
    `)
};
