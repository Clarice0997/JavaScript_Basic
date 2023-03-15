// Destructing 解构
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

// Destructing Arrays
// Example 1:
numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree) // 1 2 3

// Example 2:
const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e, pi, gravity, bodyTemp, boilingTemp) // 2.72 3.14 9.81 37 100

// If we like to skip on of the values in the array we use additional comma
const numbers = [1, 2, 3]
let [numOne, , numThree] = numbers //2 is omitted

console.log(numOne, numThree) // 1 3

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [, secondPerson, , fourthPerson] = names // first and third person is omitted

console.log(secondPerson, fourthPerson) // Brook John

// We can use default value in case the value of array for that index is undefined
const names = [undefined, 'Brook', 'David']
let [firstPerson = 'Asabeneh', secondPerson, thirdPerson, fourthPerson = 'John'] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) // Asabeneh Brook David John

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]

// Destructuring during iteration (Array of Arrays)
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

for (const [country, city] of countries) {
  console.log(country, city)
}

// Destructuring Object
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter) // 20 10 200 undefined

// Renaming during structuring
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p) // 20 10 200 undefined

// Sometimes the key might not be in the object, in that case we can give a default value during declaration.
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter = 60 } = rectangle

console.log(width, height, area, perimeter) //20 10 200 60

// Object parameter with destructuring
const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter(rect)) // 60

// Destructuring object during iteration
const todoList = [
  {
    task: 'Prepare JS Test',
    time: '4/1/2020 8:30',
    completed: true
  },
  {
    task: 'Give JS Test',
    time: '4/1/2020 10:00',
    completed: false
  },
  {
    task: 'Assess Test Result',
    time: '4/1/2020 1:00',
    completed: false
  }
]

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed)
}
