// Code goes here!

const add = (a: number, b: number = 5) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(add(5));
