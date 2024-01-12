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
    } catch (error) {
        console.log("Error dropping tables!");
        throw error;
    }
};

//Create Tables Function
const createTables = async () => {
    try {
        console.log("Building Tables..");
        await client.query(`
        CREATE TABLE svtMembers (
            memberid SERIAL PRIMARY KEY,
            "stageName" varchar(30) UNIQUE NOT NULL,
            "realName" varchar(30) UNIQUE NOT NULL,
        );
        CREATE TABLE albums (

        );
         CREATE TABLE musicVids (

        );
    `)
    } catch (error) {
        console.error(error);
    }
};


// populate

//fn invocation
const buildDb = async () => {
    try {
        //connect to local db
        client.connect();

        //run the functions
        await dropTables();
    } catch (error) {
        console.error(error)
    } finally {
        //close out connection to local db
        client.end();
    }
};

buildDb();