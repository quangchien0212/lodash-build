export default function throttle(fn, time) {
  let isWaiting = false
  return function(...args) {
    if (isWaiting) return
    isWaiting = true
    setTimeout(() => {
      isWaiting = false
    }, time)
    return fn(...args)
  }
}