// forEach structure
// array.forEach(function(currentValue, index, arr), thisValue)

/**
 * 注意：
 * 1. 用于遍历 可迭代对象 以及 字符串 forEach() 对于空数组是不会执行回调函数的
 * 2. forEach() 中想要跳出循环 可以使用 try/catch
 * 3. forEach() 中不建议修改正在遍历的可迭代对象内的元素值，避免出现低级错误
 */

// Example 1: throw
try {
  const arr = [1, 2, 3, 4]
  arr.forEach((item, index, arr) => {
    console.log('item =>', item)
    if (item == 2) {
      throw new Error('11') // 抛出异常
    }
  })
} catch (e) {
  if (e.message !== '11') throw e
}

// Example 2: loop object
const json = {
  name: '加菲猫',
  age: 10
}
const keys = Object.keys(json)
keys.forEach(item => {
  console.log(item, json[item])
})
