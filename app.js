const array = [1, 40, -5, 10, 0];

//Хоть где то пригодилось
function mergeSort(arr) {
  const mid = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, mid);

  return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

console.log("Исходный массив ", array);
const result = mergeSort(array);
console.log("Отсортированный массив ", result);
