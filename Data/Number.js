// Number 对象
// 属性
// 1. MAX_VALUE JS.最大数
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
// tip: 大于MAX_VALUE的数表示无穷大

// 2. MIN_VALUE JS.最小数 （接近 0 ，但不是负数）
console.log(Number.MIN_VALUE) // 5e-324

// 3. NEGATIVE_INFINITY POSITIVE_INFINITY 负无穷 正无穷 （溢出）
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)

// 4. NaN 非数字值特殊值
console.log(Number.NaN)

// 方法
// 1. isFinite() 是否有限（非无穷大）
console.log(Number.isFinite(123)) // true
console.log(Number.isFinite(Infinity)) // false

// 2. isInteger() 是否为整数
console.log(Number.isInteger(123)) // true
console.log(Number.isInteger(Math.PI)) // false

// 3. isNaN() 是否为 NaN
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(123)) // false

// 4. isSafeInteger() 是否是一个"安全整数"
console.log(Number.isSafeInteger(Math.pow(2, 53))) // false
console.log(Number.isSafeInteger(3)) // true

// 5. toExponential() 转换科学计数法
// 参数 x 规定指数计数法中的小数位数，是 0 ~ 20 之间的值
console.log(Number(123).toExponential(3)) // 1.230e+2

// 6. toFixed() 把 Number 四舍五入为指定小数位数的数字（字符串格式）
console.log(Number(5.56789).toFixed()) // 6
console.log(Number(5.56789).toFixed(3)) // 5.568

// 7. toLocaleString() 本地设置格式化字符串
function numberToLocaleString() {
  let num1 = 1000000
  let text1 = num1.toLocaleString()

  // 使用特定的语言环境将数字格式化为字符串
  let num2 = 1000000
  let text2 = num2.toLocaleString('fi-FI')

  // 使用特定的语言环境将数字格式化为货币字符串
  //人民币
  let num3 = 1000000
  let text3 = num3.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' }) // ¥1,000,000.00
  // 美元
  let num4 = 1000000
  let text4 = num4.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) // $1,000,000.00

  console.log(text1, text2, text3, text4)
}

// 8. toPrecision() 把数字格式化为指定的长度（字符串）
function numberToPrecision() {
  let num = new Number(13.3714)
  console.log(num.toPrecision()) // 13.3714
  console.log(num.toPrecision(2)) // 13
  console.log(num.toPrecision(10)) // 13.37140000
}

// Math 对象
// 1. Π 返回圆周率
const PI = Math.PI

console.log(PI) // 3.141592653589793

// 2. round 四舍五入
console.log(Math.round(PI)) // 3 to round values to the nearest number

console.log(Math.round(9.81)) // 10

// 3. floor 向下取整
console.log(Math.floor(PI)) // 3 rounding down

// 4. ceil 向上取整
console.log(Math.ceil(PI)) // 4 rounding up

// 5. min 最小值
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.min([-5, 3, 20, 4, 5, 10])) // NaN 无法传入数组
console.log(Math.min(...[-5, 3, 20, 4, 5, 10])) // 数组可以采用...解构方式

// 6. max 最大值
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

// 7. random 随机数
const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
console.log(num)

// 8. abs 绝对值 Absolute value
console.log(Math.abs(-10)) // 10

// 9. sqrt 开方 Square root
console.log(Math.sqrt(100)) // 10

console.log(Math.sqrt(2)) // 1.4142135623730951

// 10. pow 幂 Math.pow(x,y)
console.log(Math.pow(3, 2)) // 9

console.log(Math.E) // 2.718 自然对数的底数

// 11. log 对数 Logarithm 返回数的自然对数
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(10)) // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
// 返回 2|10 的自然对数
console.log(Math.LN2) // 0.6931471805599453
console.log(Math.LN10) // 2.302585092994046

// 返回以 2|10 为底的 e 的对数
console.log(Math.LOG2E) // 1.4426950408889634
console.log(Math.LOG10E) // 0.4342944819032518

// 12. exp 返回 E 的 x 次幂的值
console.log(Math.exp(1)) // 2.718281828459045

// 13. trunc 去除数字的小数部分
console.log(Math.trunc(1.1234)) // 1
console.log(Math.trunc(-1.1234)) // -1
console.log(Math.floor(-1.1234)) // 如果是负数的话 向下取整去除小数部分就无法使用

// 14. sin cos tan 正弦 余弦 正切
// tip: 单位要换算 度为单位 ( 2Π / 360 )
console.log(Math.sin(0))
console.log(Math.sin(30))
console.log(Math.sin(((2 * Math.PI) / 360) * 90))

console.log(Math.cos(0))
console.log(Math.cos(30))

console.log(Math.tan(60))
console.log(Math.tan(90))

// Example: 随机数生成器 ( 0 - 10 )
let randomNum = Math.random() // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen) // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor) // this gives between 0 and 10
