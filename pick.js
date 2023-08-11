export default function pick(obj, ...keys) {
  keys = keys.flat()
  const result = {}
  if (typeof obj === 'object') {
    for (const key of keys) {
      result[key] = obj[key]
    }
  }

  return result
}