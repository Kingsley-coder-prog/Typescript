function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result is: ", num);
}

printResult(add(10, 20));

let combinedValues: (a: number, b: number) => number;
combinedValues = add;
console.log(combinedValues(8, 8));
