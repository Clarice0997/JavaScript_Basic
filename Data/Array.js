// Array 对象
// 属性
// 1. constructor 构造原型函数
// 返回数组对象原型创建的函数

// 2. length 返回数组的数目
console.log([1, 2].length) // 2

// 3. prototype 属性构造器
Array.prototype.myUcase = function () {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase()
  }
}

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.myUcase()
console.log(fruits)

// 方法
// 1. Array() 数组构造器
const arr = Array() // creates an an empty array
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

// 2. fill() 用静态值填充所有数组元素
// array.fill(value, start, end(默认array.length))
const arr = Array() // creates an an empty array
console.log(arr)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.fill('Runoob', 2, 4) // ['Banana','Orange','Runoob','Runoob']

// 3. concat() 连接数组
// array1.concat(array2, array3,..., arrayX)
// tip: 该方法不会改变现有的数组，而是返回一个新的数组
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = ['g', 'h', 'i']
const array4 = array1.concat(array2, array3)

console.log(array4) // 输出：['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

// 4. length 数组大小
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> 5 is the size of the array

// 5. indexOf() 检查一个项目是否存在于数组中。如果存在则返回索引，否则返回 -1
// array.indexOf(item,start)
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1

// Example:
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana') // 0

if (index === -1) {
  console.log('This fruit does not exist in the array')
} else {
  console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado') // -1, if the element not found index is -1
if (indexOfAvocado === -1) {
  console.log('This fruit does not exist in the array')
} else {
  console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array

// 6. lastIndexOf() 给出数组中最后一项的位置。如果存在，则返回索引，否则返回 -1
// array.lastIndexOf(item,start)

const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1

// 7. includes() 检查一个项目是否存在于数组中。如果存在则返回真，否则返回假
// arr.includes(searchElement, fromIndex)

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'] // List of web technologies

console.log(webTechs.includes('Node')) // true
console.log(webTechs.includes('C')) // false

// 8. Array.isArray() 检查数据类型是否为数组
let number = [1, 2, 3, 4, 5]
console.log(Array.isArray(number)) // true

let number = new Array()
console.log(Array.isArray(number)) // true

// 9. toString() 将数组转换为字符串
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// 10. join() 连接数组的元素
// array.join(separator)
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'] // List of web technologies

console.log(webTechs.join()) // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # ')) // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// 11. slice() 切片数组元素，切出范围内的多个项目
// array.slice(start, end)
// 两个参数：起始位置和结束位置。它不包括结束位置
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position

// 12. splice() 用于添加或删除数组中的元素
// array.splice(index,howmany,item1,.....,itemX)
// tip: 方法会改变原始数组
// Example 1:
const numbers = [1, 2, 3, 4, 5]
numbers.splice()
console.log(numbers) // -> remove all items

// Example 2:
const numbers = [1, 2, 3, 4, 5]
numbers.splice(0, 1)
console.log(numbers) // remove the first item

// Example 3:
const numbers = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// 13. push() 向数组的末尾添加一个或多个元素，并返回新的长度
// 14. pop() 删除数组的最后一个元素并返回删除的元素
// 15. shift() 删除数组开头的一个数组元素
// array.push(item1, item2, ..., itemX)
// array.pop()
// array.shift()

// Example 1:
const arr = ['item1', 'item2', 'item3']
arr.push('new item')
console.log(arr)
// ['item1', 'item2','item3','new item']

// Example 2:
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // -> [1,2,3,4,5,6]

numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4,5]

// Example 3:
const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]

// 16. unshift() 在数组的开头添加数组元素
// array.unshift(item1,item2, ..., itemX)
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]

// 17. reverse() 反转数组的顺序
// tip: 方法会改变原始数组
// array.reverse()
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> reverse array order
console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]

// 18. sort() 对数组的元素进行排序
// tip: 方法会改变原始数组
// 默认排序顺序为按字母升序
// array.sort(sortfunction)
// Example 1: 数字排序（数字和升序）
const points = [40, 100, 1, 5, 25, 10]
points.sort(function (a, b) {
  return a - b
}) // [1,5,10,25,40,100]

// Example 2: 数字排序（数字和降序）
const points = [40, 100, 1, 5, 25, 10]
points.sort(function (a, b) {
  return b - a
}) // [100,40,25,10,5,1]

// Example 3: 数字排序 (字母和降序)
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.sort()
fruits.reverse() // ['Orange','Mango','Banana','Apple']

// 19. copyWithin() 从数组的指定位置拷贝元素到数组的另一个指定位置
// array.copyWithin(target, start, end)
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.copyWithin(2, 0) // [Banana,Orange,Banana,Orange]

const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Papaya']
fruits.copyWithin(2, 0, 2) // [Banana,Orange,Banana,Orange,Kiwi,Papaya]

