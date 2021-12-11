const express = require('express');
const validateJson = require('../middleware/validate-json');
const userSchema = require('../schema/user');

const router = express.Router();

router.use(express.static("public"))

router.post('/register', validateJson(userSchema));

module.exports = router;