// Proxy
// 一种用于定义基本操作行为的中介。 其可以在目标对象和外部世界之间进行拦截

// Proxy Syntax
const p = new Proxy(target, handler)

// Example 1: 代理对象属性
// 使用 Proxy 对象来代理目标对象的属性访问，从而实现属性的拦截和修改
target = {
  name: '张三',
  age: 25
}

proxy = new Proxy(target, {
  get: function (target, property) {
    if (property === 'age') {
      return target[property] + '岁'
    } else {
      return target[property]
    }
  }
})

console.log(proxy.name) // "张三"
console.log(proxy.age) // "25岁"

// Example 2: 代理函数调用
target = function (message) {
  console.log(message)
}

proxy = new Proxy(target, {
  apply: function (target, thisArg, argumentsList) {
    console.log('函数调用前')
    target.apply(thisArg, argumentsList)
    console.log('函数调用后')
  }
})

proxy('Hello, World!')

// Example 3: 数据绑定
// 使用了 Proxy 对象实现数据的双向绑定
data = {
  message: 'Hello, World!'
}

proxy = new Proxy(data, {
  set(target, key, value) {
    target[key] = value
    console.log(`属性 ${key} 的值被修改为 ${value}`)
    return true
  }
})

proxy.message = 'Hello, Vue.js!'

// Example 4: 数据验证
// 通过代理对象属性来验证表单数据的正确性
data = {
  name: '',
  age: 0
}

proxy = new Proxy(data, {
  set(target, key, value) {
    if (key === 'name' && !value) {
      console.log('姓名不能为空！')
      return false
    }

    if (key === 'age' && value < 18) {
      console.log('未满 18 岁，不允许注册！')
      return false
    }

    target[key] = value
    return true
  }
})

proxy.name = ''
proxy.age = 16

// Example 5: 缓存（Cache）
cache = new Map()
target = {
  getData(id) {
    console.log('从服务器获取数据...')
    return `data ${id}`
  }
}

proxy = new Proxy(target, {
  get(target, key) {
    if (cache.has(key)) {
      console.log('从缓存获取数据...')
      return cache.get(key)
    }

    let data = target.getData(key)
    cache.set(key, data)
    return data
  }
})

console.log(proxy.getData(1))
console.log(proxy.getData(2))
console.log(proxy.getData(1))
