// a.  Calculate Area Function:

function calculateArea(width,height){
   
    return width * height
}

console.log(calculateArea(2,3))

// b. Modify Calculate Area Function with Default Values:

function  calculateAreaWithDefaults(width = 1, height = 1){
    return height * width
}

console.log(calculateAreaWithDefaults())
console.log(calculateAreaWithDefaults(5,10))


// c.  Rewrite Calculate Area as a Function Expression:


const calculateAreaFunction = function(width,height){
   
    return width * height
}

console.log(calculateArea(5,10))

// d. Rewrite Calculate Area as an Arrow Function:

const calculateAreaArrow = (width, height)=>{
    return height * width
}
console.log(calculateAreaArrow(5,10))