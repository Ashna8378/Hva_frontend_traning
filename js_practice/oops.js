// methods
// function inside object



// const person = {
//     firstName: "mohit",
//     age: 8,
//     about: function(){
//         console.log(this)
//         console.log(`person name is ${this.firstName} and age is ${this.age}`)
//     }
// }

// console.log(person.about())



// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`)
// }


// const person1 = {
//     firstName: "harsh",
//     age: 12,
//     about: personInfo
// }

// const person2 = {
//     firstName: "mohit",
//     age: 8,
//     about: personInfo
// }

// const person3 = {
//     firstName: "anchal",
//     age: 9,
//     about: personInfo
// }

// person1.about()
// person2.about()
// person3.about()


// console.log(window)
// "use strict"

// function myFunc(){
//     console.log(this)
// }

// myFunc()


// eg------------------------------------------------------------------------------------

// function hello(){
//     console.log("hello world")
// }


// hello.call()    //we can call any function by using call()


// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician)
// }

// const user1 = {
//     firstName: "harshit",
//     age: 8,
   
// }

// const user2 = {
//     firstName: "harshit",
//     age: 9,
    
// }

// user1.about()
// about.call(user1, "guitar", "mozart")

// about.apply(user1, ["guitar", "bach"])

// const func = about.bind(user2, "guitar", "bach")

// func()



// eg.------------------------------------

// const user1 ={
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);

//     }
// }

// // don't do this mistake

// // user1.about()
// const myFunc = user1.about.bind(user1)
// myFunc()



// proto, prototype, class

// const user = {
//     firstName : "harshit",
//     lastName : "vashistha",
//     email: "harshitvashistha@gmail.com",
//     age: 2,
//     address: "House Number, Colony, pincode, state",
//     about: function(){
//           return `${this.firstName} is ${this.age} years `
//     },
//     is18: function(){
//         return this.age >= 18;

//     }
// }
// const aboutUser = user.about()
// console.log(aboutUser)
// console.log(user.about())



// function  (that function create objec)
// 2.) add key value pair
// 3.) oject ko return krega


// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years `
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la la'
//     }
// }


// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(userMethods); //{}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user
// }



// const user1 = createUser("harshit", "vashistha","harshit@gmail.com", 18, "my address")
// const user2 = createUser("harshit", "vashistha","harshit@gmail.com", 19, "my address")
// const user3 = createUser("harshit", "vashistha","harshit@gmail.com", 18, "my address")

// console.log(user1.about())
// console.log(user2.about())


// how to create empty objec by 2nd way 

// __ptoto__
// official ecmascript documentation
// [[prototype]]

// __prototype__ , [[prototype]]


// const obj1 = {
//     key1: "value1",
//     key2: "value2",

// }

// const obj2 = Object.create(obj1)
// // // there is one more way to create empty object
// obj2.key3 = "value3"
// obj2.key2 = "unique"
// console.log(obj2.key2)

// // this is happening

// console.log(obj2.__proto__)




// Prototype---------------------------------------------------------

function hello(){
    console.log("hello world")
}


// javascript function  ===> function + object

// you can add your own properties

// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty)

// name property ==> tells function name

// function provide more useful properties

// console.log(hello.prototype) //{}

// only functions provide prototype property



// hello.prototype.abc = "Abc"
// console.log(hello.prototype)



// 2015 / es6
// class keyword
// class are fake


// class createUser {
//     constructor(firstName, lastName, email, age, address, ){
//         console.log("Constructor called")
//         this.firstName = firstName
//         this.lastName = lastName
//         this.email = email  
//         this.age = age 
//         this.address = address
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years`
//     }
//     is18(){
//         return this.age >= 18
//     }
//     sing(){
//         return "la la la la"
//     }
//     func(a){
//         console.log(a)
//     }
// }

// const user1 = new createUser("harshit", "vashistha", "harshit@gmail.com", 21, "Bhngel noida")
// console.log(user1.func("Ashna"))


// practice on class 

// class Animal {
//     constructor(name, age){
//         this.name = name 
//         this.age = age
//     }
//     eat(){
//         return `${this.name} is eating`
//     }

//     isSuperCute(){
//         return this.age <= 1
//     }
//     isCute(){
//         return true
//     }
// }

// const animal1 = new  Animal("tom", 1)

// console.log(animal1)
// console.log(animal1.eat())
// console.log(animal1.isSuperCute())
// console.log(animal1.isCute())


// dog class 


// class Dog{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     eat(){
//         return `${this.name} is eating`
//     }

//     isSuperCute(){
//         return this.age <= 1
//     }
//     isCute(){
//         return true
//     }


// }

// const tommy = new Dog("tommy", 3)

// console.log(tommy)
// console.log(tommy.eat())
// console.log(tommy.isCute())
// console.log(tommy.isSuperCute())

// extends---------------------------------------------

//  class Animal {
//         constructor(name, age){
//             this.name = name 
//             this.age = age
//         }
//         eat(){
//             return `${this.name} is eating`
//         }
    
//         isSuperCute(){
//             return this.age <= 1
//         }
//         isCute(){
//             return true
//         }
//     }
    


// class Dog extends Animal{
//           constructor(name, age, speed){
//             super(name,age)
//             this.speed = speed
//           }
//           run(){
//             return `${this.name} is runnin at ${this.speed}kmph`
//           }
//           eat(){
//             return `modifies eat: ${this.name} is eating`
//           }
// }
// object / instance
// const tommy = new Dog("tommy", 3, 45)

// console.log(tommy)
// console.log(tommy.name)
// console.log(tommy.isCute())

// console.log(tommy.run());
// console.log(tommy.eat());

// getters setters
// class Person {
//     constructor(firstName, lastName, age){
//      this.firstName = firstName
//      this.lastName = lastName
//      this.age = age

//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName){
//         const [firstName, lastName]= fullName.split(" ")
//         this.firstName = firstName
//         this.lastName = lastName
// }




//     // setName(firstName, lastName){
//     //     this.firstName = firstName
//     //     this.lastName = lastName
//     // }
// }


// const person1 = new Person("harshit", "vashistha", 24)
// console.log(person1.firstName)
// console.log(person1.fullName)

// console.log(person1.firstName);
// console.log(person1.lastName)

// person1.setName("mohit", "dubey")
// console.log(person1.firstName);
// console.log(person1.lastName)


// static methods and properties

class Person {
    constructor(firstName, lastName, age){
     this.firstName = firstName
     this.lastName = lastName
     this.age = age

    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName]= fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName
}
}


