interface Greetable {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

// user1 = {
//   name: "Max",
//   age: 20,

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// };

class Myself {
  // name: string;
  // age: number;
  // job: string;
  constructor(protected name: string, protected age: number, protected job: string) {
    // this.name = name;
    // this.age = age;
    // this.job = job;
  }

  stateJob(name: string, age: number, job: string) {
    console.log(`My name is ${name} and age is ${age}. I am a ${job}`);
  }
}

const myself = new Myself("John", 30, "Software Engineering");
console.log(myself);

myself.stateJob("John Doe", 30, "Software Engineering");
