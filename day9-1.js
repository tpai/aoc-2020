/**
 * key: understand validation rule
 */

const fs = require("fs");
const data = fs.readFileSync("day9.data", "utf8");
const arr = data
  .toString()
  .split("\n")
  .filter((v) => v !== "")
  .map((v) => +v);

function isValid(n, sequence) {
  for (const a of sequence) {
    for (const b of sequence) {
      if (a !== b && a + b === n) {
        return true;
      }
    }
  }
  return false;
}

function main(preamble) {
  const seq = [];

  for(let i = 0;i<arr.length;i++) {
    const n = arr[i];
    if (seq.length < preamble) {
      seq.push(n);
    } else {
      if (!isValid(n, seq.slice(seq.length - preamble))) {
        return n;
      }
      seq.push(n);
    }
  }
}

console.log(main(25));
