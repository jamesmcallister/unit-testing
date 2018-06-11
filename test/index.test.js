const { add, longestString } = require("../src/index.js");

test("Addition", function() {
  const expected = 5;
  const result = add(2, 3);
  expect(result).toBe(expected);
});

test("longestString", () => {
  const strings = ["a", "adfdsfaf", "asd"];
  expect(longestString(strings)).toBe("adfdsfaf");
});
