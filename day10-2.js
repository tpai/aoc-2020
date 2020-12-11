/**
 * key: 
 */

const fs = require("fs");
const data = fs.readFileSync("day10.data", "utf8");
const arr = data
  .toString()
  .split("\n")
  .filter((v) => v !== "")
  .map((v) => +v)
  .sort((a, b) => a - b);

function main() {
  arr.unshift(0);

  let ways = arr.map((x, i) => (i === 0 ? 1 : 0));

  for (let i = 0; i < ways.length; i++) {
    for (let j = i - 3; j < i; j++) {
      if (arr[i] <= arr[j] + 3) {
        ways[i] += ways[j];
      }
    }
  }

  console.log(ways[ways.length - 1]);
}

main();
