// const person: {
//     name: string;
//     age: number
// }
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "John",
  age: 34,
  hobbies: ["Sport", "Gaming"],
  role: [1, "author"]
};
console.log(person.name);
person.role.push("admin");
// person.role[1] = 10
// person.role = [0, 'admin', 'user']

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()) ERROR! map doesn't exist on type string
}
