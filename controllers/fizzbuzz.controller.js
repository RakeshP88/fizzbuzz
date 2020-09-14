/**
 * @function getFizzBuzzSeq
 * Functionc generates the FizzBuzz sequence
 * @param {Number} count count of the output sequence
 * @return {Array} fizzBuzzSeq
 */
const getFizzBuzzSeq = (count) => {
    let fizzBuzzSeq = '';

    for (let num = 1; num <= count; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            fizzBuzzSeq = `${fizzBuzzSeq}<br/>FizzBuzz`;
        } else if (num % 5 === 0) {
            fizzBuzzSeq = `${fizzBuzzSeq}<br/>Buzz`;
        } else if (num % 3 === 0) {
            fizzBuzzSeq = `${fizzBuzzSeq}<br/>Fizz`;
        } else {
            fizzBuzzSeq = `${fizzBuzzSeq}<br/>${num}`;
        }
    }

    return fizzBuzzSeq;
};

/**
 * @function validate
 * Function validates the input parameter
 * @param {Number} param count value received from req.query
 * @return {Object} res { isValid: true, errorMsg: ''}
 */
const validate = (param) => {
    const res = {
        isValid: true,
        errorMsg: ''
    };

    if (param && typeof param.count === 'undefined') {
        res.isValid = false;
        res.errorMsg = 'Parameter \'count\' is missing in the request';
    }

    // parse the count into Integer value
    const len = parseInt(param.count);

    if (len === 0 || len < 0 || len > 100) {
        res.isValid = false;
        res.errorMsg = 'Parameter \'count\' has invalid value. Please input the count value in the range 1 to 100';
    }

    return res;
};

module.exports = {
    getFizzBuzzSeq,
    validate
};
