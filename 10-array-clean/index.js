const numArr = [2, 4, 5, 0, 8, 2, 2];

function filterArray(arr, fn) {
  const filteredArr = [];
  for (const num of arr) {
    if (!fn(num)) {
      filteredArr.push(num);
    }
  }
  return filteredArr;
}

console.log(filterArray(numArr, (num) => num === 2));
