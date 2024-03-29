// const person: {
//     name: string;
//     age: number
// }
const person = {
  name: "John",
  age: 34,
  hobbies: ["Sport", "Gaming"]
};
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()) ERROR! map doesn't exist on type string
}
