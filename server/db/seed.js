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
            mem_id SERIAL PRIMARY KEY,
            "stageName" varchar(10) UNIQUE NOT NULL,
            "realName" varchar(20) UNIQUE NOT NULL,
            "koreanName" varchar(20) UNIQUE NOT NULL,
            position varchar(20) NOT NULL,
            unit varchar(11) NOT NULL,
            birthday DATE NOT NULL,
            "zodiacSign" varchar(11) NOT NULL,
            nationality varchar(20) NOT NULL
        );
        CREATE TABLE albums (
            album_id SERIAL PRIMARY KEY,
            title varchar(50) UNIQUE NOT NULL,
            "releaseDate" DATE NOT NULL,
            description varchar(200) NOT NULL,
        );
         CREATE TABLE musicVids (
            mv_id SERIAL PRIMARY KEY,
            title varchar() UNIQUE NOT NULL,
            "releaseDate" DATE NOT NULL,
            album_id INTEGER REFERENCES albums(album_id),
        );
    `)
    console.log("Tables built!")
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