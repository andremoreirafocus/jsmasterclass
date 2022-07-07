const _new = function (fn, ...properties) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  fn.apply(obj, properties);
  return obj;
}
const Person = function (name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
}

Person.prototype.getAge = function () {
  return (new Date()).getFullYear() - this.year;
}

const person1 = _new (Person,
  "André Moreira", 
  "Rio de Janeiro",
  1968);

const person2 = _new (Person,
  "Leandro Moreira",
  "Guarapuava",
  1998);

console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());
console.log(person1.__proto__ === person2.__proto__);