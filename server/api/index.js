const express = require('express');
const router = express.Router();

router.get('/health', (req, res, next) => {
    res.send('OK');
});


router.use('/members', require('./members'));
router.use('/albums', require('./albums'));
router.use('/MVs', require('./MVs'));

module.exports = router;