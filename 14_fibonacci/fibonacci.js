const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    } else if (typeof(num) === 'string') {
        num = Number(num);
    }
    if (num === 1 || num === 2) {
        return 1
    }
    let a = 1;
    let b = 1;
    let val = 0;
    for (let i = 3; i <= num; i++) {
        val = a + b;
        a = b;
        b = val;
    }
    return val;
};

// Do not edit below this line
module.exports = fibonacci;
