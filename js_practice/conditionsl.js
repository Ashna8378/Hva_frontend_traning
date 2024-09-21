// conditional branching- if,else,else if

// let age = 17
// if (age >=18) {
//     console.log("you are eligible to vote");
// }

// let year = 2024
// if (year % 4 == 0){
//     console.log("This is a leap year")
//     console.log("I can vote")
// }

// let age = 19
// if (age < 18) {
//     console.log("you are eligible to vote");
// }else{
//     console.log("You are not eligible to vote")
// }


// let speed = 64;
// if (speed < 20) {
//     console.log("You are driving too slow");
// } else if (speed >= 20 && speed <= 60) {
//     console.log("You are driving at a moderate speed");
// } else {
//     console.log("You are driving too fast");
// }


// Conitional operator "?" or Ternary operator


// syntax --->let result = condition ? value1 : value2;

// let age = 15
// let canVote = (age>=18) ? "You are eligible to vote": "you are not eligible to vote"
// console.log(canVote)

// let speed = 60 
// let message = (speed<20) ? "You are driving too slow" : (speed >= 20 && speed <= 60) ? "You are driving at a moderate speed" : "You are driving too fast"

// console.log(message)


// Switch Statement---------------------------------

// let day = 5
// switch (day){
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday");
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("Invalid day")
// }

// Nullish Coalsescing Operator- "??"--------------------------------

// The result of a ?? b is:
// A. if a is defined, then a,
// B. if a is undefined, then b.

// let a = 5;
// console.log(a ?? "Hello")


// let b = undefined;
// console.log(b ?? "Hello")

// let firstName;
// let lastName;
// let nickName = "Supercoder"
// console.log(firstName ?? lastName ??  "Anonymous")
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous")



// let height;
// let width =10;
// let area = (height ?? 100) * (50 ?? width)
// console.log(area)

// Truthy and Falsy values----------------------------------

// falsy values - false, 0,"", null, undefined, NaN

// console.log(Boolean(false))
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))

// let height = 0;
// console.log(height ?? 100)
// console.log(height || 100)
// console.log(height || false || NaN)

// second video--------------------------


// falsy values - false, 0,"", null, undefined, NaN

// let isOpen = false

// if(isOpen == true){
//     console.log("The door is open")
// }else{
//     console.log("The door is closed")
// }

// let apples = 0;
// if(apples){
//     console.log("We have apples")
// }
// else{
//     console.log("We have no apples")
// }


// let input = ""
// let messages = input || "Hello"
// let message = "Hello" || input
// console.log(messages)

// let name = null;
// if (name){
//     console.log("We have a name")
// }else{
//     console.log("we have no name")
// }

// let fname;
// if(fname){
//     console.log("Hi" + fname)
// }else{
//     console.log("Hi Guest")
// }


// let num1 = "two";
// let num2 = 2;

// let result = num1/num2

// if (isNaN(result)){
//     console.log("The result is not a number")
// }else{
//     console.log(result)
// }


// console.log(Boolean("false"))
// console.log(Boolean(" "))
// console.log(Boolean("0"))
// console.log(Boolean([]))
// console.log(Boolean({}))

// String Comparison

// console.log("Z" > "A");

// console.log("A" > "B");

// console.log("Priyanka" > "Punam")
// console.log("Priya" > "Priyanka");
// console.log("Mee" > "Me")
// console.log("a" > "A")

// console.log("2" > 1) // when we compare different datatype then it convert it into number
// console.log("01" == 1); // "01" will convert to 1

// console.log(true > 0);
// console.log(false > 0);
// console.log(true == 1);
// console.log(false == 0);
// console.log(false === 0);  // both should be equal datatype as well value
 
// console.log("A" > 0); 
// console.log("A" == 65); // can't compare like this

// console.log("0" == 0);
// console.log(Boolean("0"))
// console.log(Boolean(0))

// console.log(null == undefined)
// console.log(null === undefined)


// console.log(undefined == 0); // if we comapare undefined with any value instead of null it will always give false
// console.log(undefined > 0);
// console.log(undefined < 0);

// Video 3---------------------------------------------------------------

// console.log(3 > 2);
// console.log("orange" > "apple");
// console.log("apple" > "Apple");
// console.log("apple" > "app")
// console.log("apple" > "pineapple")
// console.log("10" > "2")
// console.log("10" > 2)
// console.log("20" > "22")
// console.log("20" > 2)
// console.log(undefined == null)
// console.log(undefined === null)
// console.log(null == 0)


// Assignment  Question 

// 1. Take two numbers a,b and print the sum,difference, product, quotient and modulus
// of a and b 

// let a = 10
// let b = 5

// let sum = a+b
// let difference = a-b
// let product = a*b
// let quotient = a/b
// let modulus = a%b

