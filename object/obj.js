const functionalLanguage = {
  paradigm: "Functional",
};

const scheme = Object.create(functionalLanguage);
scheme.name = "schemne";
scheme.year = 1975;

const javascript = {
  name: "javascript",
  year: 1995,
  // __proto__: functionalLanguage,
};

Object.setPrototypeOf(javascript, functionalLanguage);

console.log(functionalLanguage);
console.log(scheme);
console.dir(javascript, { showHidden: true });
console.log(javascript.paradigm);
javascript.paradigm = "OO"; // -> shadowing
console.log("key value HasOwnProperty");
for (let key in javascript) {
  console.log(key, javascript[key], javascript.hasOwnProperty(key));
}
console.log("Paradigm of prototype: ", javascript.__proto__.paradigm);
console.log(Object.getPrototypeOf(javascript));
