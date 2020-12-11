/**
 * key: sum up with offset
 */

const fs = require("fs");
const data = fs.readFileSync("day9.data", "utf8");
const arr = data
  .toString()
  .split("\n")
  .filter((v) => v !== "")
  .map((v) => +v);

function main(target) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    let offset = 1;
    const seq = [sum];
    while (sum <= target) {
      const num = arr[i + offset];
      sum += num;
      seq.push(num);
      if (sum === target) {
        const sorted = seq.sort((a, b) => a - b);
        return sorted[0] + sorted[sorted.length - 1];
      }
      offset ++;
    }
  }
}

console.log(main(400480901)); // day9-1 pt.1 answer
