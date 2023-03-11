// For in Loop structure
// 循环遍历对象的属性
// for (let 成员 in 对象) {
//   循环的代码块
// }

/**
 * 注意：
 * 1. 用它时最好就是遍历对象 用于 遍历对象的所有可枚举属性、字符串、数组（不要使用for...in循环）
 * 2. 它的 index 索引是字符串型数字 遍历 数组时 循环顺序有可能不是按照实际数组的内部顺序
 * 3. 可以使用 break（跳出循环）和 continue（阻止当前轮循环继续往下执行，并且进入下一轮循环）
 */

// Example 1: for ... in
let person = { fname: 'Bill', lname: 'Gates', age: 56 }
for (x in person) {
  console.log(x)
  console.log(person[x])
}
