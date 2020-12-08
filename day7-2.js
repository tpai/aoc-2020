/**
 * key: map and m + m * n
 */

const fs = require("fs");
const data = fs.readFileSync("day7.data", "utf8");
const arr = data
  .toString()
  .split("\n")
  .filter((v) => v !== "");

const rules = arr.reduce((result, val) => {
  const [parent, children] = val.split(" contain ");
  const [, parentStr] = parent.match(/([a-z ]+) bags/i);
  const childrenStr = children.slice(0, children.length - 1);
  if (childrenStr === "no other bags") {
    return result;
  }
  const parentKey = camelize(parentStr);
  const bags = childrenStr.split(", ");
  result[parentKey] = bags.reduce((res, bag) => {
    const [, amt, color] = bag.match(/(\d+) ([a-z ]+) bags?/i);
    const childrenKey = camelize(color);
    res[childrenKey] = +amt;
    return res;
  }, {});
  return result;
}, {});

let counter = 0;
function calcBags(target, base) {
  const bags = rules[target];
  if (typeof bags === 'undefined')return;
  Object.entries(bags).forEach(([bag, amt]) => {
    counter += amt * base;
    calcBags(bag, amt * base);
  });
}

calcBags('shinyGold', 1);
console.log(counter);

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
