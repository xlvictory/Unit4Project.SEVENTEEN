const express = require('express');
const router = express.Router();
const { getAllMv, getMvById } = require('../server/db/helpers/MVs');

module.exports = router;