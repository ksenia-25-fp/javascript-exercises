const sumAll = function(min, max) {
    let start = Math.min(min, max);
    let end = Math.max(min, max);
    let result = 0;
    for (let i = start; i <= end; i++) {
    result += i; 
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
