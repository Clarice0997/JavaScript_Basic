// Date 对象
// 1. new Date() 创建 Date 对象
const now = new Date()
console.log(now) // 2023-03-03T03:58:10.669Z

// 2. getFullYear() 获取年份
console.log(now.getFullYear()) // 2020

// 3. getMonth() 获取月份 (0-11)
// tip: 索引从0开始，一月
console.log(now.getMonth())

// 4. getDate() 获取日期 (1-31)
console.log(now.getDate())

// 5. getDay() 获取星期 (0-6)
// tip: 索引从0开始，星期天
console.log(now.getDay()) // Sunday is 0, Monday is 1 and Saturday is 6

// 6. getHours() 获取小时数
console.log(now.getHours())

// 7. getMinutes() 获取分钟
console.log(now.getMinutes())

// 8. getSeconds() 获取秒数
console.log(now.getSeconds())

// 9. getTime() 获取时间戳
console.log(now.getTime())

// 10. now() 获取时间戳
console.log(Date.now())
// tip: now() 比 getTime() 快一倍

// 11. getMilliseconds() 获取毫秒 (0 ~ 999)
console.log(now.getMilliseconds())

// 12. Date.parse() 返回1970年1月1日午夜到指定日期（字符串）的毫秒数
console.log(Date.parse('March 21, 2012'))

// 13. set 同 get
console.log(now.setDate(15))
console.log(now.setFullYear(2020))
console.log(now.setHours(15))
console.log(now.setMilliseconds(192))
console.log(now.setMinutes(17))
console.log(now.setMonth(4))
console.log(now.setSeconds(35))
console.log(now.setTime(1332403882588))

// 14. toJSON() toString() toTimeString() toDateString()
console.log(now.toJSON()) // ISO-8601 标准: YYYY-MM-DDTHH:mm:ss.sssZ
console.log(now.toString())
console.log(now.toTimeString())
console.log(now.toDateString())

// Example: Readable Time Format
function formatTime() {
  const now = new Date()
  const year = now.getFullYear() // return year
  const month = now.getMonth() + 1 // return month(0 - 11)s
  const date = now.getDate() // return date (1 - 31)
  const hours = now.getHours() // return number (0 - 23)
  const minutes = now.getMinutes() // return number (0 -59)

  console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
}

// Example: prototype format time
Date.prototype.formatTime = () => {
  const now = new Date()
  const year = now.getFullYear() // return year
  const month = now.getMonth() + 1 // return month(0 - 11)s
  const date = now.getDate() // return date (1 - 31)
  const hours = now.getHours() // return number (0 - 23)
  const minutes = now.getMinutes() // return number (0 -59)

  console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
  return `${date}/${month}/${year} ${hours}:${minutes}`
}

console.log(new Date().formatTime())
