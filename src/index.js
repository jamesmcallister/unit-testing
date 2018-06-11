function add(a, b) {
  return a + b;
}

function longestString(strings) {
  const result = strings.sort(function(a, b) {
    return a.length - b.length;
  });
  return result[result.length - 1];
}

module.exports = {
  add,
  longestString
};
