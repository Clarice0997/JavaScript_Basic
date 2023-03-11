// 字符串拼接
// 1. 加法字符串连接
// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250

let fullName = firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5 string addition

console.log(personInfoOne)

// 2. 长文字串
const paragraph =
  'My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.'

console.log(paragraph)

// 3. 模板字符串
// example 1:
console.log(`The sum of 2 and 3 is 5`) // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

// example 2:
let c = 2
let d = 3
console.log(`${c} is greater than ${d}: ${c > d}`) // 2 is greater than 3: false

// 字符串方法
// 1. .length 字符串长度
let js = 'JavaScript'
console.log(js.length) // 10

// 2. 索引[x] 访问字符串中的字符
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter) // J

let secondLetter = string[1] // a
let thirdLetter = string[2] // v
let lastLetter = string[9] // t

console.log(lastLetter) // t

let lastIndex = string.length - 1 // 索引比字符串长度小1

console.log(lastIndex) // 9
console.log(string[lastIndex]) // t

// 3. toUpperCase() 转大写
console.log('JavaScript'.toUpperCase()) // JAVASCRIPT

// 4. toLowerCase() 转小写
console.log('JAVASCRIPT'.toLowerCase()) // javascript

// 5. substr() 提取字符串 (不推荐)
// 起始索引和要切片的字符数
console.log('JavaScript'.substr(4, 6)) // Script

// 6. substring() 提取字符串 (不推荐)
// 起始索引和停止索引，但它 <不包括> 停止索引处的字符
console.log('JavaScript'.substring(4, 6)) // Sc

// 7. split() 在指定位置拆分字符串
function strSplit() {
  let string = '30 Days Of JavaScript'

  console.log(string.split()) // Changes to an array -> ["30 Days Of JavaScript"]
  console.log(string.split(' ')) // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

  let firstName = 'Asabeneh'

  console.log(firstName.split()) // Change to an array - > ["Asabeneh"]
  console.log(firstName.split('')) // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

  let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

  console.log(countries.split(',')) // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
  console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
}

// 8. trim() 删除字符串开头或结尾的尾随空格
function strTrim() {
  let string = '   30 Days Of JavaScript   '

  console.log(string)
  console.log(string.trim(' '))

  let firstName = ' Asabeneh '

  console.log(firstName)
  console.log(firstName.trim()) // still removes spaces at the beginning and the end of the string
  /**
    30 Days Of JavasCript   
  30 Days Of JavasCript
    Asabeneh 
  Asabeneh
   */
}

// 9. includes() 检查是否存在子字符串
function strIncludes() {
  let string = '30 Days Of JavaScript'

  console.log(string.includes('Days')) // true
  console.log(string.includes('days')) // false - it is case sensitive! 大小写区分
  console.log(string.includes('Script')) // true
  console.log(string.includes('script')) // false
  console.log(string.includes('java')) // false
  console.log(string.includes('Java')) // true
}

// 10. replace() repalceAll() 替换子字符串
function strReplace() {
  let string = '30 Days Of JavaScript'
  console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

  let country = 'Finland'
  console.log(country.replace('Fin', 'Noman')) // Nomanland

  let str = 'Visit Microsoft! Visit Microsoft!'
  // console.log(str.replaceAll('Microsoft', 'Runoob')) // IE not support
  console.log(str.replace(/Microsoft/g, 'Runoob'))
}

// 11. charAt() 采用索引并返回该索引处的值
function strCharAt() {
  let string = '30 Days Of JavaScript'
  console.log(string.charAt(0)) // 3

  let lastIndex = string.length - 1
  console.log(string.charAt(lastIndex)) // t
}

// 12. charCodeAt() 采用索引并返回该索引处值的字符代码（ASCII 数字）
function strCharCodeAt() {
  let string = '30 Days Of JavaScript'
  console.log(string.charCodeAt(3)) // D ASCII number is 68

  let lastIndex = string.length - 1
  console.log(string.charCodeAt(lastIndex)) // t ASCII is 116
}

// 13. String.fromCharCode() 将ASCII码转为对应字母
function strFromCharCode() {
  let num = 65
  console.log(String.fromCharCode(num)) // 'A'
}

