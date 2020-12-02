/**
 * key: minus with 2020 then you can find the repair number
 *
 * for example, the repair number of 1721 is 2020 - 1721 = 299
 * and if you can find 299 in the original array, it means that
 * these two entries are the answer.
 */

const fs = require("fs");
const data = fs.readFileSync("day1.data", "utf8");
const arr = data.toString().split("\n");
const revArr = arr.map(val => `${2020 - parseInt(val, 10)}`);
const matched = [];
arr.forEach(val => {
  if (revArr.includes(val)) {
    matched.push(val);
  }
});
console.log(matched);
