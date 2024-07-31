class Employee {
    constructor(name,email,age,department,position,salary){
        this.name = name
        this.email = email
        this.age = age
        this.department = department
        this.position = position
        this.salary = salary  
    }
    introduce(){
        return `Hello, I am ${this.name}, ${this.position}`
    }
    displaySalary(){
        return `Salary: $${this.salary}`
    }
}


let newEmployee = new Employee("Sam Johnson", "sam.johnson@example.com", 28, "Engineering", "Software Developer", 5000 )

console.log(newEmployee);
console.log(newEmployee.introduce());
console.log(newEmployee.displaySalary());


let manager = new Employee("Jessica Lee", "jessica.lee@example.com", 40, "Management", "Project Manager", 8000);

console.log(manager);
console.log(manager.introduce());
console.log(manager.displaySalary());

