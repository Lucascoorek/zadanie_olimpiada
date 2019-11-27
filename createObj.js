function createObj(str) {
  const arr = str.split(" ");
  const m = parseInt(arr.shift());
  const n = parseInt(arr.shift());
  const k = parseInt(arr.shift());
  const newArr = [];
  let counter = 0;

  while (arr.length) {
    if (counter === 0) {
      newArr.push([]);
    }
    if (counter < n) {
      newArr[newArr.length - 1].push(parseInt(arr.shift()));
      counter++;
    } else {
      counter = 0;
    }
  }
  return {
    m,
    n,
    k,
    arr: newArr
  };
}
module.exports = createObj;
