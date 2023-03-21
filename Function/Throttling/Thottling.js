// throttled syntax Example
const throttled = (callback, delay = 100) => {
  let throttled = false
  return (...args) => {
    if (!throttled) {
      throttled = true
      setTimeout(() => {
        callback(...args)
        throttled = false
      }, delay)
    }
  }
}
