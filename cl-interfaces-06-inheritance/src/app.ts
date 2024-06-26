class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  // reports: string[];
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }

  addEmployee(name: string) {
    if (name === "King") {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
    console.log("Total reports: " + this.reports.length);
  }
}

const IT = new ITDepartment("d1", ["Max"]);

IT.addEmployee("Max");
IT.addEmployee("Manu");

// IT.employees[2] = 'Anna';

IT.describe();
IT.name = "NEW NAME";
IT.printEmployeeInformation();
console.log(IT);

const accounting = new AccountingDepartment("d1", []);
accounting.addReports("Update not uploaded");

accounting.addEmployee("King");
accounting.addEmployee("Kina");

accounting.printReports();
accounting.printEmployeeInformation();

// const ITCopy = { name: 'DUMMY', describe: IT.describe };

// ITCopy.describe();
