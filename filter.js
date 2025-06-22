
// filter()
// Purpose: Creates a new array with all elements that pass a test provided by a callback function.

// It keeps elements that return true from the callback.

let numbers = [1,2,34,5,6,7,8,10]
let even = numbers.filter(num => (num % 2 === 0))
console.log(even)