// Object 对象
// 方法
/**
 * 1. Object.assign() To copy an object without modifying the original object
 * Object.assign(目标对象， 源对象) 返回值：目标对象
 * 用于将所有可枚举属性的值从一个或多个源对象分配到目标对象
 */
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

/**
 * 2. Object.create(proto) 返回一个新对象
 * 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
 */
let oldProto = Array.prototype
let newObj = Object.create(oldProto)
console.log(newObj.__proto__ === oldProto) // true
console.log(newObj === oldProto) // false

/**
 * 3. Object.freeze(obj) 返回值：被冻结的对象(数组亦可)
 * 冻结一个对象，冻结后将不能修改
 */
let obj = { a: 1 }
obj = Object.freeze(obj)
obj.a = 2
console.log(obj.a) // 1

/**
 * 4. Object.entries(obj) 返回一个数组
 * 其元素是与直接在 `object` 上找到的可枚举属性键值对相对应的数组
 */
let obj = { a: 1, b: 2 }
obj = Object.entries(obj) // [ ['a', 1], ['b', 2] ]

/**
 * 5. Object.fromEntries() （*谷歌73以上版本才支持*）
 * 与Object.entries()相反 把数组变成对象
 */
let arr = [
  ['a', 1],
  ['b', 2]
]
let obj = Object.fromEntries(arr) // { a: 1, b: 2 }

/**
 * 6. Object.is() 返回值：Boolean
 * 判断两个值是否为同一个值，地址不同则不相同
 */
let obj = { a: 1 }
let obj1 = { a: 1 }
Object.is(obj, obj1) // false 地址不同

/**
 * 7. Object.isExtensible() 返回值：Boolean
 * 判断一个对象是否可扩展
 */
let obj = { a: 1 }
Object.isExtensible(obj) // true
obj = Object.freeze(obj)
Object.isExtensible(obj) // false

/**
 * 8. Object.isFrozen() 返回值：Boolean
 * 判断一个对象是否被冻结
 */
let obj = { a: 1 }
console.log(Object.isFrozen(obj)) // false
Object.freeze(obj)
console.log(Object.isFrozen(obj)) // true

/**
 * 9. Object.seal() 返回值：被封闭的对象(数组亦可)
 * 封闭一个对象
 */
let obj = { a: 1 }
console.log(Object.seal(obj)) // false

/**
 * 10. Object.isSealed() 返回值：Boolean
 * 判断一个对象是否被密封
 */
let obj = { a: 1 }
console.log(Object.isSealed(obj)) // false
Object.seal(obj)
console.log(Object.isSealed(obj)) // true
console.log(Object.isFrozen(obj)) // false

/**
 * 11. Object.keys() 返回值：key组成的数组
 */
let obj = { a: 1, b: 2 }
Object.keys(obj) // [a, b]

/**
 * 12. Object.values() 返回值：value组成的数组
 */
let obj = { a: 1, b: 2 }
Object.values(obj) // [1, 2]

// 原型方法
/**
 * 1. hasOwnProperty() To check if a specific key or property exist in an object
 */
let obj = { a: 1, b: 2 }
console.log(obj.hasOwnProperty('a')) // true
console.log(obj.hasOwnProperty('c')) // false

/**
 * 2. constructor 返回创建实例对象的 Object 构造函数的引用
 */
let obj = {}
obj.constructor === Object // true
obj.__proto__.constructor === Object // true
Object.prototype.constructor === Object // true

/**
 * 3. isPrototypeOf() 测试一个对象是否存在于另一个对象的原型链上
 */
let obj = {}
Object.prototype.isPrototypeOf(obj) // true

/**
 * 4. toString()
 */
let obj = {}
obj.toString() // "[object, object]"

/**
 * 5. valueOf()
 * 调用 valueOf 方法将对象转换为原始值
 */
let obj = { a: 1 }
console.log(obj.valueOf()) // { a: 1 }
