type Combineable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(n1: Combineable, n2: Combineable, resultConversion: ConversionDescriptor) {
  let result;
  if ((typeof n1 === "number" && typeof n2 === "number") || resultConversion === "as-number") {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;

  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

// Type Aliases
// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

// To:

// type User = { name: string; age: number };

// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
