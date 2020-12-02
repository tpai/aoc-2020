/**
 * key: clean the data
 */

const fs = require("fs");
const data = fs.readFileSync("day2.data", "utf8");
const arr = data
  .toString()
  .split("\n")
  .filter((v) => v !== "")
  .reduce((result, val) => {
    const [policy, password] = val.split(": ");
    const [min, max] = policy.slice(0, -1).trim().split("-");
    const char = policy.slice(-1);
    result.push({
      policy: { min: parseInt(min, 10), max: parseInt(max, 10), char },
      password,
    });
    return result;
  }, []);

let counter = 0;
arr.forEach((val) => {
  const {
    policy: { min, max, char },
    password,
  } = val;
  const matched = password.match(new RegExp(char, "ig"));
  if (matched === null) return;

  if (min <= matched.length && max >= matched.length) {
    counter++;
  }
}, []);
console.log(counter);
