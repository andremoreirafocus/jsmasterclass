const person1 = {
  name: "André Moreira",
  city: "Rio de Janeiro",
  year: 1968,
  get age() {
    return (new Date().getFullYear() - this.year)
  }
}

const person2 = {
  name: "Leandro Moreira",
  city: "Guarapuava",
  year: 1998,
  get age() {
    return (new Date().getFullYear() - this.year)
  }
}

console.log(person1.age);
console.log(person2.age);

// using factory method
const createPerson = function (name, city, year) {
  return {
    name,
    city,
    year,
    get age() {
      return (new Date().getFullYear() - this.year)
    }
  }
}

const person1a = createPerson(
  "André Moreira", 
  "Rio de Janeiro",
  1968);

const person2a = createPerson(
  "Leandro Moreira",
  "Guarapuava",
  1998);

console.log(person1a);
console.log(person1a.age);
console.log(person2a);
console.log(person2a.age);