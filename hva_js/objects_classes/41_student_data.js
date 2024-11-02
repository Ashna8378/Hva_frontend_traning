// a. Define and Populate the student Object:-------------------

let student = {}

student.name = "Ashna"
student.email = "ashna@gmail.com"
student.age = 22
console.log(student.name)

console.log(student)

// b. Update the student Object:----------------


student.age = 10
console.log(student.age)

// c. Add Method and Nested Object to student:----------------------

student.greet = function(){
    console.log(`Hello, ${student.name}!`)
}

student.greet()

student.address = {
    country: "India",
    city : "Noida",
    pin_code : 1234
}




console.log(student.address.country)

student.address.pin_code = 2346

console.log(student.address.pin_code)


// d. Create and Populate the friend Object:---------------------------------


let friend = {
    name: "pooja",
    email: "pooja@gmail.com",
    age: 22,
    address: {
        country: "India",
        city : "Noida",
        pin_code : 1234
    },
    greet:function(){
        console.log(`hello, ${this.name}!`)  // using this for dynamic refrence 
    }

}

friend.greet()
console.log(friend)

// e. Create and Populate the topper Object:


let topper = {
    name: "khushi",
    email: "khushi@gmail.com",
    age: 22,
    address: {
        country: "India",
        city : "Noida",
        pin_code : 1234
    },
    greet:function(){
        console.log(`hello, ${this.name}!`)  // using this for dynamic refrence 
    }
}

topper.greet()
console.log(topper)

// f. Define and Use the Student Class:---------------------------
 

