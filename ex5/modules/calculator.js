module.exports.sum = function(a, b) {
    return a + b;
}

module.exports.sub = function(a, b) {
    return a - b;
}

module.exports.mul = function(a, b) {
    return a * b;
}

module.exports.div = function(a, b) {
    return b === 0 ? 'Divisor can not be 0.' : a / b;
}