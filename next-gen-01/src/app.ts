// Code goes here!

// const add = (a: number, b: number = 5) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// printOutput(add(5));

// // Spread Operator

// const hobbies = ["Hiking", "Swimming"];

// const activeHobbies = ["Football"];

// const myActive = activeHobbies.push(...hobbies);
// console.log(activeHobbies.push(...hobbies));
// console.log(myActive);

const person = {
  userName: "Micky",
  age: 34
};

const Person = { ...person };
console.log(Person);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(5, 4, 3, 3.7);
console.log(addNumbers);
