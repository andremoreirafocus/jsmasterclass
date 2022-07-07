const javascript = Object.create({});
Object.assign(
  javascript,
  {
    name: "javscript",
    year: 1995,
    paradigm: "OO and Functional",
  },
  {
    author: "Brendan Eich",
  }
);
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
