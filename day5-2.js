/**
 * key: sort seat ids ascending
 */
const fs = require('fs');
const data = fs.readFileSync('day5.data', 'utf8');
const arr = data
  .toString()
  .split('\n')
  .filter(v => v !== '');

const seatIds = [];
arr.forEach(val => {
  let f = 0;
  let b = 127;
  const clues = val.split('');
  clues.slice(0, 7).forEach(clue => {
    if (clue === 'F') {
      b = Math.floor(b - (b - f) / 2);
    }
    if (clue === 'B') {
      f = Math.ceil(f + (b - f) / 2);
    }
  });
  let l = 0;
  let r = 7;
  clues.slice(7).forEach(clue => {
    if (clue === 'L') {
      r = Math.floor(r - (r - l) / 2);
    }
    if (clue === 'R') {
      l = Math.ceil(l + (r - l) / 2);
    }
  });
  if (f === b && l === r) {
    seatIds.push(f * 8 + l);
  }
});

const sortedSeatIds = seatIds.sort((a, b) => a - b);

for(let i =0;i<sortedSeatIds.length;i++) {
  console.log(sortedSeatIds[i], i);
  if (sortedSeatIds[i] - 13 !== i) {
    break;
  }
}
