function add(a, b, c) {
  return a + b +c;
}

console.log(add(3, 7, 1)); 



function squareRoot(num) {
  if (num < 0) {
    return "Invalid input.";
  }
  return Math.sqrt(num);
}

console.log(squareRoot(9));