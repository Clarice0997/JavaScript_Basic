// try-catch-finally block syntax
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}

// Example 1:
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err) // ReferenceError: fistName is not defined
}

// Example 2:
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // ReferenceError: fistName is not defined
} finally {
  console.log('In any case I will be executed')
}

// catch & finally usage
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name) // Name of the error ReferenceError
  console.log('Error message', err.message) // Error message fistName is not defined
} finally {
  console.log('In any case I will be executed')
}

// throw usage
// throw 'Error2' // generates an exception with a string value
// throw 42 // generates an exception with the value 42
// throw true // generates an exception with the value true
// throw new Error('Required') // generates an error object with the message of Required

// throw Example
const throwErrorExampleFun = () => {
  let x = ''
  try {
    if (x == '') throw new Error('empty')
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err.name)
    console.log(err.message)
  }
}
throwErrorExampleFun()

// ReferenceError
try {
  let firstName = 'Asabeneh'
  let fullName = firstName + ' ' + lastName
  console.log(fullName)
} catch (error) {
  console.log(error.name) // ReferenceError
  console.log(error.message) // lastName is not defined
}

// SyntaxError
// let square = 2 x 2 // SyntaxError: Unexpected identifier
// console.log('Hello, world") // SyntaxError: Unexpected identifier

// TypeError
try {
  let num = 10
  console.log(num.toLowerCase())
} catch (error) {
  console.log(error.name) // TypeError
  console.log(error.message) // num.toLowerCase is not a function
}
