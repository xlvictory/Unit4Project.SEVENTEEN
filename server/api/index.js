const express = require('express');
const router = express.Router();

router.get('/members', (req, res, next) => {
    res.send('OK');
});

router.get('/albums', (req, res, next) => {
    res.send('OK');
});

router.get('/MVs', (req, res, next) => {
    res.send('OK');
});

module.exports = router;