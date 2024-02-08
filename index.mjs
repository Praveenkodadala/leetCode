function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
console.log(speak()); // global object (in non–strict mode)

const eat = Animal.eat;
console.log(eat()); // global object (in non-strict mode)
