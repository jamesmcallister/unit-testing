const {
  add,
  longestString,
  Leet,
  camelise,
  uniqueStrings,
  Developer,
  Garden,
  stringsConcat,
  megativeOnly
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

test("garden", function() {
  const plants = {
    rose: 1,
    daisy: 1
  };
  const edemsGarden = new Garden(plants);
  expect(edemsGarden.plants).toEqual({
    rose: 1,
    daisy: 1
  });
});

test("add plants to garden", function() {
  const plants = {
    rose: 3,
    daisy: 1
  };
  const jamesGarden = new Garden(plants);

  const plantToAdd = {
    devilsChilli: 666,
    sinflower: 67,
    rose: 1
  };

  jamesGarden.addPlants(plantToAdd);
  expect(jamesGarden.plants).toEqual({
    daisy: 1,
    devilsChilli: 666,
    rose: 4,
    sinflower: 67
  });
});

test("lets harvest our garden", function() {
  const plants = {
    trevor: 4,
    steve: 1000,
    maggies: 200
  };
  const roofGarden = new Garden(plants);
  const plantsToHarvest = {
    steve: 999,
    maggies: 198
  };
  roofGarden.harvest(plantsToHarvest);
  expect(roofGarden.plants).toEqual({
    trevor: 4,
    steve: 1,
    maggies: 2
  });
});

test("stringsConcat", function() {
  const mixedArray = ["three", "we", 3, 34];
  // expect("threewe").toBe(stringsConcat(mixedArray));
  expect(stringsConcat(mixedArray)).toBe("threewe");
});

test("negativeOnly", () => {
  expect(megativeOnly([-1, -2, -41, 3, 24, 7])).toEqual([3, 24, 7]);
});

test("camelise", () => {
  const stringToTest = "James and edem";
  expect(camelise(stringToTest)).toBe("jamesAndEdem");
});

function merging(arr) {
  const orderedArray = arr.sort(
    (a, b) => Object.keys(a).length < Object.keys(b).length
  );

  const result = Object.assign({}, ...orderedArray);

  return result;
}

test("merge", () => {
  const arraysToMerge = [{ a: 5 }, { a: 3, b: 21, c: 32 }];
  expect(merging(arraysToMerge)).toEqual({ a: 5, b: 21, c: 32 });
  const arraysToMerge1 = [{ a: 3, b: 21, c: 32 }, { a: 5 }];
  expect(merging(arraysToMerge1)).toEqual({ a: 5, b: 21, c: 32 });
});
