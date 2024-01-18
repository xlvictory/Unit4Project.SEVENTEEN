const express = require('express');
const router = express.Router();
const { getAllAlbums, getAlbumById } = require('../server/db/helpers/albums');

router.get('/albums', async (req, res, next) => {
    try {
"#"
    } catch(error) {
        next(error);
    }
});

router.get('/albums/:id', async (req, res, next) => {
    try {
"#"
    } catch(error) {
        next(error);
    }
});

module.exports = router;