// console.log(`Sum: ${sum}`)
// console.log(`Difference: ${difference}`)
// console.log(`Product ${product}`)
// console.log(`Quotient ${quotient}`);
// console.log(`Modulus ${modulus}`);


// 2.Take two numbers and only print the integer part when a is divisible by b

// let a = 13
// let b = 2
// let quotient = Math.floor(a/b)
// console.log(`Quotient ${quotient}`)

// OR

// let quotient =a/b
// console.log(`Quotient: ${quotient}`)

// let modulus = a%b
// console.log(`Modulus: ${modulus}`)

// console.log(modulus / b)

// console.log(`Integer part: ${quotient - modulus /b}`)



// 3.Take two numbers a,b and print the exponential power of the first number raised by second 

// let a = 2
// let b = 3
// let exponents = a**b
// console.log(`Exponents: ${exponents}`);



// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b 

// let a = 17
// let b = 2

// let modulus = a%b
// console.log(`Modulus: ${modulus}`);
// console.log(`Decimal Part: ${modulus / b}`)

// 5.Take marks in 5 subjects A,B,C,D,E and print out the average of maths from five subject marks.

// let a = 80
// let b = 90
// let c = 70
// let d = 85
// let e = 95

// let average = a+b+c+d+e/5
// console.log(`Average: ${average}`);

// 6. Take the cost price a and selling price b of a product and print the profit obtained on the product

// let costPrice = 100
// let sellingPrice = 150

// let profit = sellingPrice - costPrice;
// console.log(`profit: ${profit}`);

// 7. Take a number and print out the last digit of the number

// let n = 1234
// let last_Digit = n % 10
// console.log(`LastDigit: ${last_Digit}`);

// 8. Take a 2 digit number and return the first and last digit;

// let number =23

// let firstDigit = Math.floor(number / 10)

// let lastDigit = number % 10

// console.log(`FirstDigit: ${firstDigit}`);
// console.log(`LastDigit: ${lastDigit}`)


// 9.Write a Javascript program to find the largest of three number

// let num1 = 10
// let num2 = 20
// let num3 = 30

// let largest = num1

// if(num2 > largest){
//     largest = num2
// }
// if (num3 > largest){
//     largest = num3
// }
// console.log(`Largest: ${largest}`);

// 10. Write a javascript program to check whether a number is even or odd

// let num = 23
// if (num%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// 11. Write a javascript program to check whether a given number is prime or not


// 12. Write a javascript program to convert temperature from celsius to Fahrenheit and vice versa.

// let celsius = 100
// let fahrenheit = (celsius*9/5)+32
// console.log(`Fahrenheit: ${fahrenheit}`);

// let fahrenheit = 100
// let celsius = (fahrenheit - 32)* 5 / 9
// console.log(`Celsius:${celsius}`);


// let num = 10_000_000
// console.log(num);

// let num = 1e7
// console.log(num);

// let num = 2300_000;
// let num = 23e5
// console.log(num);

// let num = 56_000_000_000
// let num = 5.6e10
// console.log(num);

// let num = 0.02
// let num = 2e-2
// console.log(num);


// let num = 0.005;
// let num = 5e-3
// console.log(num);

// Rounding------------------

// 1. Math.floor -> Rounds down to the nearest integer

// console.log(Math.floor(3.1));
// console.log(Math.floor(3.9));
// console.log(Math.floor(-3.1));  //nearest lower value is -4
// console.log(Math.floor(-3.9));

// 2. Math.ceil -> Rounds up to the nearest integer

// console.log(Math.ceil(3.1));
// console.log(Math.ceil(3.9));
// console.log(Math.ceil(-3.1));  
// console.log(Math.ceil(-3.9));

// 3. Math.round - Rounds to the nearest integer

// .1 to .4 -> rounds down to the nearest integer
//  .5 to .9 ->rounds up to the nearest integer


// console.log(Math.round(3.1));
// console.log(Math.round(3.9));
// console.log(Math.round(-3.1));
// console.log(Math.round(-3.9));
// console.log(Math.round(3.5));
// console.log(Math.round(-3.5));

// isNaN() - Checks if the value is NaN

// console.log(isNaN(NaN));
// console.log(isNaN(10));
// console.log(isNaN("10"));
// console.log(isNaN("hello"));
// console.log(isNaN("10hello"));

// isFinite() - Checks if the value is a finite number

// console.log(isFinite(10));
// console.log(isFinite("10"));
// console.log(isFinite("Hello"));

// Math.random() - Returns a random number between 0 and 1

// console.log(Math.random());

// let random = Math.random()
// console.log(random);
// console.log(parseInt(random*10));

// Math.max() - Returns the largest of zero and more numbers

