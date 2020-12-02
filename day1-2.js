/**
 * key: sort the array first then sum up
 *
 * index 11+ elements of my `sorted` array, the values are
 * over 1070, so the sum of them is over 2020, that means
 * the answers only exists in index 0~10 elements, we can
 * even get the answer without writing any code
 */

const fs = require("fs");
const data = fs.readFileSync("day1.data", "utf8");
const arr = data
  .toString()
  .split("\n")
  .map((v) => parseInt(v, 10))
  .filter((v) => v !== "")
  .sort((a, b) => a - b);

console.log(arr);

const matched = [];
arr.forEach((a) => {
  arr.forEach((b) => {
    const temp = 2020 - a - b;
    if (isNaN(temp)) return;
    if (arr.includes(temp)) {
      matched.push([a, b, temp]);
    }
  });
});
console.log(matched);
