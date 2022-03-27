const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
	return Number(a) - Number(b)
};

const sum = function(arr) {
	total = 0;
  arr.forEach(number => {
    total += number
  })
  return total;
};

const multiply = function() {
  if (arguments.length === 0) {
    return 0;
  } else {
    total = 1;
    for (let i = 0;i < arguments[0].length;i++) {
      total *= Number(Array.from(arguments[0])[i])
    }
    return total
  }

};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(val) {
	if (val < 2) {
    return 1;
  } else {
    total = 1
    while (val > 1) {
      total *= val;
      val--;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
