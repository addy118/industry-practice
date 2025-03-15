const arr = [1, 2, 3, 4, 100, 5, 6, 7, 8, 9];
const target = 6;

const interpolation = (arr = [], target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const rangeDelta = arr[right] - arr[left];
    console.log(rangeDelta);
    const indexDelta = right - left;
    console.log(indexDelta);
    const valueDelta = target - arr[left];
    console.log(valueDelta);

    if (valueDelta < 0) {
      return -1;
    }

    const middleIndex =
      left + Math.floor((valueDelta * indexDelta) / rangeDelta);

    if (arr[middleIndex] === target) {
      return middleIndex;
    } else if (arr[middleIndex] < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }
  return -1;
};

console.log(interpolation(arr, 100));