// console.log(Math.max(1,2,3,4,5));
// console.log(Math.max(-1,-2,-3,-4,-5));

// Math.min() - Returns the smallest of zero and more numbers

// console.log(Math.min(1,2,3,4,5));
// console.log(Math.min(-1,-2,-3,-4));

// Math.pow() - Returns base to the exponent power,that is , base exponent

// console.log(Math.pow(2,3));

// Math.sqrt() - Returns the square root of a number

// console.log(Math.sqrt(4));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(25));

// Strings Methods

// console.log('Hello, World');  // Single quotes
// console.log("Hello,world!");  // Double quotes
// console.log(`Hello,world`);   //  template literals / bacticks


// Length

// let str = "hello"
// console.log(str.length);

// let str2 = "Hello, world"
// console.log(str2.length);

// let str = "Hello"
// console.log(str[0]);
// console.log(str[-1]);  // undefined
// console.log(str[4]);


// let str = "Hello World"
// let strLength = str.length 
// console.log(strLength)
// console.log(str[strLength - 1]);


// let str = "Hello, World!"
// console.log(str[str.length - 1]);


// let str = "Hello"
// console.log((str[0]));
// console.log(str.charAt(0));
// console.log((str.at(-1)));
// console.log((str.at(-2)));

// Strings are immutable

// let str = "Hello"
// str[0] = "h"     
// console.log(str[0]);

// let str = "Hello"
// str = "hello"
// console.log(str);


// Chnaging the case of a string

// let str = "Hello"
// console.log(str.toLowerCase());

// let str = "hello"
// console.log(str.toUpperCase());

// let str = "hELLo"
// let firstChar = str[0].toUpperCase()
// let remainingChars = str.slice(0).toLowerCase()
// console.log(firstChar + remainingChars);

// indexOf() - Returns the index of (the position of ) the first occurrence of a specified text in a string


// let str = "Hello"

// console.log(str.indexOf("H"));
// console.log(str.indexOf("e"));
// console.log(str.indexOf("l"));
// console.log(str.indexOf("o"));

// let str = "This is a string"

// console.log(str.indexOf("i"));
// console.log(str.indexOf("is"));


// lastIndexOf() - Returns the index of (the position of) the last ocurrence 
// of a specified text in a string

// let str = "This is a string"
// console.log(str.lastIndexOf("i"));

// includes() - Returns true if a string contains a specified string, otherwise false

// let str = "This is a string"
// console.log(str.includes("This"));
// console.log(str.includes("this"));

// console.log("Hello".includes("H"));
// console.log("Hello".includes("L"));

// startsWith() - Returns true is a string starts with a specified string otherwise false

// console.log("Hello".startsWith("H"));
// console.log("Hello".startsWith("h"));

// console.log("Hello".startsWith("e"));
// console.log("Hello".startsWith("He"));

// endsWith() - Returns true if a string ends with a specified string, otherwise false

// console.log("Hello".endsWith("o"));
// console.log("Hello".endsWith("lo"));

// slice() - Ectract a part of a string and returns a new string

// let str = "this is a string"

// console.log(str.slice(0,4));
// console.log(str.slice(5,7));
// console.log(str.slice(0));
// console.log(str.slice(5));
// console.log(str.slice(-6));
// console.log(str.slice(5,-6));

// substring() - Extracts the character from a string, between two specified indices

// let str = "this is a string"
// console.log(str.substring(0,3));
// console.log(str.substring(3,0));

// let str = "this is a string"
// console.log(str.substr(0,4));
// console.log(str.substr(2,5));
// console.log(str.substr(-4,3));

// concat() - Joins two or more strings, and joined a new joined strings

// let str1 = "Hello"
// let str2 = "World"
// console.log(str1.concat(" ",str2));
// console.log(str1 + " "+ str2);

// trim() - Removes whitespace from both ends of a string

// let str = " Hello World "
// console.log(str.trim());

// trimStart() - Removes whitespaces from the beginning of a string

// let str = "  Hello word  "
// console.log(str.trimStart());


// trimEnd() - Removes whitespaces from the end of a string

// let str = "  Hello word  "
// console.log(str.trimEnd());

// padStart() - Pads a string with another string, until the resulting string reaches the given length

// let str = "5"
// console.log(str.padStart(4, "0"));
// console.log(str.padStart(4, "1"));
// console.log(str.padStart(4, "a"));
// console.log(str.padStart(4, "ab"));

// let str = 5;
// let newStr = str.toString()
// console.log(newStr.padStart(4,"0"));

// let str = "Hello"
// console.log(str.padStart(7,"a"));

// padEnd() - Pads a string with another string, until  the resultant string reaches the given length

// let str = "5"
// console.log(str.padEnd(4,"0"));

