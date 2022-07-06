const sum = function (a = 1,b = 2) {
  return a + b;
}

const subtract = function (a,b) {
  return a - b;
}

const calculate = function(fn) {
  return function(a,b) {
    return fn(a,b)
  }
}

const calculate2 = function(fn, a, b) {
  return function(a,b) {
    return fn(a,b)
  }
}

const sumarg = function () {
  console.log(arguments)
  let total = 0;
  for (let argument in arguments) {
    console.log(arguments[argument]);
    total += arguments[argument]
  }
  return total;
}

const sumrest = function (...numbers) {
  console.log(numbers)
  let total = 0;
  for (let number of numbers) {
    console.log(number);
    total += number
  }
  return total;
}

const calculateArea = function() {
  return this.x * this.y;
}

const rectangle = {
  x: 4,
  y: 5,
  //calculateArea // taken from above
  // or
  calculateArea() {
    return this.x * this.y;
  }
}

console.log("Area: ",rectangle.calculateArea());

console.log(sum(2,2))
console.log(sum(3))
console.log(sum())
console.log(subtract(2,2))
console.log(calculate(sum)(2,2))
console.log(sumarg(1,2,3,4,5,6,7,8,9));
console.log(sumrest(1,2,3,4,5,6,7,8,9));