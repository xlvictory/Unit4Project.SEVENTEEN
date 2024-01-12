const client = require("./client");
const { svtMembers, albums, musicVids } = require("./seedData");

// Drop Tables Function
const dropTables = async () => {
    try {
        console.log("Starting to drop tables..");
        await client.query(`
        DROP TABLE IF EXISTS svtMembers;
        DROP TABLE IF EXISTS musicVids;
        DROP TABLE IF EXISTS albums;
        
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
            "koreanName" varchar(20) UNIQUE,
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
            "listenLink" TEXT NOT NULL
        );

         CREATE TABLE musicVids (
            mv_id SERIAL PRIMARY KEY,
            title varchar(50) UNIQUE NOT NULL,
            "releaseDate" DATE NOT NULL,
            "watchLink" TEXT NOT NULL,
            album_id INTEGER REFERENCES albums(album_id)
        );
    `);
    console.log("Tables built!")
    } catch (error) {
        console.error(error);
    }
};


// populate
const createInitialMembers = async () => {
    try {
        for (const member of svtMembers) {
            const { rows: [svtMembers] } = await client.query(`
            INSERT INTO svtMembers("stageName", "realName", "koreanName", position, unit, birthday, "zodiacSign", nationality)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8);
            `, 
            [member.stageName, member.realName, member.koreanName ? member.koreanName : null, member.position, member.unit, member.birthday, member.zodiacSign, member.nationality])
        }
        console.log("created svt members!");
    } catch(error) {
        console.error(error);
    }
};

const createInitialAlbums = async () => {
    try {
        for (const album of albums) {
            const { rows: [albums] } = await client.query(`
            INSERT INTO albums(title, "releaseDate", description, "listenLink")
            VALUES($1, $2, $3, $4);
            `, 
            [album.title, album.releaseDate, album.description, album.listenLink])
        }
        console.log("created svt albums!");
    } catch(error) {
        console.error(error);
    }
};

const createInitialMvs = async () => {
    try {
        for (const mv of musicVids) {
            const { rows: [musicVids] } = await client.query(`
            INSERT INTO musicVids(title, "releaseDate", "watchLink")
            VALUES($1, $2, $3);
            `, 
            [mv.title, mv.releaseDate, mv.watchLink])
        }
        console.log("created svt M/Vs!");
    } catch(error) {
        console.error(error);
    }
};

//fn invocation
const buildDb = async () => {
    try {
        //connect to local db
        client.connect();

        //run the functions
        await dropTables();
        await createTables();

        await createInitialMembers();
        await createInitialAlbums();
        await createInitialMvs();
    } catch (error) {
        console.error(error)
    } finally {
        //close out connection to local db
        client.end();
    }
};

buildDb();