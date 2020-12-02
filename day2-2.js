/**
 * key: read the question twice(I made stupid mistakes...
 */

const fs = require("fs");
const data = fs.readFileSync("day2.data", "utf8");
const arr = data
  .toString()
  .split("\n")
  .filter((v) => v !== "")
  .reduce((result, val) => {
    const [policy, password] = val.split(": ");
    const [posA, posB] = policy.slice(0, -1).trim().split("-");
    const char = policy.slice(-1);
    result.push({
      policy: { posA: parseInt(posA, 10), posB: parseInt(posB, 10), char },
      password,
    });
    return result;
  }, []);

let counter = 0;
arr.forEach((val) => {
  const {
    policy: { posA, posB, char },
    password,
  } = val;
  if (
    (password[posA - 1] === char && password[posB - 1] !== char) ||
    (password[posA - 1] !== char && password[posB - 1] === char)
  ){
    counter++;
  }
});
console.log(counter);
