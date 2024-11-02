// methods 
// function inside object 

// const person = {
//     firstName : "harshit",
//     age : 8,
//     about : function(){
//         console.log(`person name is ${this.firstName} and persson age is ${this.age}`)
//     }
 
// }

// person.about()

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`)
// }

// const person1 = {
//     firstName : "harsh",
//     age: 8,
//     about:personInfo
// }

// const person2 = {
//     firstName : "mohit",
//     age: 9,
//     about:personInfo
// }

// const person3 = {
//     firstName : "nitish",
//     age: 12,
//     about:personInfo
// }

// person1.about()
// person2.about()
// person3.about()

// window -------------------

// console.log(this)

// arrow functions------------------------

// Classes ----------------------

// class keyword 
// class are fake

// class CreateUSer{
//     constructor(firstName, lastName, email, age, address){
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.email = email,
//         this.age = age,
//         this.address = address
    
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years`

//     }
//     is18(){
//         return this.age >= 18

//     }
//     sing(){
//         return 'la la la la'
//     }
// }

// const user1 = new CreateUSer('ashna', 'dubey','ashna@gmail.com', 21, "bhangel noida" )

// practice on class ---

class Animal {
    constructor(name, age){
        this.name = name
        this.age = age

    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <= 1
    }

    isCute(){
        return true
    }
}

// const animal1 = new Animal("tom", 2)
// console.log(animal1)

// console.log(animal1.eat())
// console.log(animal1.isCute())


// dog class 

class Dog{
    constructor(name, age){
        this.name = name
        this.age = age

    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <= 1
    }

    isCute(){
        return true
    }

}


const tommy = new Dog("tommy", 1)
console.log(tommy.eat())

