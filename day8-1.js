/**
 * key: use Map to identify the duplicated action
 */

const fs = require("fs");
const data = fs.readFileSync("day8.data", "utf8");
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

let acc = 0;
const steps = new Map();
const fixes = [];
function execute(index) {
  let command = commands[index];
  if (steps.has(index)) return 0;
  steps.set(index, 1);
  switch (command.action) {
    case "nop":
      fixes.push({ index, to: 'jmp' });
      execute(index + 1);
      break;
    case "acc":
      acc += command.number;
      execute(index + 1);
      break;
    case "jmp":
      fixes.push({ index, to: 'nop' });
      execute(index + command.number);
      break;
  }
}

execute(0);
console.log(acc);

fs.writeFileSync('./day8.json', JSON.stringify(fixes.reverse()));
