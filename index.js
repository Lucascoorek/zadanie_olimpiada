const createObj = require("./createObj");
const str = "3 5 2 1 5 3 3 3 4 1 3 3 4 4 2 4 4 3";
const str2 = "3 4 3 1 2 3 1 2 3 1 2 3 1 2 3";
const str3 = "2 5 2 1 5 3 3 3 4 1 3 3 4";
const str4 = "1 10 1 1 1 1 1 1 1 1 1 1 1";

const variety = str => {
  let memo = new Set();
  let sum = 0;
  let max = 0;
  const result = createObj(str);
  let startColumn = 0;
  let endColumn = result.k - 1;
  let startRow = 0;
  let endRow = result.k - 1;

  while (endRow <= result.m - 1) {
    for (let i = startColumn; i <= endColumn; i++) {
      for (let j = startRow; j <= endRow; j++) {
        memo.add(result.arr[j][i]);
      }
    }
    sum += memo.size;
    if (memo.size > max) {
      max = memo.size;
    }
    memo = new Set();
    startColumn++;
    endColumn++;
    if (endColumn === result.n) {
      startColumn = 0;
      endColumn = result.k - 1;
      startRow++;
      endRow++;
    }
  }
  return `${max} ${sum}`;
};
result = variety(str4);
console.log(result);
