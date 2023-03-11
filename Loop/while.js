// While loop structure
// while 循环会在指定条件为真时循环执行代码块
// while (条件)
// {
//     需要执行的代码
// }

/**
 * 注意：
 * 1. 别忘记更新条件中所用变量的值，否则循环永远不会结束！
 * 2. 当结果为true时进入循环 循环体中可以使用 break （跳出循环）
 */

// Example 1: While Demo
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// Example 2: 死循环
// while (true) {
//   console.log('死循环！')
// }

// Example 3: 数组循环
const arr = ['1', '2', '3', '4']
i = 0
while (arr[i]) {
  console.log(arr[i])
  i = i + 1
}
