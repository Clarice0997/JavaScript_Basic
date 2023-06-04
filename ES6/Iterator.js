// Iterator 迭代器是确使用户在容器对象（链表或数组）上遍访的对象，使用该接口无需关心对象的内部实现细节

// Iterator Example
let iterator = {
  next: function () {
    return { done: false, value: 123 }
  }
}

// Iterator Example: 简单迭代器对象
const names = ['curry', 'kobe', 'klay']

let index = 0 // 通过一个index来记录当前访问的位置
iterator = {
  next() {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(iterator.next()) // { done: false, value: 'curry' }
console.log(iterator.next()) // { done: false, value: 'kobe' }
console.log(iterator.next()) // { done: false, value: 'klay' }
console.log(iterator.next()) // { done: true, value: undefined }

// Iterator Example: 生成迭代器函数
function createIterator(arr) {
  let index = 0
  return {
    next() {
      if (index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}

names = ['curry', 'kobe', 'klay']
// 调用createIterator函数，生成一个访问names数组的迭代器
const namesIterator = createIterator(names)

console.log(namesIterator.next()) // { done: false, value: 'curry' }
console.log(namesIterator.next()) // { done: false, value: 'kobe' }
console.log(namesIterator.next()) // { done: false, value: 'klay' }
console.log(namesIterator.next()) // { done: true, value: undefined }
