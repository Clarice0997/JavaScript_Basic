// 闭包 Closure：函数可以访问自己作用域之外的变量或函数

// Example 1: Demo
function counter() {
  let count = 0
  function inner() {
    count++
    console.log(count)
  }
  return inner
}

const increment = counter()
increment() // 输出 1
increment() // 输出 2
increment() // 输出 3

// Example 2: 模块模式
// arrow function
const calculator = (() => {
  let result = 0
  const add = num => {
    result += num
  }
  const subtract = num => {
    result -= num
  }
  const multiply = num => {
    result *= num
  }
  const divide = num => {
    result /= num
  }
  const getResult = () => {
    return result
  }
  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    getResult: getResult
  }
})() // 自执行函数表达式 返回函数的返回值对象

calculator.add(4)
calculator.subtract(2)
calculator.multiply(2)
calculator.divide(2)
console.log(calculator.getResult()) // 2

// Declaration function
function calculator() {
  let result = 0
  const add = num => {
    result += num
  }
  const subtract = num => {
    result -= num
  }
  const multiply = num => {
    result *= num
  }
  const divide = num => {
    result /= num
  }
  const getResult = () => {
    return result
  }
  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    getResult: getResult
  }
}

console.log(typeof calculator) // function
console.log(typeof calculator()) // object

const result = calculator()
result.add(4)
result.subtract(2)
result.multiply(2)
result.divide(2)
console.log(result.getResult()) // 2

// Example 3: 私有变量和函数
const person = (() => {
  let name = 'John'
  let age = 30
  const getAge = () => {
    return age
  }
  return {
    getName: () => {
      return name
    },
    getAge: getAge
  }
})()

console.log(person.getAge())
console.log(person.getName())

// Example 4: 记忆化
// 计算斐波那契数列的函数
const fibonacci = (() => {
  const cache = {}
  const calculate = n => {
    if (n <= 1) {
      return n
    } else if (cache[n]) {
      return cache[n]
    } else {
      const result = calculate(n - 1) + calculate(n - 2)
      cache[n] = result
      return result
    }
  }
  return calculate
})()

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))

// Example 5: 事件处理程序
const button = document.querySelector('#my-button')

const handler = (() => {
  let count = 0
  const handleClick = () => {
    count++
    console.log(`Button was clicked ${count} time(s)`)
  }
  return handleClick
})()

button.addEventListener('click', handler)
