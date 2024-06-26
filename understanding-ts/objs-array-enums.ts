// const person: {
//     name: string;
//     age: number
// }

/// Object type, Array type
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "John",
//   age: 34,
//   hobbies: ["Sport", "Gaming"],
//   role: [1, "author"]
// };

// Enum

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}
const person = {
  name: "John",
  age: 34,
  hobbies: ["Sport", "Gaming"],
  role: Role.ADMIN
};
console.log(person.name);

// person.role.push("admin");
// person.role[1] = 10
// person.role = [0, 'admin', 'user']

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()) ERROR! map doesn't exist on type string
}

if (person.role === Role.ADMIN) {
  console.log("is author");
}
