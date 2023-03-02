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

// 7. Self-increasing
/**
 * Self-increasing Rule
 * 1. 应用于非数字类型的时候，先将其转换为数字，再执行++的操作
 * 2. 应用于浮点数，执行加1的操作
 * 3. 应用于对象，先对对象进行隐式转换，再根据前面的规则进行++运算
 */

// 8. self-decreasing
/**
 * self-decreasing Rule
 * 1. 应用于非数字类型的时候，先将其转换为数字，再执行--的操作
 * 2. 应用于浮点数，执行减1的操作
 * 3. 应用于对象，先对对象进行隐式转换，再根据前面的规则进行--运算
 */
let x = 3
console.log(++x) // 4
console.log(--x) // 3
console.log(x++) // 3
console.log(x--) // 4
console.log(x) // 3
