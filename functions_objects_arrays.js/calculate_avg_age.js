// a. Define the Array of People------------------------------------------------------------------

people = [
    {name: 'Alice', age:25},
    {name: 'Bob', age:16},
    {name: 'Charlie', age:15},
    {name: 'Alice', age:23},

]


// b. Define the calculateAverageAge Function Using forEach:-------------------------------------------------------------

function calculateAverageAge(people){
    totalAge = 0
    people.forEach(function(person){
          totalAge+= person.age
    })

    const averageAge = totalAge / people.length
    return averageAge
}

// c. Call the calculateAverageAge Function---------------------------------------------------------------


const averageAge = calculateAverageAge(people)
console.log(averageAge)



