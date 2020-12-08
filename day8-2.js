/**
 * key: use collected fix data from part.1 and guess answer from the end
 */

const fs = require("fs");
const data = fs.readFileSync("day8.data", "utf8");
const fixes = fs.readFileSync("day8.json", "utf8");
const arr = data
  .toString()
  .split("\n")
  .filter((v) => v !== "");

const commands = arr.map((val) => {
  const [action, number] = val.split(" ");
  return {
    action,
    number: +number,
  };
});

function execute(index, fix) {
  let command = commands[index];

  if (typeof command === 'undefined')return 1;
  if (steps.has(index)) return 0;
  steps.set(index, 1);

  if (index === fix.index) {
    command.action = fix.to;
  }

  switch (command.action) {
    case "nop":
      return execute(index + 1, fix);
    case "acc":
      acc += command.number;
      return execute(index + 1, fix);
    case "jmp":
      return execute(index + command.number, fix);
  }
}

let acc;
const steps = new Map();
JSON.parse(fixes).forEach(fix => {
  acc = 0;
  steps.clear();
  let loop = execute(0, fix);
  if (loop === 1) {
    console.log(acc);
  }
});
