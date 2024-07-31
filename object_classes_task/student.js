a. Define and Populate the student Object:

const student = {}
student.name = "Ashna"
student.email = "dubeyashna123@gmail.com"
student.age = 21

console.log(student)


b. Update the student Object:

student.age = 10

console.log(student.age)


c. Add Method and Nested Object to student:

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


d. Create and Populate the friend Object:


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


e. Create and Populate the topper Object:


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




