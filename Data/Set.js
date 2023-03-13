// Set
// Creating an empty set
let companies = new Set()
console.log(companies) // Set(0) {}

// Creating set from array
const languages = ['English', 'Finnish', 'English', 'French', 'Spanish', 'English', 'French']

const setOfLanguages = new Set(languages)
console.log(setOfLanguages) // Set(4) { 'English', 'Finnish', 'French', 'Spanish' }

// iterate each elements
for (const language of setOfLanguages) {
  console.log(language)
}

// Adding an element to a set
companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies) // Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }

// Deleting an element a set
console.log(companies.delete('Google')) // true
console.log(companies.size) // 4 elements left in the set
console.log(companies) // Set(4) { 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }

// Checking an element in the set
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

// forEach
companies.forEach(item => {
  console.log(item)
})

// Clearing the set
console.log(companies.clear()) // undefined
console.log(companies) // Set(0) {}

// Example 1: Word Counter
languages = ['English', 'Finnish', 'English', 'French', 'Spanish', 'English', 'French']

function wordCounter(arr) {
  const setOfArray = new Set(arr)
  let counts = []
  for (let word of setOfArray) {
    const filterArr = arr.filter(item => item === word)
    counts.push({ word, count: filterArr.length })
  }
  return counts
}

console.log(wordCounter(languages))

// Example 2: Union of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let C = new Set(c)
console.log(C) // Set(6) { 1, 2, 3, 4, 5, 6 }

// Example 3: Intersection of sets

let A = new Set(a)
let B = new Set(b)
c = a.filter(num => B.has(num))
C = new Set(c)

console.log(C) // Set(3) { 3, 4, 5 }

// Example 4: Difference of sets
c = a.filter(num => !B.has(num))
C = new Set(c)

console.log(C) // Set(2) { 1, 2 }
