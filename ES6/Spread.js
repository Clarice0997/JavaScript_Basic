// Spread 扩展
// When we destructure an array we use the spread operator(...) to get the rest elements as array.
// Spread operator to get the rest of array elements
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]

// Spread operator to copy array
const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack) // ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]

// Spread operator to copy object
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki'
}

const copiedUser = { ...user }
console.log(copiedUser) // {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

// Modifying or changing the object while copying
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki'
}

const copiedUser = { ...user, title: 'instructor' }
console.log(copiedUser) // {name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

// Spread operator with arrow function (...args)=>{}
const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args) {
    sum += num
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5)) // 15
