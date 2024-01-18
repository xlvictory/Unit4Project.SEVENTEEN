const express = require('express');
const router = express.Router();
const { getAllMembers, getMemberById } = require('../db/helpers/members');


// GET - fetch all members
router.get('/', async (req, res, next) => {
    try {
        const member = await getAllMembers();
        res.send(member);
    } catch(error) {
        next(error);
    }
});

// GET - get member by ID
router.get('/:id', async (req, res, next) => {
    try {
        const member = await getMemberById(req.params.id);
        res.send(member);
    } catch(error) {
        next(error);
    }
})

module.exports = router;