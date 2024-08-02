//a. forEachArray Function-----------------------------------------------------

function forEachArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

const numbers = [1, 2, 3, 4];

forEachArray(numbers, function(num) {
    console.log(num * 2);  // This should print 2, 4, 6, 8 to the console
})






