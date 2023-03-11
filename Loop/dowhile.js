// do/while loop structure
// do/while 循环是 while 循环的变体。该循环会在检查条件是否为真之前执行一次代码块，然后如果条件为真的话，就会重复这个循环
// do {
//   需要执行的代码
// } while (条件)

/**
 * 注意：
 * 1. 别忘记更新条件中所用变量的值，否则循环永远不会结束！
 * 2. 即使条件的结果为 false，也至少循环一次的特点
 * 3. 循环体中可以使用 break （跳出循环）
 */

// Example 1: 0-5
i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// Example 2: array sum
let arr = [1, 2, 3, 4]
let i = 0
let num = 0
do {
  num = num + arr[i] // 数组内成员的和
  i++
} while (arr[i])

console.log(num) // 10
//数组中的【0，null，false，undefined, 空字符串】 当做false处理

// Example 3:
arr = [null, 1, 2, 3, 4]
i = 0
do {
  console.log(arr[i])
  i++
} while (arr[i])

// 角标 0 的位置，我故意放置了一个 null
// 因为先执行的 do 内的代码块 由(i=0) => 变(i=1)
// 所以当第一次进入 while 条件判断时, i变成了1, (arr[1]) => (1)
