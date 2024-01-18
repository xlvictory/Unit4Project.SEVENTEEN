const express = require('express');
const router = express.Router();
const { getAllAlbums, getAlbumById } = require('../server/db/helpers/albums')

module.exports = router;