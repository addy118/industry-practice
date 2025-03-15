function jumpSearch(arr, x, n) {
  let step = Math.sqrt(n);
  let minStep = Math.min(step, n) - 1;

  let prev = 0;
  for (minStep; arr[minStep] < x; minStep = Math.min(step, n) - 1) {
    prev = step;
    step += Math.sqrt(n);
    if (prev >= n) return -1;
  }

  while (arr[prev] < x) {
    prev++;
    if (prev == Math.min(step, n)) return -1;
  }

  if (arr[prev] === x) return prev;

  return -1;
}

let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
let x = 610;
let n = arr.length;
console.log("Steps " + n);

let index = jumpSearch(arr, x, n);
console.log(`Number ${x} is at index ${index}`);
