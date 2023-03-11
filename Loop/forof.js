// for of loop structure
// for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环
// for (const element of arr) {
//   // code goes here
// }

/**
 * 注意：
 * 1. 用于遍历可迭代对象 以及 字符串 想要在 for ...of 中得到数组的索引，需要使用 array.entries() 方法
 * 2. 可以使用 break（跳出循环）和 continue（阻止当前轮循环继续往下执行，并且进入下一轮循环）
 */

// Example 1:
const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
  console.log(num)
}

// Example 2:
for (const num of numbers) {
  console.log(num * num)
}

// Example 3:
let sum = 0
for (const num of numbers) {
  sum = sum + num
}
console.log(sum) // 15

// Example 4: array touppercase
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for (const country of countries) {
  newArr.push(country.toUpperCase())
}

console.log(newArr) // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// Example 5: entries() **
for (let [index, item] of numbers.entries()) {
  console.log('index =>', index, 'item =>', item)
}

// Example 6: 解构对象{...}
const arr = [
  { name: '小A', age: 12 },
  { name: '小B', age: 10 },
  { name: '小C', age: 14 }
]
sum = 0
for ({ age } of arr) {
  sum += age
}
console.log(sum)
