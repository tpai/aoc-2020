/**
 * key: make sure the validation rules is fully implemented
 */

const fs = require("fs");
const data = fs.readFileSync("day4.data", "utf8");
const arr = data.toString().split("\n");

const passports = [];

let collect = {};
arr.forEach((val) => {
  if (val !== "") {
    const attrStrings = val.split(" ");
    attrStrings.forEach((str) => {
      const [key, value] = str.split(":");
      collect[key] = value;
    });
  } else {
    passports.push(collect);
    collect = {};
  }
});

let validPassport = 0;
passports.forEach((passport) => {
  const keys = Object.keys(passport);
  if (keys.length === 8 || (keys.length === 7 && !keys.includes("cid"))) {
    const byr = +passport["byr"];
    const iyr = +passport["iyr"];
    const eyr = +passport["eyr"];
    const hgt = passport["hgt"];
    const matched = hgt.match(/^(\d+)(cm|in)$/i);
    const [, height, unit] = matched !== null ? matched : ["xxx", 0, "cm"];
    const hcl = passport["hcl"];
    const ecl = passport["ecl"];
    const pid = passport["pid"];
    if (
      byr >= 1920 &&
      byr <= 2002 &&
      iyr >= 2010 &&
      iyr <= 2020 &&
      eyr >= 2020 &&
      eyr <= 2030 &&
      ((unit === "cm" && height >= 150 && height <= 193) ||
        (unit === "in" && height >= 59 && height <= 76)) &&
      /#[0-9a-f]{6}/.test(hcl) &&
      ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl) &&
      !isNaN(+pid) &&
      pid.length === 9
    ) {
      validPassport++;
    }
  }
});

console.log(validPassport);
