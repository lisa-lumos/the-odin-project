const removeFromArray = function (arr, ...elems) {
  for (let elem of elems) {
    let idx = arr.indexOf(elem);
    if (idx <= -1) continue;
    arr.splice(idx, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
