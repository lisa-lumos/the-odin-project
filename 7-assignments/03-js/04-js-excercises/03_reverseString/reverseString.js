const reverseString = function (str) {
  let lth = str.length;
  let result = '';
  for (let i = 0; i < lth; i++) {
    result = str.charAt(i) + result;
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
