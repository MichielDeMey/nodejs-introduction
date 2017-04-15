module.exports = (input) => {
  const normalized = input.toLowerCase()
  return reverse(normalized) === normalized
}

function reverse (string) {
  return string.split('').reverse().join('')
}
