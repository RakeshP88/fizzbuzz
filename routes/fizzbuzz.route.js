const express = require('express');
const router = express.Router();
const fizzbuzzController = require('../controllers/fizzbuzz.controller');

// route to get the FizBuzz sequence
router.get('/', function (req, res, next) {
    let result = null;
    let fizzbuzzResult = '';

    // validate the input count
    const validationResult = fizzbuzzController.validate(req.query);

    if (!validationResult.isValid) {
        result = validationResult.errorMsg;
    } else {
        // get the generated FizzBuzz sequence
        fizzbuzzResult = fizzbuzzController.getFizzBuzzSeq(req.query.count);
        result = fizzbuzzResult;
    }

    res.render('index', { title: 'FizzBuzz sequence', result: result });
});

module.exports = router;
