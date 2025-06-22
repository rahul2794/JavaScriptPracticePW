
// reduce()
// Purpose: Reduces the array to a single value (could be a number, string, object, or even another array).

// It accumulates results by applying a function to each element and carrying over the result.


let numbers = [1,2,3,4,5,6,7,8,9,10]
let sumOfFirstTenNumbers = numbers.reduce((acc,num) => acc + num,0) // here 0 signifies that the value of acc (accumulator) starts with 0
console.log('Sum of First 10 Numbers : ',sumOfFirstTenNumbers)


console.log('-----------------------------')

let status = ['fail','pass','pass','pass','fail']
let passCount = status.reduce((acc,s) => s === 'pass' ? acc + 1 : acc, 0)
console.log('Pass Count :',passCount)

console.log('-----------------------------')

// Example: Converting an array to an object using reduce()

let people = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

let peopleMap = people.reduce((acc, person) => (acc[person.id] = person.name, acc ), {})

// let peopleMap = people.reduce(function(acc, person) {
//   acc[person.id] = person.name;
//   return acc;
// }, {});

console.log(peopleMap);

console.log('-----------------------------')

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];

let statusCount = testResults.reduce((acc, status) => status ==='pass' ? acc + 1 : acc, 0);
console.log(statusCount)