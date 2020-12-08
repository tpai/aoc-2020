/**
 * key: map extension
 */

const fs = require("fs");
const data = fs.readFileSync("day6.data", "utf8");
const arr = data.toString().split("\n");

const forms = [];

let collect = [];
arr.forEach((val) => {
  if (val !== "") {
    const attrStrings = val.split(" ");
    attrStrings.forEach((str) => {
      collect.push(str);
    });
  } else {
    forms.push(collect);
    collect = [];
  }
});

let answered = 0;
forms.forEach(form => {
  const q = new Map();
  form.forEach(value => {
    const chars = value.split('');
    chars.forEach(char => {
      if (!q.has(char)) {
        q.set(char, 0);
      } else {
        q.set(char, q.get(char) + 1);
      }
    });
  });
  Array.from(q).forEach(([, n]) => {
    if (n === form.length - 1) {
      answered ++;
    }
  });
  console.log(form.length, Array.from(q));
});

console.log(answered);
