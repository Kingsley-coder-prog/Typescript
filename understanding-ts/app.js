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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "John",
    age: 34,
    hobbies: ["Sport", "Gaming"],
    role: Role.ADMIN
};
console.log(person.name);
// person.role.push("admin");
// person.role[1] = 10
// person.role = [0, 'admin', 'user']
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //   console.log(hobby.map()) ERROR! map doesn't exist on type string
}
if (person.role === Role.ADMIN) {
    console.log("is author");
}
