/**
 * key: simulate unlimited map
 */

const fs = require("fs");
const data = fs.readFileSync("day3.data", "utf8");
const arr = data.toString().split("\n").filter((v) => v !== "");

let x = 0;
let y = 0;

let trees = 0;

for (let i = 1; i < arr.length; i++) {
  x += 3;
  y += 1;

  // unlimited map
  if (x >= arr[0].length) x %= arr[0].length;

  if (arr[y][x] === "#") {
    trees++;
  }
}

console.log(trees);