// 14. indexOf() 获取一个子字符串，如果该子字符串存在于字符串中，则返回该子字符串的第一个位置，如果不存在，则返回 -1
function strIndexOf() {
  let string = '30 Days Of JavaScript'

  console.log(string.indexOf('D')) // 3
  console.log(string.indexOf('Days')) // 3
  console.log(string.indexOf('days')) // -1
  console.log(string.indexOf('a')) // 4
  console.log(string.indexOf('JavaScript')) // 11
  console.log(string.indexOf('Script')) // 15
  console.log(string.indexOf('script')) // -1
}

// 15. lastIndexOf() 获取一个子字符串，如果子字符串存在于字符串中，则返回子字符串的最后位置，如果不存在，则返回 -1
function strLastIndexOf() {
  let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

  console.log(string.lastIndexOf('love')) // 67
  console.log(string.lastIndexOf('you')) // 63
  console.log(string.lastIndexOf('JavaScript')) // 38
}

// 16. concat() 拼接字符串
function strConcat() {
  let string = '30 '
  console.log(string.concat('Days ', 'Of ', 'JavaScript')) // 30DaysOfJavaScript

  let country = 'Fin'
  console.log(country.concat('land')) // Finland
}

// 17. startsWith() endsWith()
// 接受一个子字符串作为参数，并检查字符串是否以指定的子字符串开头 || 结尾
function strStartWithEndWith() {
  let string = 'Love is the best to in this world'

  console.log(string.startsWith('Love')) // true
  console.log(string.startsWith('love')) // false
  console.log(string.startsWith('world')) // false

  let country = 'Finland'

  console.log(country.endsWith('land')) // true
  console.log(country.endsWith('fin')) // false
  console.log(country.endsWith('Fin')) //  false
}

// 18. search()
// 接受一个子字符串作为参数，并返回第一个匹配项的索引。搜索值可以是字符串或正则表达式模式
function strSearch() {
  let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

  console.log(string.search('love')) // 2
  console.log(string.search(/javascript/gi)) // 7 gi (全文查找，忽略大小写)
  console.log(string.search('zoo')) // -1
}

// 19. match()
// 以子字符串或正则表达式模式作为参数，如果匹配则返回一个数组，否则返回 null
function strMatch() {
  let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
  console.log(string.match('love'))

  let pattern = /love/gi
  console.log(string.match(pattern)) // ["love", "love", "love"]

  // 正则提取数字
  let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
  let regEx = /\d+/

  // d with escape character means d not a normal d instead acts a digit
  // + means one or more digit numbers,
  // if there is g after that it means global, search everywhere.

  console.log(txt.match(regEx)) // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
  console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
}

// 20. repeat() 接受一个数字作为参数，并返回字符串的重复版本
function strRepeat() {
  let string = 'love'
  console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
}

// 21. slice() 提取字符串的某个部分，并以新的字符串返回被提取的部分
// 使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分
function strSlice() {
  let str = 'Hello world!'
  console.log(str.slice(3, 8))
}

// WARNING: substring && substr && slice && splice difference
// Check here: https://www.cnblogs.com/echolun/p/7646025.html

// 22. valueOf() String 对象的原始值
function strValueOf() {
  console.log(typeof 'abc') // string
  console.log(typeof new String('abc')) // object
  console.log(typeof new String('abc').valueOf()) // string
  // Example: 要判断变量存在，而且是一个字符串
  let unknownVariable = new String('string')
  if (typeof unknownVariable != 'undefined' && typeof unknownVariable.valueOf() == 'string') {
    console.log('a string object')
  }
}

// 23. toString() 将数据转为字符串来输出
function strToString() {
  console.log('abc'.toString()) // abc
  console.log(true.toString()) // true
  console.log([1, 2, 3].toString()) // 1,2,3
  console.log({ name: 'Clarice' }.toString()) // [object Object]
}

// 24. padStart()
// 25. padEnd()
// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

// padStart()和padStart()一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串

// 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'

// 如果省略第二个参数，默认使用空格补全长度
'x'.padStart(4) // ' x'
'x'.padEnd(4) // 'x '

// padStart()的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"

// 提示字符串格式
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
