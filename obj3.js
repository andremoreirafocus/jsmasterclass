const javascript = {};
Object.defineProperty(javascript, "name", {
  value: "Javascript",
});
console.log(javascript);
console.log(javascript.name);

Object.defineProperty(javascript, "year", {
  value: 1995,
  enumerable: true,
});
javascript.year = 2010;
console.log("javascript: ", javascript);

const typescript = {};
Object.defineProperty(typescript, "year", {
  value: "2000",
  enumerable: true,
  writable: true,
});
typescript.year = 2020;
delete typescript.year;
console.log("typescript: ", typescript);

const python = {};
Object.defineProperty(python, "year", {
  value: "2000",
  enumerable: true,
  writable: true,
  configurable: true, // allows property deletion
});
python.year = 2020;
// Object.preventExtensions(python); // prevents from  adding properties

// Object.seal(python); // prevents from adding and removing properties

// Object.freeze(python); // prevents from adding, removing and changing properties
python.author = "Guido";
delete python.year;
console.log("python: ", python);
console.log(Object.isExtensible(python));
console.log(Object.isSealed(python));
console.log(Object.isFrozen(python));

// will cause error because object prototype gets immutable if:
// - Object.preventExtensions is called
// - Object.seal is called
//  - Object.freeze is called
Object.setPrototypeOf(python, {});
console.log("python: ", python);
