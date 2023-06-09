// call()
// 使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
// syntax: function.call(thisArg, arg1, arg2, ...)

// Example 1:
// 使用 call 方法调用父构造函数
function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.call(this, name, price)
  this.category = 'food'
}

function Toy(name, price) {
  Product.call(this, name, price)
  this.category = 'toy'
}

var cheese = new Food('feta', 5)
var fun = new Toy('robot', 40)

// Example 2:
// 使用 call 方法调用匿名函数
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
]

for (var i = 0; i < animals.length; i++) {
  ;(function (i) {
    this.print = function () {
      console.log('#' + i + ' ' + this.species + ': ' + this.name)
    }
    this.print()
  }).call(animals[i], i)
}
