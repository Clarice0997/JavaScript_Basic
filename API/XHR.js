// xhr syntax
// first step: creates a new XHR object
const xhr = new XMLHttpRequest()

// second step: use onreadystatechange function to listens for changes in the state of an XHR object
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.getAllResponseHeaders()) // 获取所有HTTP响应头的字符串
    console.log(this.responseText)
  }
}

// third step: opens a new HTTP
xhr.open('GET', '<https://example.com/data.json>', true)

// tip: you can set RequestHeader before sending to the server
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.setRequestHeader('Authorization', 'Bearer token')

// fourth step: send the HTTP request to the server
xhr.send()

// Example 1: 从服务器获取商品信息
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const products = JSON.parse(this.responseText)
    displayProducts(products)
  }
}

xhr.open('GET', '<https://example.com/products>', true)
xhr.send()

function displayProducts(products) {
  // 根据商品信息更新网站页面
}

// Example 2: 一个在线论坛，需要从服务器异步请求帖子和评论
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const posts = JSON.parse(this.responseText)
    displayPosts(posts)
  }
}

xhr.open('GET', '<https://example.com/posts>', true)
xhr.send()

function displayPosts(posts) {
  for (let post of posts) {
    const postDiv = document.createElement('div')
    postDiv.classList.add('post')
    const title = document.createElement('h2')
    title.textContent = post.title
    postDiv.appendChild(title)
    const body = document.createElement('p')
    body.textContent = post.body
    postDiv.appendChild(body)
    const comments = document.createElement('div')
    comments.classList.add('comments')
    for (let comment of post.comments) {
      const commentDiv = document.createElement('div')
      commentDiv.classList.add('comment')
      const author = document.createElement('p')
      author.textContent = comment.author
      commentDiv.appendChild(author)
      const commentBody = document.createElement('p')
      commentBody.textContent = comment.body
      commentDiv.appendChild(commentBody)
      comments.appendChild(commentDiv)
    }
    postDiv.appendChild(comments)
    document.body.appendChild(postDiv)
  }
}
