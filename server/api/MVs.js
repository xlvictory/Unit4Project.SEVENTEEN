const express = require('express');
const router = express.Router();
const { getAllMv, getMvById } = require('../db/helpers/MVs');

router.get('/', async (req, res, next) => {
    try {
        const mv = await getAllMv();
        res.send(mv);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const mv = await getMvById(req.params.id);
        res.send(mv);
    } catch(error) {
        next(error);
    }
});

module.exports = router;