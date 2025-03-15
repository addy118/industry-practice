const arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

let input = -1;
const inputEl = document.querySelector(".input");
inputEl.addEventListener("click", () => {
  input = Number(prompt("Enter a number (1-10): "));
});

const linearEl = document.querySelector(".linear");
linearEl.addEventListener("click", () => linear(input));

const binaryEl = document.querySelector(".binary");
binaryEl.addEventListener("click", () => binary(input));

function linear(num) {
  if (num > 10 || num < 1) {
    console.log("Please enter a valid number");
    return;
  }

  // from left
  let left = 0;
  while (left < arr.length) {
    if (arr[left] == num) {
      console.log(`${num} found at index ${left} from left`);
      break;
    }
    left++;
  }

  // from right
  let right = arr.length - 1;
  while (right >= 0) {
    if (arr[right] == num) {
      console.log(`${num} found at index ${right} from right`);
      break;
    }
    right--;
  }
}

function binary(num) {
  if (num > 10 || num < 1) {
    console.log("Please enter a valid number");
    return;
  }

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === num) {
      console.log(`${num} found at index ${mid}`);
      return;
    } else if (arr[mid] < num) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  console.log("num not found");
}
