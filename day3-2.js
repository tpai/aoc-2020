/**
 * key: redo with different patterns
 */

const fs = require("fs");
const data = fs.readFileSync("day3.data", "utf8");
const arr = data
  .toString()
  .split("\n")
  .filter((v) => v !== "");

const patterns = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
const results = [];

patterns.forEach(([moveX, moveY]) => {
  let x = 0;
  let y = 0;
  let trees = 0;
  for (let i = moveY; i < arr.length; i += moveY) {
    x += moveX;
    y += moveY;

    if (x >= arr[0].length) x %= arr[0].length;

    if (arr[y][x] === "#") {
      trees++;
    }
  }
  results.push(trees);
});

console.log(results);
console.log([1, ...results].reduce((n, result) => (n *= result)));
