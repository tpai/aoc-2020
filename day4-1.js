/**
 * key: clean data
 */

const fs = require("fs");
const data = fs.readFileSync("day4.data", "utf8");
const arr = data.toString().split("\n");

const passports = [];

let collect = {};
arr.forEach(val => {
  if (val !== "") {
    const attrStrings = val.split(' ');
    attrStrings.forEach(str => {
      const [key, value] = str.split(':')
      collect[key] = value;
    });
  } else {
    passports.push(collect);
    collect = {};
  }
});

let validPassport= 0;
passports.forEach(passport => {
  const keys = Object.keys(passport);
  if (
    (keys.length === 8) ||
    (keys.length === 7 && !keys.includes('cid'))
  ) {
    validPassport++;
  }
});

console.log(validPassport);
