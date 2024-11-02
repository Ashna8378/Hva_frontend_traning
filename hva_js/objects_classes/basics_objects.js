// objects reference type

// arrays are good but not sufficient
// for real world data
// objects store key value pair 
// objects don't have index

// how to create objects ---------------------------------------

// const person = {
//     name: "harshit",
//      age: 22,
//      hobbies:["guitar", "sleeping", "listening music"]
// }
// console.log(person)
// console.log(typeof person)


// how to access data from objects------------------------ 

// console.log(person.name)  // dot notation
// console.log(person["name"])

// console.log(person.age)
// console.log(person.hobbies[0])

// how to add key value pair to objects--------------------- 

// person.gender = "male"
// console.log(person)

// person["male"] = "female"
// console.log(person)

// difference between dot and bracket notation -----------------------

// const key = "email"

// const person = {
//     name: "harshit",
//      age: 22,
//     "person hobbies":["guitar", "sleeping", "listening music"]
// }

// console.log(person["person hobbies"])
// person[key] = "ashnadubey@gmail.com"
// console.log(person)


// how to iterate objects -------------------------

// const person = {
//     name: "harshit",
//      age: 22,
//      hobbies:["guitar", "sleeping", "listening music"]
// }

// for in loop
// object.keys

// for(let key in person){
//     // console.log(key)
//     console.log(person[key])

// }

// console.log(Object.keys(person))   // gives in array 
// const val = Array.isArray((Object.keys(person)))
// console.log(val)

// for of loop ---------

// for (let key of Object.keys(person)){
//     console.log(person[key])
// }

// computed properties ----------------------

const key1 = "objkey1"
const key2 ="objkey2"

const value1 = "myvalue1"
const value2 = "myvalue2"

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2"
// }


// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj)

// const obj = {}

// obj[key1] = value1
// obj[key2] = value2
// console.log(obj)



// spread operator --------------------------------

// const array1 = [1,2,3]
// const array2 = [5, 6, 7]

// const newAarray = [...array1, ...array2,45,32]
// console.log(newAarray)

// spread operator in objects -------------

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// }

// const obj2 = {
//     key1: "unique",
//     key3: "value3",
//     key4: "value4",
// }
// console.log(obj1)

// const newObject = {...obj1, ...obj2, key69: "value69" }

// console.log(newObject)

// object destructuring ------------------

// const band = {
//     bandName : "led zepplin",
//     famousSong: "staiway to heaven",
//     year:1968,
//     anotherFamousSong : "kashmir"
// }

// let bandName = band.bandName
// let famousSong = band.famousSong
// console.log(bandName, famousSong)


// object destructuring

// const {bandName: var1,famousSong:var2, ...restProps} = band

// console.log(var1)
// console.log(restProps)


// objects inside array --------------------
// very useful in real world applications 

// const users = [
//     {userId:1, firstName: "harshit", gender: "male"},
//     {userId:2, firstName: "mohit", gender: "male"},
//     {userId:3, firstName: "nitish", gender: "male"},
// ]

// for(let user of users){
//     console.log(user.firstName)
// }

// nested destructuring -------------

// const users = [
//     {userId:1, firstName: "harshit", gender: "male"},
//     {userId:2, firstName: "mohit", gender: "male"},
//     {userId:3, firstName: "nitish", gender: "male"},
// ]

// const [user1, user2,user3] = users
// console.log(user1)


// const [{firstName:user1firstName}, ,{gender}] = users
// console.log(firstName)
// console.log(user1firstName)

// console.log(gender)

