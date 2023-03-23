// 在 JavaScript 中，每个对象都有一个原型对象，它是一个指向另一个对象的引用。
// 一个对象的原型对象可以通过 `__proto__` 属性来访问，也可以通过 `Object.getPrototypeOf()` 函数来访问。
// 如果一个对象本身没有某个属性或方法，JavaScript 就会沿着原型链向上查找，直到找到该属性或方法或者到达原型链的顶端（即 null）。

// 以上是一个用字面量创建的对象 该对象继承了 Object() 原型 继承了它所有的属性和方法
const obj = {}
console.log(Object.getPrototypeOf(obj))

// Object.create() 方法是一个更灵活的方法，它允许您指定一个原型对象，并在创建对象时为该对象设置属性和值
const person = {
  name: '',
  age: 0,
  occupation: ''
}

const obj = Object.create(person, {
  name: { value: 'Alice' },
  age: { value: 25 },
  occupation: { value: 'Engineer' }
})

Object.getPrototypeOf(obj) // {name: '', age: 0, occupation: ''}
// 这个例子中，我们首先定义了一个名为person的对象，它具有默认的名称、年龄和职业属性。然后，我们使用Object.create方法使用person对象作为原型，创建了一个新对象obj，并在创建对象时设置了name、age和occupation属性的值
// 使用 Object.create() 方法创建的对象可以更具灵活性，因为它可以继承其他对象的属性和方法，并且可以使用原型链来访问和修改对象的属性

// Example 1:
const obj = {
  __proto__: {
    __proto__: {
      haha: 'gogo'
    }
  }
}
console.log(obj.haha) // "gogo"
// 这段代码由于 obj 本身没有 haha 这个属性，所以它会去自己的 __proto__ 中查找，如果还没有找到，那就会向它的 __proto__.__proto__ 中去找，直到找到 haha 属性或者 __proto__ 链返回 null 为止

// Example 2:
let 爷爷 = {
  haha: 'gogo'
}
let 爸爸 = {
  __proto__: 爷爷
}
let obj = {
  __proto__: 爸爸
}
console.log(obj.haha) // "gogo"
// 这段代码查找 haha 属性的过程是： obj -> 爸爸 -> 爷爷

// Example 3:
const parent = {
  name: 'Parent',
  sayHello: function () {
    console.log('Hello from ' + this.name)
  }
}

const child = Object.create(parent)
child.name = 'Child'
child.sayHello() // 输出 "Hello from Child"
// 上述代码创建了一个名为parent的对象，它有一个name属性和一个sayHello()方法。然后，我们使用Object.create()方法创建了一个名为child的新对象，它继承自parent对象。最后，我们重写了child对象的name属性，并调用了sayHello()方法。由于child对象继承了parent对象的sayHello()方法，因此它可以调用该方法
