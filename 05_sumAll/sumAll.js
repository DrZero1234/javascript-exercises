const sumAll = function(from, to) {
    // ERROR checking

    if ((from < 0 || typeof from != "number") || (to < 0 || typeof to != "number")) {
        return "ERROR";
    }

    // Getting the total value

    let total = 0;
    if (from < to) {
        while (from < to + 1) {
            total += from;
            from++;
        }
    } else {
        while (from > to -1) {
            total += from;
            from--;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
