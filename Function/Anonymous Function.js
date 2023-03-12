// 声明函数
function a(a1, a2, a3) {
  // 函数体
}

// 两种写法逻辑上等价
// 其主要的区别是： 前者会在代码执行前被加载到作用域中，而后者则是在代码执行到那一行的时候才会有定义。另一个重要的区别就是：函数声明会给函数一个指定的名字，而函数表达式则是：创建一个匿名函数，然后将这个匿名函数赋给一个变量。

// 匿名函数
let a = function (a1, a2, a3) {
  // 函数体
}

const anonymousFun = function () {
  console.log('I am an anonymous function and my value is stored in anonymousFun')
}
