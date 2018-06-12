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

function Leet(string) {
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
  const that = this;
  Object.keys(plants).forEach(function(item) {
    if (that.plants[item] > 1) {
      that.plants[item] -= plants[item];
    }
    if (that.plants[item] < 1) {
      delete that.plants[item];
    }
  });
  return this.plants;
};
const stringsConcat = arr =>
  arr.filter(item => typeof item === "string").join("");

module.exports = {
  add,
  longestString,
  Leet,
  uniqueStrings,
  Developer,
  Garden,
  stringsConcat
};
