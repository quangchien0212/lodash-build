function debounce(fn, wait, options) {
  const { maxWait } = options || {}
  let timer;
  let maxTimer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      clearTimeout(maxTimer)
      maxTimer = null
      return fn(...args)
    }, wait);

    if (maxWait && !maxTimer) {
      maxTimer = setTimeout(() => {
        clearTimeout(maxTimer);
        maxTimer = null
        return fn(...args)
      }, maxWait)
    }
  };
}

export default debounce;