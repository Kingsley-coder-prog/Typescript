type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  priviledges: ["create-server"],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Scalar");
result.split(" ");

const fetchUserdata = {
  id: "u1",
  name: "Max",
  job: { title: "ADMIN", description: "Company owner" }
};

console.log(fetchUserdata?.job?.title);

const userInput = "";
const storedData = userInput ?? "Default";
console.log(storedData);

// type UnkownEmployee = Admin | Employee;

// function printEmployeeInfo(emp: UnkownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("privileges: " + emp.privileges);
//   }

//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }

// printEmployeeInfo({ name: "Kyle", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving ...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck!");
//   }

//   loadingCargo(amount: number) {
//     console.log("Loading cargo... " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ("loadingCargo" in vehicle) {
//     vehicle.loadingCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving at the speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there";
// }

// interface errorContainer {
//   // {email: "Invalid email address", username: "Invalid username", password: "Invalid password"}
//   [prop: string]: string;
// }

// const errorBag: errorContainer = {
//   email: "Invalid email address",
//   username: "Invalid username. Must start with a capital letter",
//   password: "Invalid password. Must be at least 8 characters"
// };
