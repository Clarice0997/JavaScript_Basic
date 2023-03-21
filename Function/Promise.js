// Promise syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})

// Promise resolve Example
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))

// Promise reject Example
doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.includes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))

// Array full of Promise
const arr = []

// Function return Promise
for (let index = 0; index < 5; index++) {
  arr.push(
    (() => {
      return new Promise((resolve, reject) => {
        resolve(index)
      })
    })()
  )
}

// Promise
for (let index = 0; index < 5; index++) {
  arr.push(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(index)
      }, index * 500)
    })
  )
}

while (arr.length > 0) {
  arr.shift().then(res => {
    console.log(res)
  })
}
