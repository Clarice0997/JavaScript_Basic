// map sturcture
// array.map(function(currentValue,index,arr), thisValue)

/**
 * 注意：
 * 1. .map() 只能遍历 Array对象
 * 2. .map() 它有返回值（它返回一个新的数组），新数组中的元素 为 原始数组元素 在回调函数内处理后的值
 * 3. .map() 不会对空数组进行检测
 * 4. .map() 当数组中的值为基本数据类型时不会改变原始数组（当数组内的元素为对象会被改变）
 */

// Example 1: handle array
let arr = [1, 2, 3]
const hh = arr.map((item, index, arr) => {
  item = item + 10
  return item
})
console.log('hh =>', JSON.parse(JSON.stringify(hh))) // 新数组
console.log('arr =>', JSON.parse(JSON.stringify(arr))) // 原数组

// Example 2: handle object
arr = [
  {
    id: 1,
    name: '加菲猫'
  },
  {
    id: 2,
    name: '欧弟'
  }
]
const home = arr.map((item, index, arr) => {
  return item.name
})
console.log(home)
