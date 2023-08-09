function cubeNumber(number) {
  let cube;
  if (typeof number !== "number") {
    return "Please Provide a number!";
  } else {
    cube = number * number * number;
    return cube;
  }
}
// submit upper function only .
const number = 4;
const result = cubeNumber(number);
console.log(result);

//done