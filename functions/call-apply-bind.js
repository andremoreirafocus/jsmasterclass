const calculateArea = function(fn) {
  return fn(Math.PI * Math.pow(this.radius, 2));
}

const circle = {
  radius: 10,
}

const circle2 = {
  radius: 1
}

console.log(calculateArea.call(circle, Math.round));
console.log(calculateArea.apply(circle, [Math.ceil]));

const calculateAreaForCircle = calculateArea.bind(circle);
console.log(calculateAreaForCircle(Math.round))
console.log(calculateAreaForCircle(Math.ceil))