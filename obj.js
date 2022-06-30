const functionalLanguage = {
  paradigm: "Functional",
};

const scheme = {
  name: "schemne",
  year: 1975,
  __proto__: functionalLanguage,
};

let javascript = {
  name: "javascript",
  year: 1995,
  __proto__: functionalLanguage,
};

console.log(functionalLanguage);
console.log(scheme);
console.dir(javascript, { showHidden: true });
console.log(javascript.paradigm);
