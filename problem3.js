// const arr = [3, 6];
// const result = sortMaker(arr);
// console.log(result);

function sortMaker(arr) {
  if (arr.length !== 2) {
    return "Input need exactly two elements";
  }
  const [num1, num2] = arr;
  if (num1 === num2) {
    return "equal";
  }
  let largest = arr[0];
  let smallest = arr[1];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element < 0) {
      return "Invalid input";
    } else if (arr[i] > largest) {
      largest = arr[i];
    } else if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return [largest, smallest];
}
// done
