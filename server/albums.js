const express = require('express');
const router = express.Router();
const { getAllAlbums, getAlbumById } = require('../server/db/helpers/albums');

router.get('/albums', async (req, res, next) => {
    try {
        const album = await getAllAlbums();
        res.send(album);
    } catch(error) {
        next(error);
    }
});

router.get('/albums/:id', async (req, res, next) => {
    try {
        const album = await getAlbumById(req.params.id);
        res.send(album);
    } catch(error) {
        next(error);
    }
});

module.exports = router;