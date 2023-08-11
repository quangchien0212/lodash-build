export default function get(obj, path, defaultValue) {
  if (typeof obj !== 'object') return defaultValue;

  const parts = path.split(/[\]\[\.]/).filter((x) => x)
  let attempt = obj

  for (let path of parts) {
    if (attempt[path] == null || attempt[path] === undefined){
      return defaultValue
    }
    attempt = attempt[path]
  }

  return attempt
}