function add(a, b) {
  return a + b;
}

function longestString(strings) {
  const result = strings.sort((a, b) => a.length - b.length);
  return result[result.length - 1];
}
const formula = {
  i: 1,
  l: 1,
  z: 2,
  e: 3,
  a: 4,
  s: 5,
  g: 6,
  t: 7,
  y: 7,
  b: 8,
  q: 9,
  o: 0
};

function l337(string) {
  const result = [...string].map(
    item => (typeof formula[item] === "number" ? formula[item] : item)
  );
  return result.join("");
}

function uniqueStrings(arrayOfStrings) {
  const result = arrayOfStrings.reduce((acc, item) => {
    return { ...acc, [item]: 1 };
  }, {});
  return Object.keys(result);
}

function Developer(name, languages) {
  this.name = name;
  this.languages = languages;
}
Developer.prototype.learnLanguage = function(string) {
  return (this.languages = uniqueStrings([...this.languages, string]));
};

function Garden(gardenPlants) {
  this.plants = gardenPlants;
}

Garden.prototype.addPlants = function(plants) {
  Object.keys(plants).forEach(item => {
    typeof this.plants[item] === "undefined"
      ? (this.plants[item] = plants[item])
      : (this.plants[item] += plants[item]);
  });
  return this.plants;
};

Garden.prototype.harvest = function(plants) {
  const self = this;
  Object.keys(plants).forEach(function(item) {
    if (self.plants[item] > 1) {
      self.plants[item] -= plants[item];
    }
    if (self.plants[item] < 1) {
      delete self.plants[item];
    }
  });
  return this.plants;
};
const stringsConcat = arr =>
  arr.filter(item => typeof item === "string").join("");

function megativeOnly(numbers) {
  return numbers.filter(number => number > 0);
}

function camelise(string) {
  const firstWord = string.toLowerCase().split(" ")[0];
  const notFirstWords = string
    .toLowerCase()
    .split(" ")
    .slice(1)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return [firstWord, ...notFirstWords].join("");
}

module.exports = {
  add,
  camelise,
  longestString,
  l337,
  uniqueStrings,
  Developer,
  Garden,
  stringsConcat,
  megativeOnly
};
