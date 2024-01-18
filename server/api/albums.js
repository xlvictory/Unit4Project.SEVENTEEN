const express = require('express');
const router = express.Router();
const { getAllAlbums, getAlbumById } = require('../db/helpers/albums');

router.get('/', async (req, res, next) => {
    try {
        const album = await getAllAlbums();
        res.send(album);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const album = await getAlbumById(req.params.id);
        res.send(album);
    } catch(error) {
        next(error);
    }
});

module.exports = router;