
const personPrototype = {
  get age() {
    return (new Date()).getFullYear() - this.year
  }
}

const createPerson = function (name, city, year) {
  const person = {
    name,
    city,
    year,
  }
  Object.setPrototypeOf(person, personPrototype)
  return person;
}

const person1 = createPerson(
  "André Moreira", 
  "Rio de Janeiro",
  1968);

const person2 = createPerson(
  "Leandro Moreira",
  "Guarapuava",
  1998);

console.log(person1);
console.log(person1.__proto__);
console.log(person1.age);
console.log(person2);
console.log(person2.age);
console.log(person1.__proto__ === person2.__proto__);