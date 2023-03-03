// 算数运算符
// 1. Addition 加法
/**
 * Addition Rule
 * 1. Infinity + Infinity = Infinity
 * 2. (-Infinity) + (-Infinity) = -Infinity
 * 3. Infinity + (-Infinity) = NaN
 * 4. Infinity + null = Infinity
 * 5. 0 + 0 = 0
 * 6. -0 + -0 = -0
 * 7. +0 + -0 = +0
 * 8. 如果是两个字符串，则将字符串进行拼接
 * 9. 如果有一个是字符串一个不是字符串，则将非字符串转换成字符串再拼接
 * 10. 如果操作数都不是字符串类型，则将操作数转换为数值类型再相加
 */
console.log(2 + 3)

// 2. Subtraction 减法
/**
 * Subtraction Rule
 * 1. Infinity - Infinity = NaN
 * 2. (-Infinity) - (-Infinity) = -NaN
 * 3. Infinity - (-Infinity) = Infinity
 * 4. Infinity - null = Infinity
 * 5. 0 - 0 = 0
 * 6. -0 - -0 = -0
 * 7. +0 - -0 = +0
 * 8. 与NaN相关的减法运算结果都为NaN
 * 9. 如果有一个操作数是对象，则先对对象进行隐式转换，再根据前面的规则进行减法运算
 * 10. 如果果有一个操作数是非数字类型则先在后台调用 Number()函数将其转换为数值，再根据前面的规则进行减法运算。
 */
console.log(3 - 2)

// 3. Multiplication 乘法
/**
 * Multiplication Rule
 * 1. Infinity * 0 = NaN
 * 2. Infinity * null = NaN
 * 3. Infinity * undefined = NaN
 * 4. Infinity * Infinity = Infinity
 * 5. 如果操作数的值超过数值的表示范围，结果为Infinity 或 - Infinity
 * 6. 如果操作数中有一个操作数为NaN，结果为NaN
 * 7. 如果操作数中有一个操作数为undefined，结果为NaN
 * 8. 如果有一个操作数是对象，则先对对象进行隐式转换，再根据前面的规则进行乘法运算
 * 9. 如果有一个操作符不是数值类型，则先调用Number()进行转换，再根据前面的规则进行乘法运算
 */
console.log(2 * 3)

// 4. Division 除法
/**
 * Division Rule
 * 1. Infinity / 0 = Infinity
 * 2. Infinity / null = Infinity
 * 3. Infinity / undefined = NaN
 * 4. Infinity / Infinity = NaN
 * 5. 如果操作数的值超过数值的表示范围，结果为Infinity 或 - Infinity
 * 6. 如果操作数中有一个操作数为NaN，结果为NaN
 * 7. 如果操作数中有一个操作数为undefined，结果为NaN
 * 8. 如果有一个操作数是对象，则先对对象进行隐式转换，再根据前面的规则进行除法运算
 * 9. 如果有一个操作符不是数值类型，则先调用Number()进行转换，再根据前面的规则进行除法运算
 */
console.log(3 / 2)

// 5. Modulus - finding remainder 取模
/**
 * Modulus Rule
 * 1. 操作数都是数值，执行常规的除法计算，返回除的余数
 * 2. 任何数 % undefined = NaN
 * 3. 任何数 % NaN = NaN
 * 4. Infinity % 任何数 = NaN
 * 5. 有限大的数 % 0 = NaN
 * 6. 有限大的数 % Infinity = 有限大的数
 * 7. 0 % 除null、undefined、NaN任何数 = 0
 * 8. 如果有一个操作数是对象，则先对对象进行隐式转换，再根据前面的规则进行取余运算
 * 9. 如果有一个操作符不是数值类型，则先调用Number()进行转换，再根据前面的规则进行取余运算
 */
console.log(3 % 2)

// 6. Exponentiation 3 ** 2 == 3 * 3 幂
console.log(3 ** 2)

// Self-increasing 增量运算符
/**
 * Self-increasing Rule
 * 1. 应用于非数字类型的时候，先将其转换为数字，再执行++的操作
 * 2. 应用于浮点数，执行加1的操作
 * 3. 应用于对象，先对对象进行隐式转换，再根据前面的规则进行++运算
 */

// self-decreasing 减量运算符
/**
 * self-decreasing Rule
 * 1. 应用于非数字类型的时候，先将其转换为数字，再执行--的操作
 * 2. 应用于浮点数，执行减1的操作
 * 3. 应用于对象，先对对象进行隐式转换，再根据前面的规则进行--运算
 *
 */
let x = 3
console.log(++x) // 4
console.log(--x) // 3
console.log(x++) // 3
console.log(x--) // 4
console.log(x) // 3

// 赋值运算符
// 1. =
x = y

// 2. +=
x += y

// 3. -=
x -= y

// 4. *=
x *= y

// 5. /=
x /= y

// 6. %=
x %= y

// 7. **=
x **= y

// 比较运算符
// 1. ==
// 2. ===
// 3. !=
// 4. !==
// 5. >
// 6. <
// 7. >=
// 8. <=

// Example:
console.log(3 > 2) // true, because 3 is greater than 2
console.log(3 >= 2) // true, because 3 is greater than 2
console.log(3 < 2) // false,  because 3 is greater than 2
console.log(2 < 3) // true, because 2 is less than 3
console.log(2 <= 3) // true, because 2 is less than 3
console.log(3 == 2) // false, because 3 is not equal to 2
console.log(3 != 2) // true, because 3 is not equal to 2
console.log(3 == '3') // true, compare only value
console.log(3 === '3') // false, compare both value and data type
console.log(3 !== '3') // true, compare both value and data type
console.log(3 != 3) // false, compare only value
console.log(3 !== 3) // false, compare both value and data type
console.log(0 == false) // true, equivalent
console.log(0 === false) // false, not exactly the same
console.log(0 == '') // true, equivalent
console.log(0 == ' ') // true, equivalent
console.log(0 === '') // false, not exactly the same
console.log(1 == true) // true, equivalent
console.log(1 === true) // false, not exactly the same
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(NaN == NaN) // false, not equal
console.log(NaN === NaN) // false
console.log(typeof NaN) // number

console.log('mango'.length == 'avocado'.length) // false
console.log('mango'.length != 'avocado'.length) // true
console.log('mango'.length < 'avocado'.length) // true
console.log('milk'.length == 'meat'.length) // true
console.log('milk'.length != 'meat'.length) // false
console.log('tomato'.length == 'potato'.length) // true
console.log('python'.length > 'dragon'.length) // false

// 逻辑运算符
// 1. && 与
// 2. || 或
// 3. ! 非

// Example:
// && ampersand operator example

// const check = 4 > 3 && 10 > 5 // true && true -> true
// const check = 4 > 3 && 10 < 5 // true && false -> false
// const check = 4 < 3 && 10 < 5 // false && false -> false

// || pipe or operator, example

// const check = 4 > 3 || 10 > 5 // true  || true -> true
// const check = 4 > 3 || 10 < 5 // true  || false -> true
// const check = 4 < 3 || 10 < 5 // false || false -> false

//! Negation examples

// let check = 4 > 3 // true
// let check = !(4 > 3) //  false
// let isLightOn = true
// let isLightOff = !isLightOn // false
// let isMarried = !false // true

// 三元表达式
// Example 1:
let isRaining = true
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')

isRaining = false
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')

// Example 2:
let number = 5
number > 0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a negative number`)

number = -5
number > 0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a negative number`)
