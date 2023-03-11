// For loop structure
// For循环 循环代码块一定的次数
// for (语句 1; 语句 2; 语句 3)
// {
//     被执行的代码块
// }
// 语句 1 （代码块）开始前执行 通常用来初始化变量 可选
// 语句 2 定义运行循环（代码块）的条件 评估条件 可选
// 语句 3 在循环（代码块）已被执行之后执行 改变初始变量 可选

/**
 * 注意：
 * 1. 当省略语句2，别忘记在循环体内使用 break，否则循环永远不会结束！
 * 2. 当省略语句3，别忘记在循环体内更新变量，否则可能会造成永远不会结束！
 */

// Example 1: 0-5
for (let i = 0; i <= 5; i++) {
  console.log(i)
}
// 0 1 2 3 4 5

// Example 2: 5-0
for (let i = 5; i >= 0; i--) {
  console.log(i)
}
// 5 4 3 2 1 0

// Example 3: i x i
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`)
}

// Example 4: array loop
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase())
}
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// Example 5: 数组中所有元素相加
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i] // can be shorten, sum += numbers[i]
}
console.log(sum) // 15

// Example 6: 基于现有数组创建新数组（平方）
const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2)
}
console.log(newArr) // [1, 4, 9, 16, 25]

// Example 7: 基于现有数组创建新数组（转大写）
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr) // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// Example 8: 三语句省略写法
let i = 0 // 语句1，设置在外面
for (;;) {
  if (i == 5) {
    break // 语句2，添加条件，避免出现永久循环
  }
  console.log(i)
  i++ // 语句3，设置在里面
}

// Example 9: 循环对象
let obj = {
  name: '小明',
  age: 12
}
let keys = Object.keys(obj)
console.log(keys)
for (let i = 0; i < keys.length; i++) {
  console.log(obj[keys[i]])
}
