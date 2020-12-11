/**
 * key: use map to remember the diff times
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
  const diffs = new Map([
    [1, 1],
    [2, 1],
    [3, 1],
  ]);

  let current = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    const diff = val - current;
    diffs.set(diff, diffs.get(diff) + 1);
    current = val;
  }
  console.log(Array.from(diffs));
  console.log(diffs.get(1) * diffs.get(3));
}

main();
