// a. Define and Populate the student Object:

const student = {}
student.name = "Ashna"
student.email = "dubeyashna123@gmail.com"
student.age = 21

console.log(student)


// b. Update the student Object:

student.age = 10

console.log(student.age)


// c. Add Method and Nested Object to student:

student.greet = function(){
    console.log(`Hello, ${this.name}!`)
}

student.greet()

student.address = {
    country :"India",
    city: "New Delhi",
    pin_code: 110025
}

console.log(student.address.country)

student.address.pin_code = 1228833

console.log(student.address)


// d. Create and Populate the friend Object:


let friend = {
    name: "John Doe",
    email: "john.example.com",
    age: 21,
    address: {
        country: "India",
        city: "Mumbai",
        pin_code: 40001

    },
    greet: function (){
        console.log(`Hello ${this.name}!`)
    }
}
friend.greet()

console.log(friend)


// e. Create and Populate the topper Object:


let topper = {
    name: "khushi",
    email: "khushi@gmail.com",
    age: 12,
    address: {
        country: "India",
        city: "Mumbai",
        pin_code: 40001
    },
    greet: function(){
        console.log(`Hello ${this.name}!`)
    }

}

topper.greet()
console.log(topper)

// f. Define and Use the Student Class:

class Student {
    constructor(name,email,age,country,city,pin_code){
      this.name = name
      this.email = email
      this.age = age
      this.country = country
      this.pin_code = pin_code
      this.address  = {
        country: country,
        city: city,
        pin_code: pin_code
      }
    }
   
    greet(){
        console.log(`Hello, ${this.name}`);
    
    }
    getFullAddress(){
         return `${this.address.country} ${this.address.city} ${this.address.pin_code}`
    }
}


let studentObj = new Student("Ashna Dubey", "ashna22@navgurukul.org", 21, "India", "New Delhi", 110025)
let friendObj  = new Student("John Doe", "john.doe@example.com", 22, "India", "Mumbai", 400001)
let topperObj  = new Student("Jane Smith", "jane.smith@example.com", 23, "India", "Bangalore", 560001)

console.log(studentObj)
console.log(friendObj);
console.log(topperObj);

console.log(studentObj.greet())
console.log(friendObj.greet())
console.log(topperObj.greet())


console.log(studentObj.getFullAddress())
console.log(friendObj.getFullAddress())
console.log(topperObj.getFullAddress())










