const sumAll = function (a, b) {
  if (typeof a != 'number' || typeof b != 'number' || a < 0 || b < 0) return "ERROR";
  let h = a > b ? a - b + 1 : b - a + 1;
  return (a + b) * h / 2;
};

// Do not edit below this line
module.exports = sumAll;
