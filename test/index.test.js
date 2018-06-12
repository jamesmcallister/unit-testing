const {
  add,
  longestString,
  Leet,
  uniqueStrings,
  Developer
} = require("../src/index.js");

test("Addition", function() {
  const expected = 5;
  const result = add(2, 3);
  expect(result).toBe(expected);
});

test("longestString", () => {
  const strings = ["a", "adfdsfaf", "asd"];
  expect(longestString(strings)).toBe("adfdsfaf");
});

test("1337", function() {
  expect(Leet("lollie")).toBe("101113");
  expect(Leet("alex")).toBe("413x");
});

test("l337", function() {
  const expected = "413x";
  const result = Leet("alex");
  expect(result).toBe(expected);
});

test("uniqueStrings", function() {
  const strings = ["beep", "clang", "keplunk", "clang", "beep", "moo"];
  expect(uniqueStrings(strings)).toEqual(["beep", "clang", "keplunk", "moo"]);
});

test("devloper", function() {
  const devEdem = new Developer("Edem", ["js", "html", "css"]);
  devEdem.learnLanguage("java");
  devEdem.learnLanguage("java");
  expect(devEdem.languages).toEqual(["js", "html", "css", "java"]);
});
