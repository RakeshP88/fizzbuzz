const express = require('express');
const fizzbuzzRoute = require('./fizzbuzz.route');

const router = express.Router();

router.use('/', fizzbuzzRoute);
router.use('/fizzbuzz', fizzbuzzRoute);

module.exports = router;