// repeat() - returns a new string with a specified number of copies of a existing string

// let str = "Hello"
// console.log(str.repeat(4));
// console.log(str.repeat(0));


// replace() - Searches a string for a specified value, or a regular expression, and returns a new string
// where the specified values are replaced

// let str = "Hello world"
// console.log(str.replace("world","Universe"));

// let str = "Hello world world"
// console.log(str.replace("world","Universe"));

// console.log(str.replaceAll("world","universe"));


// next video loop and function------------------------------
// while , for, do while
// Syntax:

// for(initialization; condition; increment/decrement){
     
    // code block
// }


// for (let i = 0; i < 5;i++){
//     console.log("Hello world");
// }
// console.log(i);


// let i = 0
// for (; i< 5; i++){
  
//     console.log(i);
// }
// console.log(i);


// let i = 0
// for(; i< 5;){
//     console.log(i);
//     i++
// }
// console.log(i);


// for(; ;){
//     console.log("Hello world");
// }

// While loop

// Syntax:

// while(condiion){
//     // code block
// }

// let i = 0
// while(i<5){
//     console.log(i);
//     i=i+1
// }



// let i = 5
// while(i < 1){
//     console.log(i);
//     i--
// }


// let i = 5
// while (i>0){
//     console.log(i);
//     i--
// }


// let i = 5
// while(i){
//     console.log(i);
//     i--
// }


// do while loop--------------------------------
// Syntax:

// do{
//     // code block

// }while(condition)

// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i < 5)



// let i = 5
// do{
//     console.log(i);
//     i--
// }while ( i > 0)


// let i = 5
// do{
//     console.log(i);
//     i--
// }while( i > 6)


// for (let i = 6; i < 5; i++){
//     console.log(i);
// }

// Continue Statement--------------------

// for ( let i = 0; i < 5; i++){
//     if(i === 3){
//         continue
//     }
//     console.log(i)
// }

// for ( let i = 0; i < 10; i++){
//     if(i % 2 === 0){
//         continue
//     }
//     console.log(i)
// }


// break statement - to exit the loop

// Functions-------------------------------------------------------

// function declaration 

// syntax
// function functionName (para1,para2....){
//    //  code block
// }


// function greet(){
//     console.log("hello world");
// }
// greet()


// function greet(){
//     let name = "john";
//     console.log("hello " + name)
// }
// greet()


// function greet(){
//     let fname = "john"
//     console.log("hello " + fname);
// }

// greet()
// console.log(fname);


// let fname = "john"
// function greet(){
  
//     console.log("hello " + fname);
// }
// greet()
// console.log(fname);



// let fname = "John"
// function greet(){
//      fname = "Sushmita"
//     console.log("Hello " + fname);

// }
// console.log(fname);
// greet()
// console.log(fname);



// let fname = "John"
// function greet(){
//     let  fname = "Sushmita"
//     console.log("Hello " + fname);

// }
// console.log(fname);
// greet()
// console.log(fname);


// Using var , we can reassign and redeclare the variable
// Using let , we can reassign the variable but cannot redeclare the variable
// Using const , we cannot reassign and redeclare the variable

// Types of error
// 1. Reference error
// 2. Type error
// 3. Syntax Error

// next video-------------

// let fname = "Shrutika"

// function sayHello(){
//     fname = "vishakha"

//     let messages = "Hello " + fname
//     console.log(messages);

// }
// console.log(fname);
// sayHello()
// console.log(fname);



// Parameters and Arguments

// function greet(name){
//     console.log("Hello " + name);
// }
// greet("Alka")
// greet(12)
// greet("Sushmita")



// function greet(city, country){
//     console.log("I belong to " + city + " in " + country );
// }
// greet("Pune")
// greet()
// greet("Mumbai", "India")
// greet("Delhi")
// greet("","India")
// greet(undefined, "India")



// function age(name,age){
//     console.log(name + " is " + age + " years old");
// }
// age("Rajkumar", 20)


// function age(name,age){
//     console.log(name + " is a good boy");

// }
// age("Rajkumar",20)


// let fname = "Gayatri"
// function greet(fname,age){
//     fname = "Hey" +  fname
//     console.log(fname + age );

// }

// greet(fname, 20)
// console.log(fname);



// function greet(fname , age = 22){
//     console.log("Hello " + fname + " you are " + age + " years old");
// }
// greet("Nikita")
// greet("Nikita",20)
// greet("Eram", undefined)
// greet("Eram", null)
// greet("Eram", false)


// null vs undefinded
// undefinded vs not defined

// function place(city, country){
//     if(country === undefined){
//         country = "china"
    
//     }
//     console.log("I belongs to " + city + " in " + country)
// }
// place("Mumbai","India")
// place("Delhi")

