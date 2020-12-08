/**
 * key: map
 */

const fs = require("fs");
const data = fs.readFileSync("day7.data", "utf8");
const arr = data
  .toString()
  .split("\n")
  .filter((v) => v !== "");

const rules = arr.reduce((result, val) => {
  const [parent, children] = val.split(" contain ");
  const [, parentKey] = parent.match(/([a-z ]+) bags/i);
  const childrenStr = children.slice(0, children.length - 1);
  if (childrenStr === "no other bags") {
    return result;
  }
  const bags = childrenStr.split(", ");
  bags.forEach((bag) => {
    const [, , color] = bag.match(/(\d+) ([a-z ]+) bags?/i);
    const childrenKey = camelize(color);
    if (typeof result[childrenKey] === "undefined") result[childrenKey] = [];
    result[childrenKey].push(camelize(parentKey));
  });
  return result;
}, {});

const usedBags = new Map();
function findBag(target) {
  if (rules[target]) {
    rules[target].forEach(bag => {
      findBag(bag);
      if (!usedBags.has(bag)) {
        usedBags.set(bag, 1);
      }
    });
  }
}
findBag('shinyGold');
console.log(usedBags.size);

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
