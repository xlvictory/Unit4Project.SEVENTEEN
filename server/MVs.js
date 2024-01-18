const express = require('express');
const router = express.Router();
const { getAllMv, getMvById } = require('../server/db/helpers/MVs');

router.get('/MVs', async (req, res, next) => {
    try {
        const mv = await getAllMv();
        res.send(mv);
    } catch(error) {
        next(error);
    }
});

router.get('/MVs/:id', async (req, res, next) => {
    try {
        const mv = await getMvById(req.params.id);
        res.send(mv);
    } catch(error) {
        next(error);
    }
});

module.exports = router;