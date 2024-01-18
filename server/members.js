const express = require('express');
const router = express.Router();
const { getAllMembers, getMemberById } = require('../server/db/helpers/members');

module.exports = router;