// 20. entries() 返回一个数组的迭代对象
// array.entries()
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
let obj = fruits.entries()
console.log(obj.next().value) // [ 0, 'Banana' ]
console.log(obj.next().value) // [ 1, 'Orange' ]
console.log(obj.next().value) // [ 2, 'Apple' ]
console.log(obj.next().value) // [ 3, 'Mango' ]

// 21. every() 检测数组所有元素是否都符合指定条件（通过函数提供）
// array.every(function(currentValue,index,arr), thisValue)
// every() 方法使用指定函数检测数组中的所有元素
// A. 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测
// B. 如果所有元素都满足条件，则返回 true
// tips: 1. every() 不会对空数组进行检测 2.  every() 不会改变原始数组
const age = [18, 20, 16, 21]
console.log(
  age.every((item, index, arr) => {
    console.log(item)
    console.log(index)
    console.log(arr)
    return item >= 18 ? true : false
  })
) // false

// 22. filter() 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
// array.filter(function(currentValue,index,arr), thisValue)
// tips: 1. every() 不会对空数组进行检测 2.  every() 不会改变原始数组
const age = [18, 20, 16, 21]
console.log(
  age.filter((item, index, arr) => {
    console.log(item)
    console.log(index)
    console.log(arr)
    return item >= 18 ? true : false
  })
) // [ 18, 20, 21 ]

// 23. find() 返回通过测试（函数内判断）的数组的第一个元素的值
// array.find(function(currentValue, index, arr),thisValue)
// find() 方法为数组中的每个元素都调用一次函数执行
// A. 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数
// B. 如果没有符合条件的元素返回 undefined
// tips: 1. every() 不会对空数组进行检测 2.  every() 不会改变原始数组
const age = [18, 20, 16, 21]
console.log(
  age.find((item, index, arr) => {
    console.log(item)
    console.log(index)
    console.log(arr)
    return item === 16 ? true : false
  })
) // 18

// 24. findIndex() 返回传入一个测试条件（函数）符合条件的数组第一个元素位置
// array.findIndex(function(currentValue, index, arr), thisValue)
// findIndex() 方法为数组中的每个元素都调用一次函数执行
// A. 当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数
// B. 如果没有符合条件的元素返回 -1
// tips: 1. every() 不会对空数组进行检测 2.  every() 不会改变原始数组
const age = [18, 20, 16, 21]
console.log(
  age.findIndex((item, index, arr) => {
    console.log(item)
    console.log(index)
    console.log(arr)
    return item === 16 ? true : false
  })
) // 2
console.log(age[2]) // 16

// 25. forEach() 用于调用数组的每个元素，并将元素传递给回调函数
// array.forEach(callbackFn(currentValue, index, arr), thisValue)
// tip: forEach() 对于空数组是不会执行回调函数的
// forEach() 本身是不支持的 continue 与 break 语句
// 使用 return/some 代替 continue
// 使用 every 代替 break

// 箭头函数
forEach(element => {
  /* … */
})
forEach((element, index) => {
  /* … */
})
forEach((element, index, array) => {
  /* … */
})

// 回调函数
forEach(callbackFn)
forEach(callbackFn, thisArg)

// 内联回调函数
forEach(function (element) {
  /* … */
})
forEach(function (element, index) {
  /* … */
})
forEach(function (element, index, array) {
  /* … */
})
forEach(function (element, index, array) {
  /* … */
}, thisArg)

// 26. keys() 用于从数组创建一个包含数组键的可迭代对象
// array.keys()
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
let obj = fruits.keys()
console.log(obj.next().value) // 0
console.log(obj.next().value) // 1
console.log(obj.next().value) // 2
console.log(obj.next().value) // 3

// 27. reduce() 接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
// 28. reduceRight() 同 Reduce() 不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// tip: reduce() 对于空数组是不会执行回调函数的
const age = [18, 20, 16, 21]
console.log(
  age.reduce((total, item) => {
    return total + item
  }, 0)
)

// 29. some() 用于检测数组中的元素是否满足指定条件
// array.some(function(currentValue,index,arr),thisValue)
// some() 方法会依次执行数组的每个元素
// A. 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测
// B. 如果没有满足条件的元素，则返回false
// tips: 1. every() 不会对空数组进行检测 2.  every() 不会改变原始数组
const age = [20, 18, 16, 21]
console.log(
  age.some(item => {
    return item === 20
  })
) // true

// 30. map() 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
// array.map(function(currentValue,index,arr), thisValue)
// tips: 1. every() 不会对空数组进行检测 2.  every() 不会改变原始数组
const age = [20, 18, 16, 21]
console.log(
  age.map(item => {
    return item * 2
  })
) // [ 40, 36, 32, 42 ]

// 31. valueOf() 返回 Array 对象的原始值
const age = [20, 18, 16, 21]
console.log(age.valueOf()) // [ 20, 18, 16, 21 ]

// Array of arrays 矩阵
// 数组可以存储不同的数据类型，包括数组本身
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3]
]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
