function canPay(changeArray, totalDue) {
  let sum = 0;
  if (changeArray.length === 0) {
    return "The array is empty ";
  }
  for (let i = 0; i < changeArray.length; i++) {
    let element = changeArray[i];
    sum += element;
  }
  if (sum >= totalDue) {
    return true;
  } else return false;
}
const arr = [];
const price = 10;

console.log(canPay(arr, price));
