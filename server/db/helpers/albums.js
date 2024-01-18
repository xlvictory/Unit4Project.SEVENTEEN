const client = require("../client");
// const util = require('../util');

async function getAllAlbums() {
    try {
        const { rows }
         = await client.query(`
         SELECT * FROM albums;
         `) 
         return rows;
    } catch(error) {
        console.error(error);
    }
};

const getAlbumById = async (album_id) => {
    try {
        const { rows: [albums] } =
        await client.query(`
        SELECT *
        FROM albums
        WHERE "album_id" =${album_id};
        `)
        return album_id
    } catch(error) {
        console.error(error);
    }
};

module.exports = { getAllAlbums, getAlbumById }