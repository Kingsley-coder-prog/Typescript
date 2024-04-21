class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, private name: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getEmployeesInfo() {
    console.log("Number of employees: " + this.employees.length);
    console.log("List of Employees: " + this.employees);
  }
}

const accounting = new Department("d21", "Accounting");

// accounting.employees[2] = 'Anna';

accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
accounting.addEmployee("Mary");
accounting.addEmployee("Max");
accounting.getEmployeesInfo();

// accounting.employees[2] = 'Anna'
